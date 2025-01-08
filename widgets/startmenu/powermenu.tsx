import { App, Astal, Widget } from "astal/gtk3"
import { WidgetProps, ContainerProps } from "../../utils/widget"
import { sleep } from "../../utils/power"
import { Menu, MenuLabel } from "../menu"

import { logout, reboot, poweroff, shutdown, shutdown_cancel } from "../../utils/power"

type PowerButtonProps = WidgetProps & {
    icon?: string
    onClicked?: (self: Widget.Button, event: Astal.ClickEvent) => void
    popup?: Menu
}
export function PowerButton({ className, icon, ...props }: PowerButtonProps): JSX.Element {
    return <menubutton className={`powerbutton ${className}`}
                       cursor="pointer"
                       sensitive
                       {...props}>
        <icon icon={icon} css="font-size: 2rem;"/>
    </menubutton>
}

function close_startmenu(): void {
    App.get_window('startmenu')?.set_visible(false)
}

export default function Powermenu(props: ContainerProps): JSX.Element {
    const LogoutMenu = <Menu>
        <MenuLabel label="Wyloguj się" onActivate={() => {
            close_startmenu()
            logout()
        }}/>
        <MenuLabel label="Anuluj"/>
    </Menu> as Menu

    const RebootMenu = <Menu>
        <MenuLabel label="Uruchom ponownie" onActivate={() => {
            close_startmenu()
            reboot()
        }}/>
        <MenuLabel label="Anuluj"/>
    </Menu> as Menu

    const PoweroffMenu = <Menu>
        <MenuLabel label="Zamknij" onActivate={() => {
            close_startmenu()
            poweroff()
        }}/>
        <MenuLabel label="Zamknij za 1 minutę" onActivate={() => {
            close_startmenu()
            shutdown()
        }}/>
        <MenuLabel label="Anuluj" onActivate={shutdown_cancel}/>
    </Menu> as Menu

    return <box {...props}>
        <PowerButton className="sleep"
                     tooltipText="Uśpij"
                     icon="moon-symbolic"
                     onClicked={() => console.log('SLEEEEEEEEEEEEEEEEEEEEEP!!!!!!!!!!!')}/>

        <PowerButton className="logout"
                     tooltipText="Wyloguj"
                     icon="logout-symbolic"
                     popup={LogoutMenu}/>

        <PowerButton className="reboot"
                     tooltipText="Uruchom ponownie"
                     icon="restart-symbolic"
                     popup={RebootMenu}/>

        <PowerButton className="poweroff"
                     tooltipText="Zamknij"
                     icon="power-symbolic"
                     popup={PoweroffMenu}/>
    </box>
}
