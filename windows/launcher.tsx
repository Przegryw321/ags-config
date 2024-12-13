import { Variable } from "astal"
import { App, Gtk, Astal, Gdk } from "astal/gtk3"

import AstalApps from "gi://AstalApps"
import Apps from "../utils/apps"

const MAX_ITEMS = 8

const Text = Variable("")
const List = Text(text => Apps.fuzzy_query(text).slice(0, MAX_ITEMS))

function close_launcher(): void {
    const window = App.get_window('launcher')
    if (window) {
        window.visible = false
        const entry = (window.get_child() as Gtk.Box).get_children()?.[0] as Gtk.Entry
        if (entry) {
            entry.text = ""
        }
    }
}

function AppButton(app: AstalApps.Application): JSX.Element {
    return <button className="app-button"
                   onClicked={() => { app.launch(); close_launcher() }}
           >
        <box>
            <icon icon={app.iconName}
                  css="font-size: 3rem;"
            />
            <box className="info"
                 vertical
                 hexpand
                 halign={Gtk.Align.START}
                 valign={Gtk.Align.CENTER}>
                <label className="name"
                       truncate
                       halign={Gtk.Align.START}
                       label={app.name}
                />
                {app.description && <label className="description"
                                           wrap
                                           label={app.description}
                                    />}
            </box>
        </box>
    </button>
}

export default async function Launcher(): Promise<JSX.Element> {
    const anchor = Astal.WindowAnchor.TOP
    return <window name="launcher"
                   namespace="launcher"
                   layer={Astal.Layer.OVERLAY}
                   keymode={Astal.Keymode.ON_DEMAND}
                   application={App}
                   anchor={anchor}
                   visible={false}
                   onKeyPressEvent={(self, event: Gdk.Event) => {
                       if (event.get_keyval()[1] === Gdk.KEY_Escape)
                           close_launcher()
                   }}
           >
        <box className="launcher"
             css="min-width: 50rem;"
             orientation={Gtk.Orientation.VERTICAL}>
            <entry placeholderText="Szukaj"
                   css="min-width: 15rem;"
                   halign={Gtk.Align.CENTER}
                   text={Text()}
                   onChanged={self => Text.set(self.text)}
                   onActivate={() => {
                       Apps.fuzzy_query(Text.get())?.[0].launch()
                       close_launcher()
                   }}
            />
            <box className="entries"
                 spacing={6}
                 vertical
            >
            {List.as(list => list.map(AppButton))}
            </box>
            <label className="not-found"
                   visible={List.as(l => l.length === 0)}
                   label="Brak wyników"
            />
        </box>
    </window>
}
