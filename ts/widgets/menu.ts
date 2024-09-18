export const Menu = (items: any) => Widget.Menu({
  children: items,
})

export const MenuLabel = (label: string, onActivate = () => {}) => Widget.MenuItem({
  child: Widget.Label({
    label,
    hpack: 'start',
  }),
  onActivate,
})
