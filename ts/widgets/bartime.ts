import Glib from 'gi://GLib';
import { is_focused_fullscreen } from '../lib/hyprland';
const Hyprland = await Service.import('hyprland');

export const DateTimeString = (format: string) => Glib.DateTime.new_now_local().format(format);

export const DateTimeLabel = (format: string, { ...rest } = {}) => Widget.Label({
  ...rest,
  label: DateTimeString(format),

  setup: self => self.poll(1000, self => {
    self.label = DateTimeString(format) || '';
  }),
});

export const Clock = () => DateTimeLabel('%H:%M', {
  className: 'bartime-clock',
  hpack: 'end',
  vpack: 'center',
});
export const Date = () => DateTimeLabel('%A, %d %B', {
  className: 'bartime-date',
  hpack: 'end',
  vpack: 'center',
});

export const BarTime = ({ ... rest } = {}) => Widget.Box({
  ...rest,
  vpack: 'center',
  vertical: true,
  children: [
    Clock(),
    Date(),
  ],
});

export const PopupDate = ({ ...rest } = {}, btClass = '') => Widget.Revealer({
  ...rest,
  revealChild: false,
  transition: 'slide_left',
  transitionDuration: 500,

  child: BarTime({ className: btClass }),

  setup: self => self.hook(Hyprland, (self, event, _args) => {
    self.reveal_child = is_focused_fullscreen(event) ?? self.reveal_child;

    // make duration longer when hiding
    if (self.reveal_child)
      self.transition_duration = 1000;
    else
      self.transition_duration = 500;
  }, 'event')
});

