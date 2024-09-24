import Gtk from 'gi://Gtk?version=3.0';
import { FileChooserButton } from "../widgets/file_chooser";
import { IconButton } from '../widgets/button';

import Config from '../services/config';
import FileMonitor, { WallpaperInfo } from '../services/file_monitor';
import { set_wallpaper } from '../lib/hyprland';

const WallpaperPath = () => Widget.Box({
  className: 'wallpaper-path',

  children: [
    Widget.Label({
      className: 'wallpaper-path-label',
      label: 'Ścieżka',
      hpack: 'start',
      hexpand: true,
    }),
    FileChooserButton({
      action: Gtk.FileChooserAction.SELECT_FOLDER,
      onFileSet: self => {
        const path = self.get_filename() ?? '';
        Config.set('wallpapers_dir', path);
        FileMonitor.wallpapers_dir = path;
      },
      setup: self => {
        self.set_filename(Config.options['wallpapers_dir']);
      }
    }),
  ]
});

const WallpaperPreview = (icon: string, path: string) => Widget.Box({
  vertical: true,
  children: [
    Widget.Icon({
      icon,
      vpack: 'center',
      vexpand: true,
    }),
    Widget.Label({
      className: 'wallpaper-button-label',
      label: path.slice(path.lastIndexOf('/') + 1),
      truncate: 'end',
      hpack: 'center',
    }),
  ],
});

const WallpaperButton = (icon: string, path: string) => Widget.Button({
  className: 'wallpaper-button',
  child: WallpaperPreview(icon, path),
  onClicked: () => set_wallpaper(path),
});

const WallpaperList = () => Widget.FlowBox({
  className: 'wallpaper-list',

  setup(self) {
    self.set_min_children_per_line(3);
    self.set_max_children_per_line(3);

    FileMonitor.wallpapers?.forEach(({ thumbnail, path }) => {
      self.add(WallpaperButton(thumbnail, path));
    });

    self.hook(FileMonitor, (self: Gtk.FlowBox, wallpapers: WallpaperInfo[] | null) => {
      if (!wallpapers) return;

      self.get_children().forEach(child => child.destroy());

      wallpapers.forEach(({ thumbnail, path }) => {
        self.add(WallpaperButton(thumbnail, path));
      });
      self.show_all();
    }, 'wallpapers-changed');
  }
});

const WallpaperScroll = () => Widget.Scrollable({
  className: 'wallpaper-scroll',
  child: WallpaperList(),
  hscroll: 'never',
  vscroll: 'always',
  vexpand: true,
});

const WallpaperLayout = () => Widget.Box({
  className: 'wallpaper-layout',
  vertical: true,

  children: [
    WallpaperPath(),
    WallpaperScroll(),
  ]
});

export const Wallpaper = async (monitor: number = 0) => Widget.Window({
  monitor,
  visible: false,
  name: 'wallpaper',
  anchor: ['right', 'top', 'bottom'],
  margins: [20],
  layer: 'overlay',
  exclusivity: 'normal',

  child: WallpaperLayout(),
});
