import { MprisPlayer } from 'resource:///com/github/Aylur/ags/service/mpris.js';
import Gtk from 'gi://Gtk?version=3.0';
import { has_key_containing } from '../lib/utils';
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
    // Some players (like firefox) have multiple instances so the players need
    // to be identified via busname instead of just the name/entry property.
    // Playerctld does not give the busname so we need to look for it manually.

    let activePlayer = <string | null> null;

    Mpris.players.forEach(player => {
      if (player.bus_name === PLAYERCTLD) {
        // Set the active player to be in sync with playerctld.
        // We need to set it later, because there is no guarantee that the
        // widget has been created yet.
        activePlayer = player.entry;
        return;
      }
      self.add_named(widgetCreator(player, props), player.bus_name);
    });

    if (activePlayer) {
      self.set_visible_child_name(has_key_containing(self.children, activePlayer) ?? null);
    }

    self
      .hook(Mpris, (self, busname: string) => {
        if (!busname) return;

        const player = Mpris.getPlayer(busname);
        if (!player) return;

        const name = busname === PLAYERCTLD ? player.entry : busname;
        const key  = has_key_containing(self.children, name);

        if (key) {
          if (self.get_visible_child_name() !== key) {
            self.set_visible_child_name(key);
          }
        } else if (busname !== PLAYERCTLD) {
          // omit actually using playerctld, because it will get stuck on it and
          // the transition animation won't play
          self.add_named(widgetCreator(player, props), busname);
        }
      }, 'player-changed')
      .hook(Mpris, (self, busname: string) => {
        if (!busname) return;
        // need to delete like this in order to remove the busname from the keys
        delete self.children[busname];
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

