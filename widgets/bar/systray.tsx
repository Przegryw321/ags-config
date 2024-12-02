import { bind } from "astal"
import { Astal } from "astal/gtk3"
import { WidgetProps, BoxProps } from "../../utils/widget"
import AstalTray from "gi://AstalTray"
import Tray from "../../utils/tray"

type SystrayItemProps = WidgetProps & {
    item: AstalTray.TrayItem
}
export function SystrayItem({ item, ...props }: SystrayItemProps): JSX.Element {
    const menu = item.create_menu()

    return <eventbox onClickRelease={(_self, event) => {
        switch (event.button) {
            case Astal.MouseButton.PRIMARY:
                item.activate(event.x, event.y)
                break
            case Astal.MouseButton.MIDDLE:
                item.secondary_activate(event.x, event.y)
                break
            case Astal.MouseButton.SECONDARY:
                menu?.popup_at_pointer(null)
                break
        }
    }}
                   {...props}>
        <icon icon={item.iconName}/>
    </eventbox>
}

export default function Systray(props: BoxProps): JSX.Element {
    const itemProps = {
        css: "font-size: 1.5rem;",
    }
    return <box {...props}>
        {bind(Tray, 'items').as(items => items.map(item => <SystrayItem item={item} {...itemProps}/>))}
    </box>
}
