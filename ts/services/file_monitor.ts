import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

import Config from './config';
import { md5 } from '../lib/utils';

export interface WallpaperInfo {
  thumbnail: string,
  path: string,
}

class FileMonitor extends Service {
  static {
    Service.register(
      this,
      {
        'themes-changed': ['jsobject'],
        'wallpapers-changed': ['jsobject'],
      },
      {
        'themes': ['jsobject', 'r'],
        'wallpapers': ['jsobject', 'r'],

        'themes-dir': ['string', 'rw'],
        'wallpapers-dir': ['string', 'rw'],
      },
    );
  }

  #themes: string[] | null = null;
  #wallpapers: WallpaperInfo[] | null = null;

  // these are set in the setters
  // default value here so typescript stops complaining
  #themesDir: string = '';
  #wallpapersDir: string = '';

  #themesMonitor: Gio.FileMonitor | null = null;
  #wallpapersMonitor: Gio.FileMonitor | null = null;

  #monitorFlags = {
    recursive: false,
    flags: Gio.FileMonitorFlags.NONE,
  };

  get themes()         { return this.#themes; }
  get wallpapers()     { return this.#wallpapers; }
  get themes_dir()     { return this.#themesDir; }
  get wallpapers_dir() { return this.#wallpapersDir; }

  set themes_dir(dir: string) {
    this.#themesDir = dir;
    this.#themesMonitor?.cancel();

    this.getThemes();
    this.#themesMonitor = Utils.monitorFile(this.#themesDir, _file => this.getThemes(), this.#monitorFlags);
  }
  set wallpapers_dir(dir: string) {
    this.#wallpapersDir = dir;
    this.#wallpapersMonitor?.cancel();

    this.getWallpapers();
    this.#wallpapersMonitor = Utils.monitorFile(this.#wallpapersDir, _file => this.getWallpapers(), this.#monitorFlags);
  }

  constructor() {
    super();
    Config.add('themes_dir', `${App.configDir}/scss`);
    Config.add('wallpapers_dir', `${App.configDir}/wallpapers`);

    this.themes_dir     = Config.options['themes_dir'];
    this.wallpapers_dir = Config.options['wallpapers_dir'];
  }

  #setThemes(themes: string[] | null) {
    this.#themes = themes;
    this.changed('themes');
    this.emit('themes-changed', this.#themes);
  }

  #setWallpapers(wallpapers: WallpaperInfo[] | null) {
    this.#wallpapers = wallpapers;
    this.changed('wallpapers');
    this.emit('wallpapers-changed', this.#wallpapers);
  }

  async getThemes() {
    const dir      = Gio.File.new_for_path(this.#themesDir);
    const children = dir.enumerate_children('', Gio.FileQueryInfoFlags.NONE, null);

    let file: Gio.FileInfo | null = null;
    let themes: string[] = [];
    while (file = children.next_file(null)) {
      if (file.get_file_type() & Gio.FileType.DIRECTORY) {
        themes.push(file.get_name());
      }
    }

    this.#setThemes(themes);
  }

  async getWallpapers() {
    const path = this.#wallpapersDir;
    const dir = Gio.File.new_for_path(path);

    if (!dir.query_exists(null)) {
      console.error('directory doesn\'t exist:', path);
      this.#setWallpapers(null);
      return;
    }

    const children = dir.enumerate_children('standard::content-type', Gio.FileQueryInfoFlags.NONE, null);

    let file: Gio.FileInfo | null = null;
    let wallpapers: WallpaperInfo[] = [];
    while (file = children.next_file(null)) {
      switch (file.get_content_type()) {
        case 'image/png':
        case 'image/jpeg':
          break;
        default: continue;
      }
      const name      = file.get_name();
      const fullpath  = `${path}/${name}`;
      const uri       = `file://${fullpath}`;
      const hash      = md5(uri);
      const thumbnail = `${GLib.get_user_cache_dir()}/thumbnails/large/${hash}.png`;
      this.requestThumbnail(fullpath, thumbnail).catch(console.error);
      wallpapers.push({ thumbnail, path: fullpath });
    }

    this.#setWallpapers(wallpapers);
  }

  async requestThumbnail(path: string, thumbnail: string) {
    const file = Gio.File.new_for_path(thumbnail);
    if (!file.query_exists(null)) {
      return Utils.execAsync(`gdk-pixbuf-thumbnailer ${path} ${thumbnail}`);
    }
  }
}

const service = new FileMonitor;
export default service;
