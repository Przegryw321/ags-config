import { bind } from "astal"
import { CpuCount, LoadAvg } from "../../variables/cpu"
import { get_property } from "../../utils/draw"
import { RGBA, gradient3 } from "../../utils/color"

type BarCpuProps = {
  className: string
}
export default function BarCpu({ ...props }: BarCpuProps) {
  return <box {...props}>
    <label label="LOAD " className="label" />
    <label label={bind(LoadAvg).as(v => `${v}`)} className="value" setup={self => {
      self.hook(LoadAvg, (self, load) => {
        const style = self.get_style_context()
        const c1 = get_property(style, 'border-top-color') as unknown as RGBA
        const c2 = get_property(style, 'border-left-color') as unknown as RGBA
        const c3 = get_property(style, 'border-bottom-color') as unknown as RGBA
        const color = gradient3(c1, c2, c3, load / (CpuCount.get() || 12))
        self.css = `color: rgba(${color.red * 255}, ${color.green * 255}, ${color.blue * 255}, ${color.alpha})`
      })
    }} />
    /
    <label label={bind(CpuCount).as(v => `${v}`)} className="max" />
  </box>
}
