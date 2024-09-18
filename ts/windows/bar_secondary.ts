import { Workspaces } from '../widgets/workspaces';
import { PopupDate } from '../widgets/bartime';

const left = Widget.Box({
  children: [

  ],
});
const center = Widget.Box({
  children: [
    Widget.Box({
      className: 'bar-secondary-workspaces',
      children: [
        Workspaces(),
      ],
    }),
  ],
});
const right = Widget.Box({
  hpack: 'end',
  children: [
    PopupDate({}, 'bar-secondary-bartime'),
  ],
});

export const BarSecondary = async (monitor: number = 1) => Widget.Window({
  monitor,
  name: 'bar-secondary',
  anchor: ['bottom', 'left', 'right'],
  margins: [0, 0, 10, 0],
  exclusivity: 'exclusive',

  child: Widget.CenterBox({
    startWidget: left,
    centerWidget: center,
    endWidget: right,
  }),
});
