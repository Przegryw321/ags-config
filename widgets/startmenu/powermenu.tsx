import { Astal, Widget } from "astal/gtk3"
import { WidgetProps, BoxProps } from "../../utils/widget"
import { sleep } from "../../utils/power"
import { show_logout_menu, show_poweroff_menu, show_reboot_menu } from "../power"

type PowerButtonProps = WidgetProps & {
    icon?: string
    action?: (self: Widget.Button, event: Astal.ClickEvent) => void
}
export function PowerButton({ className, icon, action, ...props }: PowerButtonProps): JSX.Element {
    return <button className={`powerbutton ${className}`} onClickRelease={action} {...props}>
        <icon icon={icon}/>
    </button>
}

export default function Powermenu(props: BoxProps): JSX.Element {
    return <box css="font-size: 2rem;" {...props}>
        <PowerButton className="sleep"
                     tooltipText="Uśpij"
                     icon="moon-symbolic"
                     action={sleep}/>

        <PowerButton className="logout"
                     tooltipText="Wyloguj"
                     icon="logout-symbolic"
                     action={show_logout_menu}/>

        <PowerButton className="reboot"
                     tooltipText="Uruchom ponownie"
                     icon="restart-symbolic"
                     action={show_reboot_menu}/>

        <PowerButton className="poweroff"
                     tooltipText="Zamknij"
                     icon="power-symbolic"
                     action={show_poweroff_menu}/>
    </box>
}
