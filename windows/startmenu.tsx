import { Astal, Gtk, App } from "astal/gtk3"
import { WidgetProps } from "../utils/widget"
import Powermenu from "../widgets/startmenu/powermenu"
import Applist from "../widgets/startmenu/applist"

function Left(props: WidgetProps): JSX.Element {
    return <box {...props}>
        <Powermenu orientation={Gtk.Orientation.VERTICAL} valign={Gtk.Align.END}/>
    </box>
}

function Right(props: WidgetProps): JSX.Element {
    return <box {...props}>
        <Applist className="startmenu-applist"/>
    </box>
}

export default async function Startmenu(): Promise<JSX.Element> {
    const anchor = Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT

    return <window name="startmenu"
                   namespace="startmenu"
                   anchor={anchor}
                   visible={false}
                   margin={15}
                   application={App}>
        <box className="startmenu" css="min-width: 50rem; min-height: 20rem;">
            <Left className="startmenu-left"/>
            <Right className="startmenu-right"/>
        </box>
    </window>
}