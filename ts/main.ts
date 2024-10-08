import { Bar } from './windows/bar';
import { BarSecondary } from './windows/bar_secondary';
import { StartMenu } from './windows/startmenu';
import { Clickaway } from './windows/clickaway';
import { PlayerWindow } from './windows/player';
import { VolumePopup } from './windows/volume_popup';
import { Settings } from './windows/settings';
import { Wallpaper } from './windows/wallpaper';
import { WeatherWindow } from './windows/weather_window';

import Config from './services/config';
import { auto_scss_reload } from './scss';

Config.add('theme', 'catppuccin_mocha');

auto_scss_reload();

const clickaway_windows = [
  'startmenu',
  'player',
  'settings',
  'wallpaper',
  'weather',
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
  WeatherWindow(),
];

globalThis.Config = Config;

App.config({
  windows: await Promise.all(windows),
});
