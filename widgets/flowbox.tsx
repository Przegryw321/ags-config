import GObject from "gi://GObject"
import { Gtk, astalify, type ConstructProps } from "astal/gtk3"

export default class FlowBox extends astalify(Gtk.FlowBox) {
    static { GObject.registerClass(this) }

    constructor(props: ConstructProps<FlowBox, Gtk.FlowBox.ConstructorProps, {
    }>) {
        super(props as any)
    }
}
