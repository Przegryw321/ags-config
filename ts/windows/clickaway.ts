import Config from '../services/config';

export const Clickaway = async (monitor: number = 0, windows: string[]) => Widget.Window({
  monitor,
  visible: false,
  name: `clickaway${monitor}`,
  anchor: ['top', 'right', 'bottom', 'left'],

  child: Widget.EventBox({
    onPrimaryClick: () => windows.forEach(App.closeWindow),
  }),

  setup: self => {
    Config.add('clickaway', true);

    self.hook(App, (self, _window) => {
      self.visible = Config.options['clickaway'] && windows
        .map(win => App.getWindow(win)?.visible)
        .includes(true);
    });
  }
});
