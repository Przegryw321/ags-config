import Config from '../services/config';

import { Workspaces } from '../widgets/workspaces';
import bartime from '../widgets/bartime';

const left = Widget.Box({
  css: 'padding-left: .5rem;',
  children: [
  ],
})
const center = Widget.Box({
  children: [
    Workspaces(),
  ],
})
const right = Widget.Box({
  hpack: 'end',
  vpack: 'center',
  css: 'padding-right: .5rem;',
  children: [
    bartime,
  ],
})

export const Bar = async (monitor: number = 0) => Widget.Window({
  monitor,
  name: 'bar',
  anchor: ['top', 'left', 'right'],
  exclusivity: 'exclusive',

  child: Widget.CenterBox({
    startWidget: left,
    centerWidget: center,
    endWidget: right,
  }),

  setup: self => {
    Config.add('bar_floating', false);
    Config.add('bar_margin', 20);

    self.hook(Config, self => {
      if (Config.options['bar_floating']) {
        const m = Config.options['bar_margin'];
        self.margins = [m, m, 0, m]
      } else {
        self.margins = [0]
      }
    });
  }
});
