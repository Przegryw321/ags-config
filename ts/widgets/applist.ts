export const AppIcon = (app: string, closeWindow?: string) => Widget.Button({
  className: 'appicon',
  child: Widget.Box({
    vertical: true,
    vpack: 'center',
    children: [
      Widget.Icon({
        className: 'appicon-icon',
        icon: app,
      }),
      Widget.Label({
        label: app,
      })
    ],
  }),
  onPrimaryClick: () => {
    if (closeWindow) App.closeWindow(closeWindow);
    Utils.execAsync(app === 'spotify' ? 'spotify-launcher' : app);
  }
});

export const Applist = (childrenPerLine: number, items: string[], closeWindow?: string) => Widget.FlowBox({
  setup(self) {
    self.set_homogeneous(true);
    self.set_min_children_per_line(childrenPerLine),
    self.set_max_children_per_line(childrenPerLine),

    items.forEach(item => self.add(AppIcon(item, closeWindow)));
  }
})
