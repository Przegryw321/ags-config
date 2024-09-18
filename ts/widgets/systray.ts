import { TrayItem } from "types/service/systemtray";

// Importing systemtray causes a bunch of assertions to fail for some reason...
const SystemTray = await Service.import('systemtray');

export const SystrayItem = (item: TrayItem) => Widget.EventBox({
  className: 'systray-item',
  child: Widget.Icon({ icon: item.icon }),
  tooltipMarkup: item.tooltip_markup,

  onPrimaryClick: (_, event) => item.activate(event),
  onMiddleClick: (_, event) => item.secondaryActivate(event),
  onSecondaryClick: (_, event) => item.openMenu(event),
});

export const Systray = ({ spacing = 5, ...props }) => Widget.Box({
  ...props,
  spacing,

  children: SystemTray.bind('items').as(items => items.map(SystrayItem))
})
