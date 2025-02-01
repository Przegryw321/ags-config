import Astal from "gi://Astal?version=3.0"
import { Gtk } from "astal/gtk3"
import { WidgetProps } from "../../utils/widget"
import Hyprland from "../../utils/hyprland"

import Cairo from "gi://cairo"
import Pango from "gi://Pango?version=1.0"
import PangoCairo from "gi://PangoCairo?version=1.0"
import Gdk from "gi://Gdk?version=3.0"

import { set_color, get_property, add_color_stop, rounded_rect } from "../../utils/draw"
import GdkPixbuf from "gi://GdkPixbuf?version=2.0"

const dummyWs = <box className="workspace"/>
const dummyOccupied = <box className="workspace-occupied"/>
const dummyActive = <box className="workspace-active"/>

// The colors for the active ws background gradient are taken as such:
// background-color -> starting color
// border-color -> end color

function draw_workspaces(self: Astal.Box, cr: any, count: number, monitorId: number = 0) {
    const iconTheme = Gtk.IconTheme.get_default()

    const activeWs = Hyprland.get_monitor(monitorId).get_active_workspace()

    const style = self.get_style_context()
    const fontFamily = get_property(style, 'font-family') as string
    const fontSize = get_property(style, 'font-size') as number
    const wsBg = get_property(style, 'border-color') as Gdk.RGBA
    const bgRadius = get_property(style, 'border-radius') as number

    const dummyStyle = dummyWs.get_style_context()
    const normalFg = get_property(dummyStyle, 'color') as Gdk.RGBA
    const diameter = get_property(dummyStyle, 'min-width') as number
    const textOffset = get_property(dummyStyle, 'margin-top') as number
    const radius = diameter / 2

    self.set_size_request(-1, diameter)
    const { width, height } = self.get_allocation()
    const widgetWidth = diameter * count
    const offset = (width - widgetWidth) / 2

    const occupiedStyle = dummyOccupied.get_style_context()
    const occupiedFg = get_property(occupiedStyle, 'color') as Gdk.RGBA
    const occupiedBg = get_property(occupiedStyle, 'background-color') as Gdk.RGBA

    const activeStyle = dummyActive.get_style_context()
    const activeFg = get_property(activeStyle, 'color') as Gdk.RGBA
    const activeBgFrom = get_property(activeStyle, 'background-color') as Gdk.RGBA
    const activeBgTo = get_property(activeStyle, 'border-color') as Gdk.RGBA
    const activePadding = get_property(activeStyle, 'padding-top') as number

    const layout = PangoCairo.create_layout(cr)
    const fontDesc = Pango.font_description_from_string(`${fontFamily} ${fontSize}`)
    layout.set_font_description(fontDesc)

    // Draw workspaces bg
    if (wsBg.alpha > 1) { // when not specified its 1 by default for some reason
        set_color(cr, wsBg)
        rounded_rect(cr, 0, 0, width, height, bgRadius)
        cr.fill()
    }

    const centerY = height / 2
    const mask = self.attribute
    for (let i = 1; i <= count; ++i) {
        const centerX = diameter * i + offset - radius

        set_color(cr, normalFg)

        // Draw occupied workspace bg
        if (mask & (1 << i)) {
            set_color(cr, occupiedBg)
            if (!(mask & (1 << (i - 1)))) { // Draw (
                cr.arc(centerX, centerY, radius, 0.5 * Math.PI, -0.5 * Math.PI)
                cr.fill()
            } else { // Draw =
                cr.rectangle(centerX - radius, centerY - radius, radius, diameter)
                cr.fill()
            }

            if (!(mask & (1 << (i + 1)))) { // Draw )
                cr.arc(centerX, centerY, radius, -0.5 * Math.PI, 0.5 * Math.PI)
                cr.fill()
            } else { // Draw =
                cr.rectangle(centerX, centerY - radius, radius, diameter)
                cr.fill()
            }
            set_color(cr, occupiedFg)
        }

        // Draw active workspace bg
        if (i === activeWs.id) {
            const activeGradient = new Cairo.LinearGradient(
                centerX - radius,
                centerY - radius,
                centerX + radius,
                centerY + radius,
            )
            add_color_stop(activeGradient, 0.2, activeBgFrom)
            add_color_stop(activeGradient, 1.0, activeBgTo)

            cr.setSource(activeGradient)
            cr.arc(centerX, centerY, radius - activePadding, 0, 2 * Math.PI)
            cr.fill()
            set_color(cr, activeFg)
        }

        const workspace = Hyprland.get_workspace(i)
        const icon = workspace?.clients[0]?.class
        if (workspace?.clients.length > 0 && workspace.clients.every(c => c.class === icon)) {
            // Draw icon
            const size = diameter * 0.75
            const hSize = size * 0.5
            try {
                const pixbuf = iconTheme.load_icon(icon === 'zen' ? 'firefox' : icon, size, null)
                const surface = Gdk.cairo_surface_create_from_pixbuf(pixbuf, 1, self.window)
                cr.setSourceSurface(surface, centerX - hSize, centerY - hSize)
                cr.paint()
                continue
            } catch (e) {}
        }

        // Draw text
        layout.set_text(`${i}`, -1)
        const [ layoutWidth, layoutHeight ] = layout.get_pixel_size()
        const x = centerX - (layoutWidth / 2)
        const y = centerY - (layoutHeight / 2) + textOffset

        cr.moveTo(x, y)
        PangoCairo.show_layout(cr, layout)
        cr.stroke()
    }
}

function update_workspace_mask(self: Astal.Box) {
    const workspaces = Hyprland.get_workspaces()
    let mask = 0
    for (const ws of workspaces) {
        if (ws.id <= 0) continue
        if (ws.get_clients().length > 0) mask |= 1 << ws.id
    }
    self.attribute = mask
    self.queue_draw()
}

function Workspace(id: number) {
    return <button className="workspace"
                   cursor="pointer"
                   onClicked={() => Hyprland.dispatch('workspace', `${id}`)}
                   tooltipText={`Przełącz na ${id} pulpit`}/>
}

type WorkspacesProps = WidgetProps & {
    count: number
}
export default function Workspaces({ count, ...props }: WorkspacesProps) {
    return <box className="workspaces"
                onDraw={(self, cr) => draw_workspaces(self, cr, count)}
                setup={(self) => {
                    for (let i = 0; i < count; ++i)
                        self.add(Workspace(i + 1))

                    Hyprland.connect('event', (_Hyprland, event, _args) => {
                        switch (event) {
                            case 'workspacev2':
                            case 'openwindow':
                            case 'closewindow':
                            case 'movewindowv2':
                                update_workspace_mask(self)
                                break
                        }
                    })
                    update_workspace_mask(self)
                }} {...props}/>
}
