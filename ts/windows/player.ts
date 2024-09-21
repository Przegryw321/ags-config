import { MprisPlayer } from "types/service/mpris";
import { TrackInfo, PlayerVolume, ActivePlayerWrapper, PlayerMiscControls, PlayerMainControls } from "../widgets/player";

const PlayerTopHalf = (player: MprisPlayer) => Widget.Box({
  vexpand: true,

  children: [
    TrackInfo(player, {
      className: 'playerwin-trackinfo',
      hexpand: true,
    }),
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
  visible: true,
  name: 'player',
  anchor: ['top'],
  margins: [20],
  layer: 'overlay',
  exclusivity: 'normal',

  child: ActivePlayerWrapper(PlayerWindowLayout),
});
