const Hyprland = await Service.import('hyprland');

export const ActiveWindowTitle = () => Widget.Label({
  className: 'activewindow-title',
  hpack: 'start',
  label: Hyprland.active.client.bind('title'),
});

export const ActiveWindowClass = () => Widget.Label({
  className: 'activewindow-class',
  hpack: 'start',
  label: Hyprland.active.client.bind('class'),
});

export const ActiveWindow = () => Widget.Box({
  vertical: true,
  vpack: 'center',

  children: [
    ActiveWindowTitle(),
    ActiveWindowClass(),
  ],
});
