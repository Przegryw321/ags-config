import { Bar } from './windows/bar';

import Config from './services/config';
import { reload_css } from './scss_auto_reload';

const _dummy = Widget.Label({
  setup: self => {
    Config.add('theme', 'catppuccin_mocha');
    self.hook(Config, () => {
      reload_css();
      Config.saveToFile();
    });
  }
});


const windows = [
  Bar(),
];

App.config({
  windows: await Promise.all(windows),
});
