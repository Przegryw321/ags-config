import { Gtk } from "astal/gtk3"
import { SliderProps } from "../utils/widget"

export default function Slider({ orientation = Gtk.Orientation.HORIZONTAL, thickness = 1, length, ...props }: SliderProps): JSX.Element {
    const cssLength    = `trough { min-${orientation == Gtk.Orientation.HORIZONTAL ? 'width' : 'height'}: ${length}rem; }`
    const cssThickness = `trough { min-${orientation == Gtk.Orientation.HORIZONTAL ? 'height' : 'width'}: ${thickness}rem; }`
    return <slider css={`${cssLength} ${cssThickness}`} orientation={orientation} {...props}/>
}
