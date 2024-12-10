import { Astal, Gtk } from "astal/gtk3"
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
    cursor?: string
}

export type OrientableProps = WidgetProps & {
    orientation?: Bindable<Gtk.Orientation>
}

export type LabelProps = WidgetProps & {
    label?: Bindable<string>
    truncate?: Bindable<boolean>
}

export type ContainerProps = OrientableProps & {
    child?: JSX.Element
    children?: Array<JSX.Element>
    spacing?: Bindable<number>
}

export type SliderProps = OrientableProps & {
    onDragged?: (self: Astal.Slider) => void
    thickness?: number
    length?: number
    min?: Bindable<number>
    max?: Bindable<number>
    value?: Bindable<number>
}
