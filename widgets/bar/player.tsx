import { Gtk } from "astal/gtk3"
import { PlayerWidgetProps, TALabel, AlbumCover, PlaybackStatus } from "../player"

export function AlbumCoverPause({ player, ...props }: PlayerWidgetProps): JSX.Element {
  return <overlay>
    <AlbumCover player={player} {...props} />
    <icon className="pause-icon"
      css="font-size: 1.5rem;"
      icon="pause-symbolic"
      halign={Gtk.Align.CENTER}
      valign={Gtk.Align.CENTER}
      setup={(self) => self.hook(player, 'notify', self => {
        self.visible = player.playbackStatus !== PlaybackStatus.PLAYING
      })} />
  </overlay>
}

type BarPlayerProps = PlayerWidgetProps
export default function BarPlayer({ player, halign, ...props }: BarPlayerProps): JSX.Element {
  const cover = <AlbumCoverPause player={player} className="album" />
  return <box spacing={6} {...props}>
    {halign === Gtk.Align.START && cover}
    <TALabel player={player} halign={halign} valign={Gtk.Align.CENTER} />
    {halign === Gtk.Align.END && cover}
  </box>
}
