export const Clickaway = (monitor: number = 0, windows: string[]) => Widget.Window({
  monitor,
  visible: false,
  name: `clickaway${monitor}`,
  anchor: ['top', 'right', 'bottom', 'left'],

  child: Widget.EventBox({
    onPrimaryClick: () => windows.forEach(App.closeWindow),
  }),

  setup: self => self.hook(App, (self, _window) => {
    self.visible = windows
      .map(win => App.getWindow(win)?.visible)
      .includes(true);
  }),
});
