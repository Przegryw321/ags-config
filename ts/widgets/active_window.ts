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

export const ActiveWindow = ({ ...props } = {}) => Widget.Box({
  ...props,
  className: 'activewindow',
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
