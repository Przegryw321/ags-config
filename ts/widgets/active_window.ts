const Hyprland = await Service.import('hyprland');

export const ActiveWindowTitle = () => Widget.Label({
  className: 'activewindow-title',
  hpack: 'start',
  label: Hyprland.active.client.bind('title'),
  truncate: 'end',
});

export const ActiveWindowClass = () => Widget.Label({
  className: 'activewindow-class',
  hpack: 'start',
  label: Hyprland.active.client.bind('class'),
  truncate: 'end',
});

export const ActiveWindow = () => Widget.Box({
  className: 'activewindow',
  vertical: true,
  vpack: 'center',

  children: [
    ActiveWindowTitle(),
    ActiveWindowClass(),
  ],
});
