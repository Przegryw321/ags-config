import Config from '../services/config';

import { Workspaces } from '../widgets/workspaces';
import { BarTime } from '../widgets/bartime';
import { ArchIcon } from '../widgets/archicon';
import { WindowButton } from '../widgets/window_button';
import { ActiveWindow } from '../widgets/active_window';
import { ActivePlayerWrapper } from '../widgets/player_wrappers';
import { PlayerSummary } from '../widgets/player_complex';
import { Systray } from '../widgets/systray';
import { ShutdownLeft } from '../widgets/shutdown';
import { BarWeather } from '../widgets/bar_weather';
import { MiscButtons } from '../widgets/misc_buttons';
import { Separator } from '../widgets/misc_widgets';

const Mpris = await Service.import('mpris');

const LeftRight = () => Widget.Box({
  hexpand: true,
  hpack: 'end',
  children: [
    WindowButton(
      BarWeather({ className: 'bar-weather' }),
      'weather',
      'Pokaż pogodę',
    ),
  ]
});

const Left = () => Widget.Box({
  children: [
    WindowButton(
      ArchIcon({ className: 'bar-archicon' }),
      'startmenu',
      'Pokaż menu startowe',
    ),
    ActiveWindow({ vpack: 'center' }),
    LeftRight(),
  ],
});

const Center = () => Widget.Box({
  children: [
    Workspaces(),
  ],
});

const RightLeft = () => Widget.Box({
  hexpand: true,
  hpack: 'start',
  children: [
    WindowButton(
      ActivePlayerWrapper(PlayerSummary, { className: 'player-summary' }),
      'player',
      'Pokaż odtwarzacz', {
        setup: (self: any) => self.hook(Mpris, (self: any) => {
          self.visible = Object.keys(self.child.get_children()).length > 0;
        }, 'player-changed'),
      },
    ),
  ],
});

const Right = () => Widget.Box({
  vpack: 'center',
  hexpand: true,
  css: 'padding-right: .5rem;',
  children: [
    RightLeft(),
    ShutdownLeft({ className: 'bar-shutdown' }),
    Systray({ className: 'systray' }),
    Separator(),
    MiscButtons({ className: 'bar-misc-buttons' }),
    Separator(),
    BarTime({ className: 'bartime' }),
  ],
});

export const Bar = async (monitor: number = 0) => Widget.Window({
  monitor,
  name: 'bar',
  anchor: ['top', 'left', 'right'],
  exclusivity: 'exclusive',

  child: Widget.CenterBox({
    startWidget: Left(),
    centerWidget: Center(),
    endWidget: Right(),
  }),

  setup: self => {
    Config.add('bar_floating', false);
    Config.add('bar_margin', 20);
    Config.add('bar_corner_radius', 10);

    self.hook(Config, self => {
      const startmenu_button = self.child.children[0]?.children[0];
      if (Config.options['bar_floating']) {
        const m = Config.options['bar_margin'];
        const r = Config.options['bar_corner_radius'];
        self.margins = [m, m, 0, m];
        self.css = `border-radius: ${r}px;`;

        if (startmenu_button)
          startmenu_button.css = `border-radius: ${r}px 0 0 ${r}px;`;
      } else {
        self.margins = [0];
        self.css = 'border-radius: 0;';
        if (startmenu_button)
          startmenu_button.css = 'border-radius: 0;';
      }
    });
  }
});
