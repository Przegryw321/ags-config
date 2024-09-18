import Gdk from 'gi://Gdk';
import { Menu, MenuLabel } from '../widgets/menu';
const Hyprland = await Service.import('hyprland');

const PowerButton = (name: string, tooltip: string, label: string, cmd: (_: any, event: Gdk.Event) => void) => Widget.Button({
  className: `poweroption ${name}`,
  tooltipMarkup: tooltip,
  child: Widget.Label(label),
  onPrimaryClick: cmd,
});

const logout_menu = Menu([
  MenuLabel('Wyloguj się', () => {
    Hyprland.messageAsync('exit');
  }),
  MenuLabel('Anuluj'),
]);

const reboot_menu = Menu([
  MenuLabel('Uruchom ponownie', () => {
    Utils.execAsync('systemctl reboot');
  }),
  MenuLabel('Anuluj'),
]);

const poweroff_menu = Menu([
  MenuLabel('Zamknij', () => {
    Utils.execAsync('shutdown now');
  }),
  MenuLabel('Zamknij za 1 minutę', () => {
    Utils.execAsync('shutdown +1');
  }),
  MenuLabel('Anuluj', () => {
    Utils.execAsync('shutdown -c');
  }),
]);

export const SleepButton = () => PowerButton(
  'sleep',
  'Uśpij',
  '\uef44',
  () => {
    App.closeWindow('startmenu');
    Utils.execAsync('systemctl suspend');
  }
);

export const LogoutButton = () => PowerButton(
  'logout',
  'Wyloguj się',
  '\ue9ba',
  (_, event) => logout_menu.popup_at_pointer(event),
);

export const RebootButton = () => PowerButton(
  'reboot',
  'Uruchom ponownie',
  '\uf053',
  (_, event) => reboot_menu.popup_at_pointer(event),
);

export const PoweroffButton = () => PowerButton(
  'poweroff',
  'Zamknij',
  '\ue8ac',
  (_, event) => poweroff_menu.popup_at_pointer(event),
);
