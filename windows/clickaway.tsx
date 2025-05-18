import { App, Astal } from "astal/gtk3"

const { TOP, BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor

export default async function Clickaway(windows: Astal.Window[], monitor: number = 0): Promise<JSX.Element> {
  const anchor = TOP | BOTTOM | LEFT | RIGHT

  return <window monitor={monitor}
    layer={Astal.Layer.TOP}
    anchor={anchor}
    visible={false}
    setup={self => self.hook(App, 'window-toggled', (self, _window) => {
      self.visible = windows.filter(w => w.visible).length > 0
    })}>
    <eventbox onClick={() => windows.forEach(w => w.set_visible(false))}/>
  </window>
}
