import { Astal, Gtk, App } from "astal/gtk3"
import Workspaces from "../widgets/bar/workspaces"
import StartmenuIcon from "../widgets/bar/startmenu_icon"
import BarDate from "../widgets/bar/bardate"
import BarPlayer from "../widgets/bar/barplayer"
import BarNetwork from "../widgets/bar/barnetwork"
import BarShutdown from "../widgets/bar/barshutdown"
import Systray from "../widgets/bar/systray"
import { ActivePlayerWrapper } from "../widgets/player"
import { ActiveWindowTitle } from "../widgets/bar/activewindow"
import { WidgetProps, ContainerProps } from "../utils/widget"

function Content({ child, children, ...props }: ContainerProps): JSX.Element {
    return <box className="bar-contents" spacing={10} {...props}>
        {child}
        {children}
    </box>
}

function Status({ halign, valign, ...props }: WidgetProps): JSX.Element {
    return <box orientation={Gtk.Orientation.VERTICAL} halign={halign} valign={valign} {...props}>
        <BarShutdown className="bar-shutdown"
                     halign={halign}
                     valign={valign}
                     hexpand/>
        <ActiveWindowTitle className="bar-active-window" hexpand halign={halign} valign={valign}/>
    </box>
}

function Start(props: WidgetProps): JSX.Element {
    return <box {...props}>
            <StartmenuIcon className="startmenu-button" css="font-size: 2.3rem; min-width: 3.5rem;"/>
            <Content>
                <Workspaces count={10}/>
                <ActivePlayerWrapper constructor={BarPlayer} props={{
                    className: "bar-player-summary",
                    halign: Gtk.Align.START,
                    valign: Gtk.Align.CENTER,
                }}/>
            </Content>
    </box>
}

function Center(props: WidgetProps): JSX.Element {
    return <Content {...props}>
        <Status halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER}/>
    </Content>
}

function End(props: WidgetProps): JSX.Element {
    return <Content {...props}>
        <Systray className="bar-systray" spacing={5}/>
        <BarDate className="bar-date" halign={Gtk.Align.END} valign={Gtk.Align.CENTER}/>
    </Content>
}

export default async function Bar(monitor: number = 0): Promise<JSX.Element> {
    const anchor = Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT

    return <window name="bar"
                   monitor={monitor}
                   anchor={anchor}
                   exclusivity={Astal.Exclusivity.EXCLUSIVE}
                   application={App}>
        <centerbox hexpand className="bar">
            <Start  halign={Gtk.Align.START}/>
            <Center halign={Gtk.Align.CENTER}/>
            <End    halign={Gtk.Align.END}/>
        </centerbox>
    </window>
}
