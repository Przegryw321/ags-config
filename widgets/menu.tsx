import GObject from "gi://GObject"
import { Gtk, astalify, type ConstructProps, Gdk } from "astal/gtk3"
import { LabelProps } from "../utils/widget"

export class Menu extends astalify(Gtk.Menu) {
    static { GObject.registerClass(this) }

    constructor(props: ConstructProps<Menu, Gtk.Menu.ConstructorProps, {
    }>) {
        super(props as any)
    }
}

export class MenuItem extends astalify(Gtk.MenuItem) {
    static { GObject.registerClass(this) }

    constructor(props: ConstructProps<MenuItem, Gtk.MenuItem.ConstructorProps, {

    }>) {
        super(props as any)
    }
}

type MenuLabelProps = LabelProps & {
    onActivate?: () => void
}
export function MenuLabel({ onActivate, ...props }: MenuLabelProps) {

    return <MenuItem setup={(self) => {
        if (onActivate) self.connect('activate', onActivate)
    }}>
    <label halign={Gtk.Align.START} {...props}/>
    </MenuItem>
}
