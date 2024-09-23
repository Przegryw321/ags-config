import { Source } from 'types/@girs/glib-2.0/glib-2.0.cjs';
import Archlinux from '../services/archlinux';
import Plural from '../lib/plural';

export const Shutdown = ({ ...props } = {}) => Widget.Label({
  ...props,
  hpack: 'start',
  justification: 'left',
  xalign: 0,

  attribute: {
    id: <Source | null> null,
  },

  setup: self => self.hook(Archlinux, (self, timestamp: number | null) => {
    if (timestamp === undefined) timestamp = Archlinux.shutdown_schedule;
    const id = self.attribute.id;

    if (!timestamp) {
      if (id) {
        clearInterval(id);
        self.attribute.id = null;
      }
      self.label = '';
      return;
    }

    const shutdown_date = new Date(timestamp / 1000);

    if (id) clearInterval(id);
    self.attribute.id = setInterval(() => {
      const current_date  = new Date();
      const diff          = shutdown_date.valueOf() - current_date.valueOf();

      let   leftover = diff / 1000;
      const seconds  = Math.floor(leftover) % 60;
      const minutes  = Math.floor(leftover /= 60) % 60;
      const hours    = Math.floor(leftover /= 60);

      const s = `${seconds} ${Plural.seconds(seconds)}`;
      const m = minutes > 0 ? `${minutes} ${Plural.minutes(minutes)} i ` : '';
      let   h = hours   > 0 ? `${hours} ${Plural.hours(hours)} ` : '';

      let width = 22;
      if (h) width += 10;
      if (m) width += 12;
      if (s) width += 10;

      if (h && !m) {
        h += 'i ';
        width += 3;
      } 

      self.label = `System zamknie się za ${h}${m}${s}`;
      self.width_chars = width;
    }, 1000)
  }, 'shutdown-changed'),
});

export const ShutdownLeft = ({ ...props } = {}) => Widget.Box({
  hpack: 'start',

  children: [
    Shutdown({ ...props }),
  ],
});
