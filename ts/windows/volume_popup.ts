import { Source } from "types/@girs/glib-2.0/glib-2.0.cjs";
import { OutputDeviceIcon, VolumeSlider } from "../widgets/volume";
import { is_focused_fullscreen } from "ts/lib/hyprland";
const Audio    = await Service.import('audio');
const Hyprland = await Service.import('hyprland');

const VolumeLabel = () => Widget.Label({
  className: 'volpop-volume-label',
  xalign: 0,
  label: Audio.speaker.bind('volume').as((vol: number) => `Głośność: ${Math.round(vol * 100)}%`),
});

const TopHalf = () => Widget.Box({
  children: [
    OutputDeviceIcon({ className: 'volpop-output-icon' }),
    VolumeLabel(),
  ]
});

const VolumePopupLayout = () => Widget.Box({
  className: 'volpop-layout',
  vertical: true,

  children: [
    TopHalf(),
    VolumeSlider({ className: 'volpop-volume-slider' }),
  ],
});

export const VolumePopup = async (monitor: number | undefined = undefined) => Widget.Window({
  monitor,
  visible: false,
  name: 'volumepopup',
  anchor: ['top'],
  margins: [20],
  exclusivity: 'normal',
  layer: 'overlay',

  child: VolumePopupLayout(),

  attribute: {
    timeoutId: <Source | null> null,
    counter: 2, // amount of events to ignore at startup
    lastVolume: 0,
    lastPort: <string | null | undefined> null,
  },

  setup: self => self
    .hook(Audio.speaker, self => {
      const lastVolume = self.attribute.lastVolume;
      const lastPort   = self.attribute.lastPort;

      // ignore everything except volume and output device changes
      if (lastVolume === Audio.speaker.volume && lastPort === Audio.speaker.stream?.port) {
        return;
      }

      self.attribute.lastVolume = Audio.speaker.volume;
      self.attribute.lastPort   = Audio.speaker.stream?.port;

      if (self.attribute.counter > 0) {
        self.attribute.counter -= 1;
        return;
      }

      // hide the popup after 3 seconds, but 'bump' it with every new event
      if (self.attribute.timeoutId) clearTimeout(self.attribute.timeoutId);
      self.attribute.timeoutId = setTimeout(() => self.visible = false, 3000);
      self.visible = true;
    })
    .hook(Hyprland, (self, event, _args) => {
      // We don't need it to respect the bar when fullscreen
      const is_fullscreen = is_focused_fullscreen(event);
      if (is_fullscreen === null) return;
      self.exclusivity = is_fullscreen ? 'ignore' : 'normal';
    }, 'event'),
});
