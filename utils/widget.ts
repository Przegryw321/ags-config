import { Gtk } from "astal/gtk3"

export type WidgetProps = {
    className?: string
    css?: string
    halign?: Gtk.Align
    valign?: Gtk.Align
    hexpand?: boolean
    vexpand?: boolean
    tooltipText?: string
    tooltipMarkup?: string
}

export type LabelProps = WidgetProps & {
    label?: string
    truncate?: boolean
}

export type ContainerProps = WidgetProps & {
    child?: JSX.Element
    children?: Array<JSX.Element>
}

export type BoxProps = ContainerProps & {
    orientation?: Gtk.Orientation
    spacing?: number
}
