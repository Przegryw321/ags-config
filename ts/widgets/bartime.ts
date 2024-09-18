import Glib from 'gi://GLib';

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

const BarTime = () => Widget.Box({
  vpack: 'center',
  vertical: true,
  children: [
    Clock(),
    Date(),
  ],
});

const bartime = BarTime();
export default bartime;
