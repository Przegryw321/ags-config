import Config from '../services/config';

import workspaces from '../widgets/workspaces';

const left = Widget.Box({})
const center = Widget.Box({
  children: [
    workspaces,
  ],
})
const right = Widget.Box({})

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
