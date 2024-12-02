import { Gtk } from "astal/gtk3"
import { WidgetProps } from "../../utils/widget"
import { focused } from "../../utils/hyprland"
import { DeepBindLabel } from "../misc"

type ActiveTitleProps = WidgetProps
export function ActiveWindowTitle(props: ActiveTitleProps) {
    return <DeepBindLabel binding={focused.client} property="title" {...props}/>
}

type ActiveClassProps = WidgetProps
export function ActiveWindowClass(props: ActiveClassProps) {
    return <DeepBindLabel binding={focused.client} property="class" {...props}/>
}

type ActiveSummaryProps = WidgetProps
export function ActiveWindowSummary(props: ActiveSummaryProps) {
    return <box orientation={Gtk.Orientation.VERTICAL} {...props}>
        <ActiveWindowTitle className="title"/>
        <ActiveWindowClass className="class"/>
    </box>
}
