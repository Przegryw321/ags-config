import Config from '../services/config';

import { Workspaces } from '../widgets/workspaces';
import { BarTime } from '../widgets/bartime';
import { ArchIcon } from '../widgets/archicon';
import { WindowButton } from '../widgets/window_button';
import { ActiveWindow } from '../widgets/active_window';
import { ActivePlayerWrapper, PlayerSummary } from '../widgets/player';
import { Systray } from '../widgets/systray';

const left = Widget.Box({
  children: [
    WindowButton(
      ArchIcon({ className: 'bar-archicon' }),
      'startmenu',
      'Pokaż menu startowe',
    ),
    ActiveWindow(),
  ],
})
const center = Widget.Box({
  children: [
    Workspaces(),
  ],
})
const right_start = Widget.Box({
  hexpand: true,
  hpack: 'start',
  children: [
    WindowButton(
      ActivePlayerWrapper(PlayerSummary),
      'player',
      'Pokaż odtwarzacz',
    ),
  ],
});
const right = Widget.Box({
  vpack: 'center',
  hexpand: true,
  css: 'padding-right: .5rem;',
  children: [
    right_start,
    Systray({ className: 'systray' }),
    BarTime(),
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
