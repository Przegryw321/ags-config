import { MprisPlayer } from 'resource:///com/github/Aylur/ags/service/mpris.js';
import Gtk from 'gi://Gtk?version=3.0';
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
    let activePlayer = <string | null> null;

    Mpris.players.forEach(player => {
      const name = player.entry || player.name;
      if (player.bus_name === PLAYERCTLD) {
        // Set the active player to be in sync with playerctld.
        // We need to set it later, because there is no guarantee that the
        // widget has been created yet.
        activePlayer = name;
        return;
      }
      console.log('name1:', name);
      self.add_named(widgetCreator(player, props), name);
    });

    self.set_visible_child_name(activePlayer)

    self
      .hook(Mpris, (self, busname: string) => {
        if (!busname) return;

        const player = Mpris.getPlayer(busname);
        if (!player) return;

        const name = player.entry || player.name;

        if (self.get_child_by_name(name)) {
          if (self.get_visible_child_name() !== name) {
            self.set_visible_child_name(name);
          }
        } else if (player.name !== 'playerctld') {
          // omit actually using playerctld, because it will get stuck on it and
          // the transition animation won't play
          console.log('name2:', name);
          self.add_named(widgetCreator(player, props), name);
        }
      }, 'player-changed')
      .hook(Mpris, (self, busname: string) => {
        if (!busname) return;
        const name = busname.slice(busname.lastIndexOf('.') + 1);
        self.get_child_by_name(name)?.destroy();
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

