import Gtk from 'gi://Gtk?version=3.0';
const Audio = await Service.import('audio');

export const HEADPHONES = "alsa_output.pci-0000_09_00.3.analog-stereo";
export const SPEAKERS   = "alsa_output.pci-0000_07_00.1.hdmi-stereo";

export const HEADPHONE_ICON       = '\udb80\udecb';
export const HEADPHONE_MUTED_ICON = '\udb81\udfce';
export const SPEAKER_ICON         = '\udb81\udcc3';
export const SPEAKER_MUTED_ICON   = '\udb81\udcc4';

export const VolumeSlider = ({ ...props } = {}, type = 'speaker') => Widget.Slider({
  ...props,
  min: 0,
  max: 1,
  roundDigits: 8,
  value: Audio[type].bind('volume'),

  onChange: ({ value }) => Audio[type].volume = value,
});

export const OutputDeviceIcon = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: '?',

  setup: self => self.hook(Audio.speaker, self => {
    const port  = Audio.speaker.stream?.name;
    const muted = Audio.speaker.stream?.is_muted;
    switch (port) {
      case HEADPHONES:
        self.label = muted ? HEADPHONE_MUTED_ICON : HEADPHONE_ICON;
        break;
      case SPEAKERS:
        self.label = muted ? SPEAKER_MUTED_ICON   : SPEAKER_ICON;
        break;
      default:
        self.label = '?';
        break;
    }
  })
});

export const ToggleOutputButton = (child: Gtk.Widget, { ...props} = {}) => Widget.Button({
  ...props,
  child,

  onClicked: () => {
    if (Audio.speaker.stream?.name === HEADPHONES) {
      Audio.speaker.stream.port = SPEAKERS;
    } else if (Audio.speaker.stream) {
      Audio.speaker.stream.port = HEADPHONES;
    }
  },
});

export const Volume = ({ ...props } = {}, type = 'speaker') => Widget.Label({
  ...props,
  label: Audio[type].bind('volume').as((vol: number) => `${Math.round(vol * 100)}`),
});
