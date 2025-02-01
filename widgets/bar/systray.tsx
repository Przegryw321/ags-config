import { bind, Variable } from "astal"
import { Astal, Gdk, Gtk } from "astal/gtk3"
import { WidgetProps, ContainerProps } from "../../utils/widget"
import AstalTray from "gi://AstalTray"
import Tray from "../../utils/tray"

type SystrayItemProps = WidgetProps & {
    item: AstalTray.TrayItem
}
export function SystrayItem({ item, ...props }: SystrayItemProps): JSX.Element {
    const Menu = Variable.derive(
      [bind(item, 'menuModel'), bind(item, 'actionGroup')],
      (menuModel, actionGroup) => {
        const menu = Gtk.Menu.new_from_model(menuModel)
        menu.insert_action_group('dbusmenu', actionGroup)
        return menu
      }
    )

    return <button onClickRelease={(self, event) => {
                       switch (event.button) {
                           case Astal.MouseButton.PRIMARY:
                               item.activate(event.x, event.y)
                               break
                            case Astal.MouseButton.MIDDLE:
                               item.secondary_activate(event.x, event.y)
                               break
                           case Astal.MouseButton.SECONDARY:
                               Menu.get().popup_at_widget(self, Gdk.Gravity.SOUTH, Gdk.Gravity.NORTH, null)
                               break
                       }
                   }}
                   onDestroy={() => {
                     Menu.drop()
                   }} {...props}>
        <icon gicon={item.gicon}/>
    </button>
}

export default function Systray(props: ContainerProps): JSX.Element {
    const itemProps = {
        css: "font-size: 1.5rem;",
    }
    return <box visible={bind(Tray, 'items').as(items => items.length > 0)} {...props}>
        {bind(Tray, 'items').as(items => items.map(item => <SystrayItem item={item} {...itemProps}/>))}
    </box>
}
