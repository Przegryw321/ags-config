import { MprisPlayer } from "types/service/mpris";
import Gtk from 'gi://Gtk?version=3.0';
import { has_jp_chars } from "../lib/utils";

const Mpris = await Service.import('mpris');

export const PLAYERCTLD = 'org.mpris.MediaPlayer2.playerctld';
export const FIREFOX = 'org.mpris.MediaPlayer2.firefox';

export const ActivePlayerWrapper = (widgetCreator: (player: MprisPlayer, props: object) => Gtk.Widget, props = { className: '' }) => Widget.Stack({
  className: props.className,
  children: {}, // GC cries for some reason if this is removed
  transition: 'slide_down',
  transitionDuration: 1000,

  setup: self => self.hook(Mpris, (self, busname) => {
    if (!busname) return;

    const player = Mpris.getPlayer(busname);
    if (!player) return;

    // Using player.entry instead of name in order to include playerctld shifts
    const name = player.entry;

    if (self.children.hasOwnProperty(name)) {
      if (self.get_visible_child_name() !== name)
        self.set_visible_child_name(name);
    } else if (player.name !== 'playerctld') {
      // omit actually using playerctld, because it will get stuck on it and
      // the transition animation won't play
      self.add_named(widgetCreator(player, props), name);
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

export const TrackInfo = (player: MprisPlayer, { ...props } = {}) => Widget.Box({
  ...props,
  vertical: true,

  children: [
    Widget.Label({
      className: 'player-trackinfo-title',
      hpack: 'start',
      label: '',
    }),
    Widget.Label({
      className: 'player-trackinfo-artists',
      hpack: 'start',
      label: '',
    }),
  ],

  setup: self => self.hook(player, self => {
    const titleLabel   = self.children[0];
    const artistsLabel = self.children[1];

    const title        = player.track_title;
    const artists      = player.track_artists.join(", ");
    const is_title_jp  = Boolean(has_jp_chars(title));
    const is_artist_jp = Boolean(has_jp_chars(artists));

    titleLabel.label   = title;
    artistsLabel.label = artists;

    // Japanese fonts take up space differently than latin ones.
    // These hacks are to make the the text look properly centered, and have the
    // lines be at a pleasing distance form each other.
    if (is_title_jp) {
      let css = 'font-family: VL Gothic; margin-top: .2rem;';
      if (!is_artist_jp) css += 'margin-top: .5rem;';
      titleLabel.css = css;
    } else {
      titleLabel.css = 'margin-bottom: -.4rem;';
    }
    if (is_artist_jp) {
      let css = 'font-family: VL Gothic;';
      if (!is_title_jp) css += 'margin-bottom: .4rem;';
      artistsLabel.css = css;
    } else {
      artistsLabel.css = 'margin-top: -.3rem;';
    }
  }),
});

export const TrackAlbum = (player: MprisPlayer) => Widget.Box({
  className: 'player-trackalbum',
  hpack: 'start',
  vpack: 'center',
  css: player.bind('cover_path').as(path => `background-image: url('${path}')`),
});

export const PausedIcon = (player: MprisPlayer, { ...props } = {}) => Widget.Box({
  ...props,

  children: [
    Widget.Label({
      className: 'icon',
      visible: player.bind('play_back_status').as(status => status === 'Paused'),
      //label: '\ue1c4',
      label: '\ue1a2',
    }),
  ],
});

export const PausedOverlayIcon = (player: MprisPlayer, widgetCreator: (player: MprisPlayer) => Gtk.Widget, { ...props } = {}) => Widget.Overlay({
  ...props,
  child: widgetCreator(player),
  overlays: [
    PausedIcon(player, {
      className: 'paused-icon',
      hpack: 'center',
      vpack: 'center',
    }),
  ],
});

export const PlayerVolume = (player: MprisPlayer, { ...props } = {}) => Widget.Slider({
  ...props,
  value: 0,
  min: 0,
  max: 1,
  roundDigits: 8,

  onChange: ({ value }) => player.volume = value,

  setup: self => self.hook(player, self => {
    self.visible = player.volume !== -1;
    self.value = player.volume;
  }),
});

export const PlayerShuffleButton = (player: MprisPlayer, { ...props } = {}) => Widget.Button({
  ...props,

  child: Widget.Label({
    className: 'icon',
    label: '\uf074',
  }),

  onClicked: player.shuffle,

  setup: self => self.hook(player, self => {
    self.visible = player.shuffle_status !== null;
    self.toggleClassName('player-shuffle-on', player.shuffle_status || false);
  }),
});

export const PlayerLoopButton = (player: MprisPlayer, { ...props } = {}) => Widget.Button({
  ...props,

  child: Widget.Label({
    className: 'icon',
    label: '\udb81\udc56',

    setup: self => self.hook(player, self => {
      const loop = player.loop_status;

      switch (loop) {
        case 'Track':
          self.toggleClassName('player-loop-on', true);
          self.label = '\udb81\udc58'
          break;
        case 'Playlist':
          self.toggleClassName('player-loop-on', true);
          self.label = '\udb81\udc56'
          break;
        default:
          self.toggleClassName('player-loop-on', false);
          self.label = '\udb81\udc56'
          break;
      }
    }),
  }),

  onClicked: player.loop,

  setup: self => self.hook(player, self => {
    self.visible = player.loop_status !== null;
  })
});

export const PlayerMiscControls = (player: MprisPlayer, { ...props} = {}) => Widget.Box({
  ...props,

  children: [
    PlayerShuffleButton(player, { className: 'shuffle' }),
    PlayerLoopButton(player, { className: 'loop' }),
  ],
});

export const PlayPauseButton = (player: MprisPlayer, { ...props } = {}) => Widget.Button({
  ...props,

  child: Widget.Label({
    className: 'icon',
    label: player.bind('play_back_status').as(status => {
      switch (status) {
        case 'Paused':
          //return '\ue037';
          return '\ue1c4'
        case 'Playing':
          //return '\ue034';
          return '\ue1a2';
        case 'Stopped':
          //return '\uef71';
          return '\uef71';
      }
    }),
  }),

  onClicked: player.playPause,
});

export const PrevButton = (player: MprisPlayer, { ...props } = {}) => Widget.Button({
  ...props,

  child: Widget.Label({
    className: 'icon',
    label: '\ue045',
  }),

  onClicked: player.previous,
});

export const NextButton = (player: MprisPlayer, { ...props } = {}) => Widget.Button({
  ...props,

  child: Widget.Label({
    className: 'icon',
    label: '\ue044',
  }),

  onClicked: player.next,
});

export const PlayerMainControls = (player: MprisPlayer, { ...props } = {}) => Widget.CenterBox({
  ...props,

  startWidget: PrevButton(player, { className: 'prev' }),
  centerWidget: PlayPauseButton(player, { className: 'playpause' }),
  endWidget: NextButton(player, { className: 'next', }),
});

export const PlayerSummary = (player: MprisPlayer, { ...props } = {}) => Widget.Box({
  ...props,
  vpack: 'center',
  children: [
    PausedOverlayIcon(player, TrackAlbum),
    TrackInfo(player),
  ],
});
