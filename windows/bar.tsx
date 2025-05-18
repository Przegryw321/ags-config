import { bind } from "astal"
import { Astal, Gtk, App } from "astal/gtk3"
import Workspaces from "../widgets/bar/workspaces"
import StartmenuIcon from "../widgets/bar/startmenu_icon"
import BarDate from "../widgets/bar/date"
import BarPlayer from "../widgets/bar/player"
import BarNetwork from "../widgets/bar/network"
import BarShutdown from "../widgets/bar/shutdown"
import Systray from "../widgets/bar/systray"
import { PlayerctldWrapper } from "../widgets/player"
import { ActiveWindowSummary } from "../widgets/bar/activewindow"
import { WidgetProps, ContainerProps } from "../utils/widget"
import Shutdown from "../variables/shutdown"

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
      hexpand />
    <ActiveWindowSummary className="bar-active-window"
      hexpand
      halign={halign}
      valign={valign}
      css="margin-left: .5rem"
      visible={bind(Shutdown).as(v => v === null)} />
  </box>
}

function Start(props: WidgetProps): JSX.Element {
  return <box {...props} hexpand>
    <StartmenuIcon className="startmenu-button" css="font-size: 2.3rem; min-width: 3.5rem;" />
    <Status halign={Gtk.Align.START} valign={Gtk.Align.CENTER} />
    <box hexpand halign={Gtk.Align.END}>
      <PlayerctldWrapper constructor={BarPlayer} props={{
        className: "bar-player-summary",
        halign: Gtk.Align.END,
        valign: Gtk.Align.CENTER,
      }} />
    </box>
  </box>
}

function Center(props: WidgetProps): JSX.Element {
  return <Content {...props}>
    <Workspaces count={10} />
  </Content>
}

function End(props: WidgetProps): JSX.Element {
  return <Content hexpand halign={Gtk.Align.END} {...props}>
    <Systray className="bar-systray" spacing={5} />
    <BarDate className="bar-date" halign={Gtk.Align.END} valign={Gtk.Align.CENTER} />
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
      <Start />
      <Center />
      <End />
    </centerbox>
  </window>
}
