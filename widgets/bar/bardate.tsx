import { Gtk } from "astal/gtk3"
import { Clock, ColorDate } from "../date"
import { WidgetProps } from "../../utils/widget"

export default function BarDate({ halign, ...props }: WidgetProps) {
    return <box orientation={Gtk.Orientation.VERTICAL} {...props}>
        <Clock className="bar-clock" halign={halign} css="margin-bottom: -.1rem;"/>
        <ColorDate className="bar-date" halign={halign}/>
    </box>
}
