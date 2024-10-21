import { MprisPlayer } from 'resource:///com/github/Aylur/ags/service/mpris.js';
import Gtk from 'gi://Gtk?version=3.0';
import ActivePlayer from '../services/active_player';
const Mpris = await Service.import('mpris');

export const PLAYERCTLD = 'org.mpris.MediaPlayer2.playerctld';
export const FIREFOX    = 'org.mpris.MediaPlayer2.firefox';

export const ActivePlayerWrapper = (widgetCreator: (player: MprisPlayer, props: object) => Gtk.Widget, props = { className: '' }) => Widget.Stack({
  className: props.className,
  children: {}, // GC cries for some reason if this is removed
  transition: 'slide_down',
  transitionDuration: 1000,
  homogeneous: false,

  setup: self => {
    Mpris.players.forEach(player => {
      self.add_named(widgetCreator(player, props), player.bus_name);
    });
    self.set_visible_child_name(ActivePlayer.player?.bus_name ?? null);

    self
      .hook(Mpris, (self, busname: string) => {
        if (!busname) return;

        const player = Mpris.getPlayer(busname);
        if (!player) return;

        self.add_named(widgetCreator(player, props), busname);
      }, 'player-added')
      .hook(ActivePlayer, (_, player) => {
        if (!player) return;
        self.set_visible_child_name(player.bus_name);
      }, 'player-changed')
      .hook(Mpris, (self, busname: string) => {
        self.children[busname]?.destroy();
      }, 'player-closed');
  }
});

export const PlayerWrapper = (busname: string, widgetCreator: (player: MprisPlayer) => Gtk.Widget) => Widget.Box({
  vpack: 'center',
  children: Mpris.bind('players').as(players => players
    .filter(player => player.bus_name === busname)
    .map(widgetCreator)),
});

export const PlayerctldWrapper = (widgetCreator: (player: MprisPlayer) => Gtk.Widget) =>
  PlayerWrapper(PLAYERCTLD, widgetCreator);

