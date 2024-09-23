import { screenshot_monitor, screenshot_region, screenshot_window } from "../lib/hyprland";
import { LabelButton } from "./button";
import { Menu, MenuLabel } from "./menu";

export const SettingsButton = ({ ...props } = {}) => LabelButton({
  ...props,
  label: '\ue8b8',
  tooltipMarkup: 'Otwórz ustawienia',
  vpack: 'center',
  onClicked: () => App.toggleWindow('settings'),
});

const ScreenshotMenu = Menu([
  MenuLabel('Zrzut obszaru', screenshot_region),
  MenuLabel('Zrzut okna', screenshot_window),
  MenuLabel('Zrzut ekranu', screenshot_monitor),
])

export const ScreenshotButton = ({ ...props} = {}) => LabelButton({
  ...props,
  label: '\uf7d2',
  tooltipMarkup: 'Zrób zrzut ekranu',
  vpack: 'center',
  onPrimaryClick: screenshot_region,
  onSecondaryClick: (_: any, event: any) => ScreenshotMenu.popup_at_pointer(event),
});

export const MiscButtons = ({ ...props } = {}) => Widget.Box({
  ...props,
  spacing: 3,
  children: [
    ScreenshotButton({ className: 'screenshot' }),
    SettingsButton({ className: 'settings' }),
  ],
});
