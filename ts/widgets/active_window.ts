import { ActiveClient } from "types/service/hyprland";

const Hyprland = await Service.import('hyprland');

export const ActiveWindowTitle = ({ ...props } = {}) => Widget.Label({
  ...props,
  className: 'activewindow-title',
  label: Hyprland.active.client.bind('title'),
});

export const ActiveWindowClass = ({ ...props } = {}) => Widget.Label({
  ...props,
  className: 'activewindow-class',
  label: Hyprland.active.client.bind('class'),
});

export const ActiveWindowDetailTooltip = (activeClient: ActiveClient): string => {
  const client = Hyprland.getClient(activeClient.address);
  if (!client) return 'Brak informacji';

  const properties = {
    ...client,
    workspace: client.workspace.id,
  };

  const longest = Object.keys(properties).reduce((a, b) => {
    return a.length > b.length ? a : b;
  }).length;

  let tooltip = '<span font_family="monospace"><span font_weight="bold">Właściwości okna:</span>';
  for (let [key, value] of Object.entries(properties)) {
    value = value.toString().replaceAll('&', '&amp;');
    tooltip += `\n${(key + ':').padEnd(longest + 1)} ${value}`;
  }
  tooltip += '</span>';

  return tooltip;
};

export const ActiveWindow = ({ ...props } = {}) => Widget.Box({
  ...props,
  className: 'activewindow',
  tooltipMarkup: Hyprland.active.bind('client').as(ActiveWindowDetailTooltip),
  vertical: true,

  children: [
    ActiveWindowTitle({
      truncate: 'end',
      hpack: 'start',
    }),
    ActiveWindowClass({
      truncate: 'end',
      hpack: 'start',
    }),
  ],
});
