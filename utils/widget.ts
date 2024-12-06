import { Gtk } from "astal/gtk3"
import { Binding } from "astal"

export type Bindable<Type> = Type | Binding<Type>

export type WidgetProps = {
    className?: Bindable<string>
    css?: Bindable<string>
    halign?: Bindable<Gtk.Align>
    valign?: Bindable<Gtk.Align>
    hexpand?: Bindable<boolean>
    vexpand?: Bindable<boolean>
    visible?: Bindable<boolean>
    tooltipText?: Bindable<string>
    tooltipMarkup?: Bindable<string>
}

export type LabelProps = WidgetProps & {
    label?: Bindable<string>
    truncate?: Bindable<boolean>
}

export type ContainerProps = WidgetProps & {
    child?: JSX.Element
    children?: Array<JSX.Element>
}

export type BoxProps = ContainerProps & {
    orientation?: Bindable<Gtk.Orientation>
    spacing?: Bindable<number>
}
