import { MprisPlayer } from "types/service/mpris";
import Gtk from 'gi://Gtk?version=3.0';
import { has_jp_chars } from "../lib/utils";

const Mpris = await Service.import('mpris');

export const PLAYERCTLD = 'org.mpris.MediaPlayer2.playerctld';
export const FIREFOX = 'org.mpris.MediaPlayer2.firefox';

export const ActivePlayerWrapper = (widgetCreator: (player: MprisPlayer) => Gtk.Widget) => Widget.Stack({
  children: {}, // GC cries for some reason if this is removed
  transition: 'slide_down',
  transitionDuration: 1000,

  setup: self => self.hook(Mpris, (self, busname) => {
    if (!busname || busname === PLAYERCTLD) return;
      const player = Mpris.getPlayer(busname);
      if (!player) return;

    if (self.children.hasOwnProperty(busname)) {
      if (self.get_visible_child_name() !== busname)
        self.set_visible_child_name(busname);
    } else {
      self.add_named(widgetCreator(player), busname);
    }
  }, 'player-changed'),
});

export const PlayerWrapper = (busname: string, widgetCreator: (player: MprisPlayer) => Gtk.Widget) => Widget.Box({
  vpack: 'center',
  children: Mpris.bind('players').as(players => players
    .filter(player => player.bus_name === busname)
    .map(widgetCreator)),
});

export const PlayerctldWrapper = (widgetCreator: (player: MprisPlayer) => Gtk.Widget) =>
  PlayerWrapper(PLAYERCTLD, widgetCreator);

// Japanese fonts take up space differently than latin ones.
// These hacks are to make the the text look properly centered, and have the
// lines be at a pleasing distance form each other.
let is_track_jp = false;
let is_artist_jp = false;
export const TrackInfo = (player: MprisPlayer) => Widget.Box({
  vertical: true,

  children: [
    Widget.Label({
      className: 'player-trackinfo-title',
      hpack: 'start',
      label: '',

      setup: self => self.hook(player, self => {
        self.label = player.track_title;
        is_track_jp = Boolean(has_jp_chars(self.label));

        if (is_track_jp) {
          let output = 'font-family: VL Gothic;';
          if (!is_artist_jp) output += 'margin-top: .5rem;';
          self.css = output;
        } else {
          self.css = 'margin-bottom: -.4rem';
        }
      }),
    }),
    Widget.Label({
      className: 'player-trackinfo-artists',
      hpack: 'start',
      label: '',

      setup: self => self.hook(player, self => {
        self.label = player.track_artists.join(", ");
        is_artist_jp = Boolean(has_jp_chars(self.label));

        if (is_artist_jp) {
          let output = 'font-family: VL Gothic;';
          if (!is_track_jp) output += 'margin-bottom: .4rem;';
          self.css = output;
        } else {
          self.css = 'margin-top: -.3rem';
        }
      }),
    }),
  ],
});

export const TrackAlbum = (player: MprisPlayer) => Widget.Box({
  className: 'player-trackalbum',
  hpack: 'start',
  vpack: 'center',
  css: player.bind('cover_path').as(path => `background-image: url('${path}')`),
});

export const PlayerSummary = (player: MprisPlayer) => Widget.Box({
  vpack: 'center',
  children: [
    TrackAlbum(player),
    TrackInfo(player),
  ],
});
