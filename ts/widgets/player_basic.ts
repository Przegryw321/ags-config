import { MprisPlayer } from 'resource:///com/github/Aylur/ags/service/mpris.js';
import { PLAYERCTLD } from './player_wrappers';
const Mpris = await Service.import('mpris');

export const PausedIcon = (player: MprisPlayer, { ...props } = {}) => Widget.Box({
  ...props,

  children: [
    Widget.Label({
      className: 'icon',
      visible: player.bind('play_back_status').as(status => status === 'Paused' || !player.can_play),
      //label: '\ue1c4',
      label: '\ue1a2',
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
  tooltipMarkup: 'Przełącz losowanie',

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
  tooltipMarkup: 'Przełącz pętlę',

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

export const PlayPauseButton = (player: MprisPlayer, { ...props } = {}) => Widget.Button({
  ...props,
  tooltipMarkup: 'Przełącz odtwarzanie',

  child: Widget.Label({
    className: 'icon',
    label: player.bind('play_back_status').as(status => {
      if (!player.can_play) return '\ue1c4';

      switch (status) {
        case 'Paused':
          //return '\ue037';
          return '\ue1c4';
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
  tooltipMarkup: 'Poprzedni utwór',
  visible: player.bind('can_go_prev'),

  child: Widget.Label({
    className: 'icon',
    label: '\ue045',
  }),

  onClicked: player.previous,
});

export const NextButton = (player: MprisPlayer, { ...props } = {}) => Widget.Button({
  ...props,
  tooltipMarkup: 'Następny utwór',
  visible: player.bind('can_go_next'),

  child: Widget.Label({
    className: 'icon',
    label: '\ue044',
  }),

  onClicked: player.next,
});

export const ShiftButton = ({ ...props } = {}) => Widget.Button({
  ...props,
  tooltipMarkup: 'Przełącz odtwarzacz',

  child: Widget.Label({
    className: 'icon',
    label: '\ue5f2',
  }),

  onClicked: () => Utils.execAsync('playerctld shift'),

  setup: self => self.hook(Mpris, self => {
    self.visible = Mpris.players.filter(p => p.bus_name !== PLAYERCTLD).length > 1;
  }),
});

export const AlbumLabel = (player: MprisPlayer, { ...props } = {}) => Widget.Label({
  ...props,
  label: player.bind('track_album'),
});
