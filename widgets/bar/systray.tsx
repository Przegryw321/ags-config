import { bind } from "astal"
import { Astal, Gdk } from "astal/gtk3"
import { WidgetProps, ContainerProps } from "../../utils/widget"
import AstalTray from "gi://AstalTray"
import Tray from "../../utils/tray"

type SystrayItemProps = WidgetProps & {
    item: AstalTray.TrayItem
}
export function SystrayItem({ item, ...props }: SystrayItemProps): JSX.Element {
    const menu = item.create_menu()

    return <button onDestroy={() => menu?.destroy()}
                   onClickRelease={(self, event) => {
                       switch (event.button) {
                           case Astal.MouseButton.PRIMARY:
                               item.activate(event.x, event.y)
                               break
                            case Astal.MouseButton.MIDDLE:
                               item.secondary_activate(event.x, event.y)
                               break
                           case Astal.MouseButton.SECONDARY:
                               menu?.popup_at_widget(self, Gdk.Gravity.SOUTH, Gdk.Gravity.NORTH, null)
                               break
                       }
                   }} {...props}>
        <icon icon={item.iconName}/>
    </button>
}

export default function Systray(props: ContainerProps): JSX.Element {
    const itemProps = {
        css: "font-size: 1.5rem;",
    }
    return <box {...props}>
        {bind(Tray, 'items').as(items => items.map(item => <SystrayItem item={item} {...itemProps}/>))}
    </box>
}
