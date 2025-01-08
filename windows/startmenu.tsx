import { Astal, Gtk, App, Gdk } from "astal/gtk3"
import { WidgetProps } from "../utils/widget"
import Powermenu from "../widgets/startmenu/powermenu"
import Applist from "../widgets/startmenu/applist"

import { mask_has_val, double_wrap } from "../utils/math"

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
                   className="startmenu-window"
                   namespace="startmenu"
                   anchor={anchor}
                   layer={Astal.Layer.OVERLAY}
                   keymode={Astal.Keymode.EXCLUSIVE}
                   visible={false}
                   margin={15}
                   application={App}
                   onKeyPressEvent={(self, event) => {
                       const key = event.get_keyval()[1]
                       print('event:', key)

                       if (mask_has_val(key, Gdk.KEY_Escape)) self.hide()
                       const isDown = mask_has_val(key, Gdk.KEY_Down)
                       if (isDown || mask_has_val(key, Gdk.KEY_Up)) {
                           const powermenu = self.get_child()!.get_children()[0].get_children()[0] as Astal.Box
                           const children = powermenu.get_children()
                           const focused = self.get_focus()
                           const inc = isDown ? 1 : -1

                           console.log('children:', children.map(c => c.get_child().get_icon()))

                           print('inc:', inc)

                           children.forEach(c => c.toggleClassName('force-hover', false))

                           const icon = focused.get_child().get_icon()
                           print('icon:', icon)
                           const index = children.findIndex(c => c.get_child().get_icon() === icon)
                           print('index:', index)
                           print('new_index:', index + inc)
                           print('wrap:', double_wrap(index + inc, children.length))
                           const child = children[double_wrap(index + inc, children.length)]

                           self.set_focus(child)
                           child.toggleClassName('force-hover', true)

                           //print('focus_win:', self.get_focus().get_child().get_icon())
                       }
                   }}
           >
        <box className="startmenu" css="min-height: 20rem;">
            <Left className="startmenu-left"/>
            <Right className="startmenu-right" css="margin-right: 1rem;"/>
        </box>
    </window>
}
