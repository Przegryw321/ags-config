import { Bar } from './windows/bar';
import { BarSecondary } from './windows/bar_secondary';
import { StartMenu } from './windows/startmenu';
import { Clickaway } from './windows/clickaway';

import Config from './services/config';
import { reload_css, auto_scss_reload } from './scss';

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
];
const windows = [
  Bar(),
  BarSecondary(),
  StartMenu(),
  Clickaway(0, clickaway_windows),
  Clickaway(1, clickaway_windows),
];

App.config({
  windows: await Promise.all(windows),
});
