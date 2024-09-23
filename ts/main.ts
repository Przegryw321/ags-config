import { Bar } from './windows/bar';
import { BarSecondary } from './windows/bar_secondary';
import { StartMenu } from './windows/startmenu';
import { Clickaway } from './windows/clickaway';
import { PlayerWindow } from './windows/player';
import { VolumePopup } from './windows/volume_popup';
import { Settings } from './windows/settings';
import { Wallpaper } from './windows/wallpaper';

import Config from './services/config';
import { reload_css, auto_scss_reload } from './scss';

Config.add('theme', 'catppuccin_mocha');

const _dummy = Widget.Label({
  setup: self => {
    Config.add('theme', 'catppuccin_mocha');
    self.hook(Config, () => {
      reload_css();
      Config.saveToFile();
    });
  }
});

auto_scss_reload();

const clickaway_windows = [
  'startmenu',
  'player',
  'settings',
  'wallpaper',
];
const windows = [
  Bar(),
  BarSecondary(),
  StartMenu(),
  Clickaway(0, clickaway_windows),
  Clickaway(1, clickaway_windows),
  PlayerWindow(),
  VolumePopup(),
  Settings(),
  Wallpaper(),
];

App.config({
  windows: await Promise.all(windows),
});
