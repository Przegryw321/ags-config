import Glib from 'gi://GLib';
import { is_focused_fullscreen } from '../lib/hyprland';
const Hyprland = await Service.import('hyprland');

export const DateTimeString = (format: string) => Glib.DateTime.new_now_local().format(format);

export const DateTimeLabel = ({ format, ...props }) => Widget.Label({
  ...props,
  label: DateTimeString(format),

  setup: self => self.poll(1000, self => {
    self.label = DateTimeString(format) || '';
  }),
});

export const DateTimeStyleLabel = ({ format, style, mainClassName, ...props }) => Widget.Label({
  ...props,
  label: DateTimeString(format),

  setup: self => self.poll(1000, self => {
    self.label = DateTimeString(format) || '';
    self.class_name = `${mainClassName} ${style(self.label)}`;
  }),
});

export const Clock = () => DateTimeLabel({
  className: 'bartime-clock',
  format: '%H:%M',
  hpack: 'end',
});

export const Date = () => DateTimeLabel({
  className: 'bartime-date',
  format: '%A, %d %B',
  hpack: 'end',
});

export const WeekdayClass = (label: string) => {
  const weekday = label.slice(0, 3);
  switch (weekday) {
    case 'pon': return 'monday';
    case 'wto': return 'tuesday';
    case 'śro': return 'wednesday';
    case 'czw': return 'thursday';
    case 'pią': return 'friday';
    case 'sob': return 'saturday';
    case 'nie': return 'sunday';
  }
};

export const Weekday = () => DateTimeStyleLabel({
  mainClassName: 'bartime-weekday',
  format: '%A',

  style: WeekdayClass,
});

export const MonthDay = () => DateTimeLabel({
  className: 'bartime-day',
  format: ', %d ',
});

export const Month = () => DateTimeStyleLabel({
  mainClassName: 'bartime-month',
  format: '%B',

  style: (label: string) => {
    const month = label.slice(0, 3);
    switch (month) {
      case 'sty':
      case 'lut':
      case 'gru':
        return 'winter';
      case 'mar':
      case 'kwi':
      case 'maj':
        return 'spring';
      case 'cze':
      case 'lip':
      case 'sie':
        return 'summer';
      case 'wrz':
      case 'paź':
      case 'lis':
        return 'autumn';
    }
  }
});

export const StyleDate = () => Widget.Box({
  className: 'bartime-date',

  children: [
    Weekday(),
    MonthDay(),
    Month(),
  ]
});

export const BarTime = ({ ... rest } = {}) => Widget.Box({
  ...rest,
  vpack: 'center',
  vertical: true,
  children: [
    Clock(),
    StyleDate(),
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

