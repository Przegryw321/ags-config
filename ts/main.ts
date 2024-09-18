import { Bar } from './windows/bar';
import { BarSecondary } from './windows/bar_secondary';

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

const windows = [
  Bar(),
  BarSecondary(),
];

App.config({
  windows: await Promise.all(windows),
});
