import { Bar } from './windows/bar';
import { StartMenu } from './windows/startmenu';
import { Clickaway } from './windows/clickaway';
import { PlayerWindow } from './windows/player';
import { VolumePopup } from './windows/volume_popup';
import { Settings } from './windows/settings';
import { Wallpaper } from './windows/wallpaper';
import { WeatherWindow } from './windows/weather_window';

import Config from './services/config';
import ActivePlayer from './services/active_player';
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
  StartMenu(),
  Clickaway(0, clickaway_windows),
  PlayerWindow(),
  VolumePopup(),
  Settings(),
  Wallpaper(),
  WeatherWindow(),
];

globalThis.Config = Config;
globalThis.playPause = () => ActivePlayer.playPause();
globalThis.next      = () => ActivePlayer.next();
globalThis.previous  = () => ActivePlayer.previous();
globalThis.shift     = () => ActivePlayer.shift();

App.config({
  windows: await Promise.all(windows),
});
