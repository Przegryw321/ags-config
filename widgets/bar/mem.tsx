import { bind } from "astal"
import { Gtk, Widget } from "astal/gtk3"
import { MemPercentage } from "../../variables/mem"
import { get_property } from "../../utils/draw"
import { RGBA, gradient3 } from "../../variables/color"

export default function BarMem({ ...props }: Widget.BoxProps) {
  return <box {...props}>
    <label label="MEM " className="label" />
    <label label={bind(MemPercentage).as(v => `${v}%`)} className="value" setup={self => {
      self.hook(MemPercentage, (self, perc) => {
        const style = self.get_style_context()
        const c1 = get_property(style, 'border-top-color') as unknown as RGBA
        const c2 = get_property(style, 'border-left-color') as unknown as RGBA
        const c3 = get_property(style, 'border-bottom-color') as unknown as RGBA
        const color = gradient3(c1, c2, c3, perc / 100)
        self.css = `color: rgba(${color.red * 255}, ${color.green * 255}, ${color.blue * 255}, ${color.alpha})`
      })
    }} />
  </box>
}
