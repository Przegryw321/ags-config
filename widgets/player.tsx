import { bind } from "astal"
import { Astal, Gtk } from "astal/gtk3"
import { WidgetProps } from "../utils/widget"
import { ActivePlayer } from "../variables/player"
import Mpris from "gi://AstalMpris"
import mpris from "../utils/player"

export import PlaybackStatus = Mpris.PlaybackStatus

export function has_jp_chars(str: string): boolean {
    return Boolean(str.match('[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]'))
}

export type PlayerWidgetProps = WidgetProps & {
    player: Mpris.Player
}

type WidgetConstructor = (props: PlayerWidgetProps) => Gtk.Widget

type ActivePlayerWrapperProps = WidgetProps & {
    constructor: WidgetConstructor
    props: WidgetProps
}
export function ActivePlayerWrapper({ constructor, props, ...mainProps }: ActivePlayerWrapperProps): JSX.Element {
    const construct = (player: Mpris.Player) => constructor({ player, ...props })

    return <stack setup={(self) => {
        const players = mpris.get_players()

        for (const player of players)
            self.add_named(construct(player), player.busName)

        if (players.length > 0)
            self.set_visible_child_name(players[players.length - 1].busName)

        self
            .hook(mpris, 'player-added', (self, player) => {
                self.add_named(construct(player), player.busName)
            })
            .hook(mpris, 'player-closed', (self, player) => {
                self.get_child_by_name(player.busName)?.destroy()
            })
            .hook(ActivePlayer, (self, active) => {
                if (active)
                    self.set_visible_child_name(active.busName)
            })
    }} {...mainProps}/>
}

// Japanese fonts take up space differently than latin ones.
// These hacks are to make the the text look properly centered, and have the
// lines be at a pleasing distance form each other.
async function set_label_hack(label: Astal.Label, text: string, isTop: boolean): Promise<void> {
    label.visible = Boolean(text)
    if (!label.visible) return
    label.label = text

    if (has_jp_chars(text)) {
        if (isTop) {
            label.css = "font-family: VL Gothic; margin-bottom: -.2rem; margin-top: -.1rem;"
        } else {
            label.css = "font-family: VL Gothic; margin-top: -.2rem; margin-bottom: -.2rem;"
        }
    } else {
        label.css = ""
    }
}

export function TALabel({ player, halign, valign, ...props }: PlayerWidgetProps): JSX.Element {
    return <box orientation={Gtk.Orientation.VERTICAL} setup={(self) => {
        const titleLabel = self.children[0] as Astal.Label
        const artistLabel = self.children[1] as Astal.Label

        set_label_hack(titleLabel, player.title, true)
        set_label_hack(artistLabel, player.artist, false)

        self.hook(player, 'notify', _ => {
            set_label_hack(titleLabel, player.title, true)
            set_label_hack(artistLabel, player.artist, false)
        })
    }} {...props}>
        <label className="title" halign={halign} valign={valign}/>
        <label className="artist" halign={halign} valign={valign}/>
    </box>
}

export function AlbumCover({ player, ...props }: PlayerWidgetProps): JSX.Element {
    const cover = bind(player, "coverArt")
    let css = `background-size: 100%;
               background-repeat: no-repeat;
               background-position: center;`

    // needs to be created as a background-image in order to use border-radius
    if (player.busName.includes("firefox")) css += "min-width: 4.5rem;"
    else css += "min-width: 2.5rem;"

    const widget = <box css={cover.as(c => `${css}; background-image: url('${c}');`)} {...props}/>

    return widget
}
