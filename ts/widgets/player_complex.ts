import { MprisPlayer } from 'resource:///com/github/Aylur/ags/service/mpris.js';
import Gtk from 'gi://Gtk?version=3.0';
import { has_jp_chars } from "../lib/utils";

import { NextButton, PausedIcon, PlayerLoopButton, PlayerShuffleButton, PlayPauseButton, PrevButton } from './player_basic';

export const TrackInfo = (player: MprisPlayer, { ...props } = {}) => Widget.Box({
  ...props,
  vertical: true,

  children: [
    Widget.Label({
      className: 'player-trackinfo-title',
      hpack: 'start',
      label: '',
      truncate: 'end',
    }),
    Widget.Label({
      className: 'player-trackinfo-artists',
      hpack: 'start',
      label: '',
      truncate: 'end',
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

    titleLabel.visible   = Boolean(title);
    artistsLabel.visible = Boolean(artists);

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
export const PlayerMiscControls = (player: MprisPlayer, { ...props} = {}) => Widget.Box({
  ...props,

  children: [
    PlayerShuffleButton(player, { className: 'shuffle' }),
    PlayerLoopButton(player, { className: 'loop' }),
  ],
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
    TrackInfo(player, {
      vpack: 'center',
    }),
  ],
});
