import { execAsync } from "astal"
import { Gtk, App } from "astal/gtk3"
import { WidgetProps } from "../../utils/widget"
import FlowBox from "../flowbox"

const apps = [
    "spotify",
    "qbittorrent",
    "firefox",
    "kitty",
    "steam",
    "thunar",
    "gimp",
    "lutris",
    "virtualbox",
]

type AppButtonProps = WidgetProps & {
    app: string
}
async function launch_app(app: string): Promise<string> {
    App.get_window('startmenu')?.close()
    return execAsync(app)
}
export function AppButton({ app, ...props }: AppButtonProps): JSX.Element {
    return <button onClicked={() => launch_app(app)} tooltipText={`Uruchom ${app}`} {...props}>
        <box orientation={Gtk.Orientation.VERTICAL}>
            <icon icon={app} css="font-size: 4rem;"/>
            <label label={app} css="padding-top: .2rem;"/>
        </box>
    </button>
}

export default function Applist(props: WidgetProps): JSX.Element {
    return <FlowBox minChildrenPerLine={5}
                    maxChildrenPerLine={5}
                    valign={Gtk.Align.START}
                    homogeneous
                    {...props}>
        {apps.map(app => AppButton({ app, className: "app" }))}
    </FlowBox>
}
