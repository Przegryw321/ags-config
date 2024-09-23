import Gtk from 'gi://Gtk?version=3.0';
import Config from '../services/config';

import { Title, ComboBoxOption, SwitchOption, NumberOption, ButtonOption } from '../widgets/setting_widgets';

import { get_themes } from '../lib/utils';

const ThemeSettings = () => Widget.Box({
  vertical: true,
  children: [
    Title('Motyw'),
    ComboBoxOption({
      label: 'Zmień motyw',
      option: 'theme',
      items: get_themes(),
      setup(self: Gtk.ComboBoxText) {
        self.set_active_id(Config.options['theme']);
      }
    }),
    ButtonOption({
      label1: 'Zmień tapetę',
      label2: 'Otwórz',
      onClicked: () => {
        App.openWindow('wallpaper');
        App.closeWindow('settings');
      }
    }),
  ],
});

const BarSettings = () => Widget.Box({
  vertical: true,
  children: [
    Title('Pasek zadań'),
    SwitchOption({
      label: 'Pływający pasek',
      option: 'bar_floating',
    }),
    NumberOption({
      label: 'Margines',
      option: 'bar_margin',
      min: 0,
    }),
    NumberOption({
      label: 'Zaokrąglenie',
      option: 'bar_corner_radius',
      min: 0,
    }),
  ]
});

const SettingsLayout = () => Widget.Box({
  className: 'settings-layout',
  vertical: true,

  children: [
    ThemeSettings(),
    BarSettings(),
  ],
});

export const Settings = (monitor: number = 0) => Widget.Window({
  monitor,
  visible: false,
  name: 'settings',
  anchor: ['top', 'right'],
  margins: [20],
  layer: 'top',
  exclusivity: 'normal',
  keymode: 'on-demand',

  child: SettingsLayout(),
});
