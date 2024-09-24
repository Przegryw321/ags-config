import Gtk from 'gi://Gtk?version=3.0';
import Config from '../services/config';
import FileMonitor from '../services/file_monitor';
import Weather from '../services/weather';

import { Title, ComboBoxOption, SwitchOption, NumberOption, ButtonOption, EntryOption } from '../widgets/setting_widgets';

const ThemeSettings = () => Widget.Box({
  vertical: true,
  children: [
    Title('Motyw'),
    ComboBoxOption({
      label: 'Zmień motyw',
      option: 'theme',
      items: FileMonitor.themes ?? [],

      setup: (self: any) => self.hook(FileMonitor, (self: Gtk.ComboBoxText, themes: string[] | null) => {
        if (!themes) return;
        self.remove_all();
        themes?.forEach(theme => self.append(theme, theme));
        self.set_active_id(Config.options['theme']);
      }, 'themes-changed'),
    }),
    ButtonOption({
      label1: 'Zmień tapetę',
      label2: 'Otwórz',
      onClicked: () => {
        App.toggleWindow('wallpaper');
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
      label: 'Powiększ obraz firefox',
      option: 'album_enlarge_firefox',
    }),
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

const WeatherSettings = () => Widget.Box({
  vertical: true,
  children: [
    Title('Pogoda'),
    EntryOption({
      label: 'Miasto',
      option: 'weather_city',
      onAccept: () => Weather.reloadOptions(),
    }),
    EntryOption({
      label: 'Język',
      option: 'weather_lang',
      onAccept: () => Weather.reloadOptions(),
    }),
    ComboBoxOption({
      label: 'Jednostki',
      option: 'weather_units',
      items: [
        'metric',
        'imperial',
      ],
      onChanged: () => Weather.reloadOptions(), 
    }),
    ButtonOption({
      label1: 'Odśwież pogodę',
      label2: 'Odśwież',
      onClicked: () => Weather.fetchCurrentWeather(true),
    })
  ],
});

const SettingsLayout = () => Widget.Box({
  className: 'settings-layout',
  vertical: true,

  children: [
    ThemeSettings(),
    BarSettings(),
    WeatherSettings(),
  ],
});

export const Settings = async (monitor: number = 0) => Widget.Window({
  monitor,
  visible: false,
  name: 'settings',
  anchor: ['top', 'right'],
  margins: [10],
  layer: 'overlay',
  exclusivity: 'normal',
  keymode: 'on-demand',

  child: SettingsLayout(),
});
