import { bind, Binding } from "astal"
import Hyprland from "gi://AstalHyprland"

const hyprland = Hyprland.get_default()
export default hyprland

export namespace focused {
    export const monitor = bind(hyprland, 'focused-monitor')
    export const workspace = bind(hyprland, 'focused-workspace')
    export const client = bind(hyprland, 'focused-client')
}
