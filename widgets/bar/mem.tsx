import { bind } from "astal"
import { Gtk, Widget } from "astal/gtk3"
import { MemPercentage } from "../../variables/mem"

export default function BarMem({ ...props }: Widget.BoxProps) {
  return <box {...props}>
    <label label="MEM " className="label" />
    <label label={bind(MemPercentage).as(v => `${v}%`)} className="value" />
  </box>
}
