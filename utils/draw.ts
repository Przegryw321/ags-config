import Cairo from "gi://cairo?version=1.0"
import Gdk from "gi://Gdk?version=3.0"
import Gtk from "gi://Gtk?version=3.0"

export function set_color(cr: Cairo.Context, color: Gdk.RGBA): void {
    cr.setSourceRGBA(color.red, color.green, color.blue, color.alpha)
}

export function add_color_stop(pattern: Cairo.LinearGradient, value: number, color: Gdk.RGBA): void {
    pattern.addColorStopRGBA(value, color.red, color.green, color.blue, color.alpha)
}

export function get_property(style: Gtk.StyleContext, property: string): Gdk.RGBA | number | string {
    return style.get_property(property, Gtk.StateFlags.NORMAL) as any
}

export function rounded_rect(cr: Cairo.Context,
                             x: number,
                             y: number,
                             width: number,
                             height: number,
                             radius: number): void {
    const startX = x + radius
    const startY = y + radius
    const oppX = x + width
    const oppY = y + height
    const endX = oppX - radius
    const endY = oppY - radius

    cr.newSubPath()
    cr.arc(endX, startY, radius, -0.5 * Math.PI, 0)
    cr.arc(endX, endY, radius, 0, 0.5 * Math.PI)
    cr.arc(startX, endY, radius, 0.5 * Math.PI, Math.PI)
    cr.arc(startX, startY, radius, Math.PI, 1.5 * Math.PI)
    cr.closePath()
}
