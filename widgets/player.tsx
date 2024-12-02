import { bind } from "astal"
import { Astal, Gtk } from "astal/gtk3"
import { WidgetProps } from "../utils/widget"
import Mpris from "gi://AstalMpris"
const mpris = Mpris.get_default()

export import PlaybackStatus = Mpris.PlaybackStatus

export function has_jp_chars(str: string): boolean {
    return Boolean(str.match('[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]'))
}

export type PlayerWidgetProps = WidgetProps & {
    player: Mpris.Player
}

type WidgetConstructor = (props: PlayerWidgetProps) => Gtk.Widget

function add_player(stack: Astal.Stack, widget: any, player: Mpris.Player): void {
    stack.add_named(widget(player), player.busName)
    stack.hook(player, 'notify', self => {
        if (self.get_child_by_name(player.busName))
            self.set_visible_child_name(player.busName)
    })
}

type ActivePlayerWrapperProps = WidgetProps & {
    constructor: WidgetConstructor
    props: WidgetProps
}
export function ActivePlayerWrapper({ constructor, props, ...mainProps }: ActivePlayerWrapperProps): JSX.Element {
    const construct = (player: Mpris.Player) => constructor({ player, ...props })

    return <stack setup={(self) => {
        let name = ''
        for (const player of mpris.get_players()) {
            add_player(self, construct, player)
            name = player.busName
        }

        if (name) self.set_visible_child_name(name)

        self
            .hook(mpris, 'player-added', (self, player) => {
                add_player(self, construct, player)
            })
            .hook(mpris, 'player-closed', (self, player) => {
                self.get_child_by_name(player.busName)?.destroy()
            })
    }} {...mainProps}/>
}

export function TALabel({ player, halign, valign, ...props }: PlayerWidgetProps): JSX.Element {
    return <box orientation={Gtk.Orientation.VERTICAL} setup={(self) => self.hook(player, 'notify', self => {
        const title = player.title
        const artist = player.artist
        if (title === null || artist === null) return

        const titleLabel = self.children[0] as Astal.Label
        const artistLabel = self.children[1] as Astal.Label

        const isTitleJP = has_jp_chars(title)
        const isArtistJP = has_jp_chars(artist)

        titleLabel.label = title
        artistLabel.label = artist

        titleLabel.visible = Boolean(title)
        artistLabel.visible = Boolean(artist)

        // Japanese fonts take up space differently than latin ones.
        // These hacks are to make the the text look properly centered, and have the
        // lines be at a pleasing distance form each other.
        if (isTitleJP) {
            titleLabel.css = "font-family: VL Gothic; margin-bottom: -.2rem; margin-top: -.1rem;"
        } else {
            titleLabel.css = ""
        }
        if (isArtistJP) {
            artistLabel.css = "font-family: VL Gothic; margin-top: -.2rem; margin-bottom: -.2rem;"
        } else {
            artistLabel.css = ""
        }
    })} {...props}>
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
