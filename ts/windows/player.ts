import { MprisPlayer } from "types/service/mpris";
import { ActivePlayerWrapper } from "../widgets/player_wrappers";
import { AlbumLabel, PlayerVolume, ShiftButton } from "../widgets/player_basic";
import { TrackInfo, PlayerMiscControls, PlayerMainControls } from "../widgets/player_complex";

const PlayerTrackInfo = (player: MprisPlayer) => Widget.Box({
  vertical: true,
  children: [
    TrackInfo(player, {
      className: 'playerwin-trackinfo',
      hexpand: true,
      vexpand: true,
    }),
    AlbumLabel(player, {
      className: 'playerwin-trackinfo-album',
      truncate: 'end',
      hpack: 'start',
      vpack: 'end',
    }),
  ],
});

const PlayerTopHalf = (player: MprisPlayer) => Widget.Box({
  vexpand: true,

  children: [
    PlayerTrackInfo(player),
    PlayerVolume(player, {
      className: 'playerwin-volume',
      vertical: true,
      inverted: true,

      hpack: 'end',
      vpack: 'start',
    }),
  ],
});

const PlayerBottomHalf = (player: MprisPlayer) => Widget.CenterBox({
  vpack: 'end',

  startWidget:  PlayerMiscControls(player, { className: 'playerwin-misc-controls' }),
  centerWidget: PlayerMainControls(player, { className: 'playerwin-main-controls' }),
  endWidget:    ShiftButton({
    className: 'playerwin-shift',
    hpack: 'end',
  }),
});

const PlayerWindowLayout = (player: MprisPlayer) => Widget.Box({
  className: 'playerwin-layout',
  vertical: true,

  children: [
    PlayerTopHalf(player),
    PlayerBottomHalf(player),
  ],

  css: player.bind('cover_path').as(path => `background-image: url('${path}')`),
});

export const PlayerWindow = async (monitor: number = 0) => Widget.Window({
  monitor,
  visible: false,
  name: 'player',
  anchor: ['top'],
  margins: [20],
  layer: 'overlay',
  exclusivity: 'normal',

  child: ActivePlayerWrapper(PlayerWindowLayout),

  setup: self => self.hook(App, self => {
    if (Object.keys(self.child.get_children()).length === 0) self.visible = false;
  }, 'window-toggled')
});
