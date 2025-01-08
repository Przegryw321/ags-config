import { App } from "astal/gtk3"
import { WidgetProps } from "../../utils/widget"

export default function StartmenuIcon(props: WidgetProps) {
    return <button tooltipText="Pokaż menu startowe"
                   cursor="pointer"
                   onClicked={() => App.toggle_window("startmenu")}
                   {...props}>
        <icon icon="archlinux-logo" className="startmenu-icon"/>
    </button>
}
