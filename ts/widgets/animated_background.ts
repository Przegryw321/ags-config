import Gdk from "gi://Gdk";
import GdkPixbuf from "gi://GdkPixbuf";
import { get_property } from "../lib/utils";

export const RoundedImage = ({ path = '', ...props }) => Widget.DrawingArea({
  ...props,

  attribute: {
    animation: GdkPixbuf.PixbufAnimation.new_from_file(path),
    iter: <GdkPixbuf.PixbufAnimationIter | undefined> undefined,
  },

  drawFn: (self: any, cr: any, w: number, h: number) => {
    const ctx = self.get_style_context();
    const radius = get_property(ctx, 'border-radius');
    const width = get_property(ctx, 'min-width');
    const height = get_property(ctx, 'min-height');

    const iter = self.attribute.iter;

    self.width_request = width;
    self.height_request = height;

    // rounded rect
    cr.newPath();
    cr.arc(w - radius, radius    , radius, 1.5 * Math.PI, 2   * Math.PI);
    cr.arc(w - radius, h - radius, radius, 0            , 0.5 * Math.PI);
    cr.arc(radius    , h - radius, radius, 0.5 * Math.PI,       Math.PI);
    cr.arc(radius    , radius    , radius,       Math.PI, 1.5 * Math.PI);
    cr.closePath();

    // clip corners
    cr.clip();

    // draw animation
    Gdk.cairo_set_source_pixbuf(cr, iter.get_pixbuf(), 0, 0);
    cr.paint();

    // advance iterator
    iter.advance(null);
  },
  setup: self => {
    self.attribute.iter = self.attribute.animation.get_iter(null);

    // draw won't get called if size is not set
    self.set_size_request(1, 1);

    Utils.interval(100, () => self.queue_draw())
  },
});

export const AnimatedBackground = ({ ...props } = {}) => Widget.Overlay({
  ...props,
  child: RoundedImage({
    className: 'animation',
    path: `${App.configDir}/resources/rain.gif`,
    hexpand: true,
    vexpand: true,
  }),
});
