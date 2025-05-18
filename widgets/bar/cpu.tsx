import { bind } from "astal"
import { LoadAvg } from "../../variables/cpu"

type BarCpuProps = {
  className: string
}
export default function BarCpu({ ...props }: BarCpuProps) {
  return <box {...props}>
    <label label="LOAD " className="label" />
    <label label={bind(LoadAvg).as(v => `${v}`)} className="value" />
  </box>
}
