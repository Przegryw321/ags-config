import Pango from 'gi://Pango';
import { get_property } from "../lib/utils";
import Cairo from 'gi://cairo';
const PangoCairo = imports.gi.PangoCairo;

interface RGBA {
  red: number,
  green: number,
  blue: number,
  alpha: number,
}

const set_rgba = (cr: any, color: RGBA) => cr.setSourceRGBA(color.red, color.green, color.blue, color.alpha);

const draw_text = (cr: any, layout: any, x: number, y: number, text: string) => {
  layout.set_text(text, text.length);
  const [width, height] = layout.get_pixel_size();
  x = x - (width / 2);
  y = y - (height / 2);

  // draw text
  cr.moveTo(x, y);
  PangoCairo.show_layout(cr, layout);
};

export const Compass = ({ ...props } = {}) => Widget.DrawingArea({
  ...props,
  attribute: {
    value: 0,
  },
  drawFn: (self, cr: any, _w, _h) => {
    const value = self.attribute.value * Math.PI / 180;
    const styleContext = self.get_style_context();
    const width = get_property(styleContext, 'min-width');
    const thickness = get_property(styleContext, 'min-height');
    const bc: RGBA = get_property(styleContext, 'border-color');
    const bg: RGBA = get_property(styleContext, 'background-color');
    const fg: RGBA = get_property(styleContext, 'color');
    const fontSize = get_property(styleContext, 'font-size');
    const fontFamily = get_property(styleContext, 'font-family')[0];

    self.set_size_request(width, width);

    const diameter = width - thickness;
    const radius = diameter / 2;

    const x = width / 2;
    const y = x;

    cr.setAntialias(Cairo.Antialias.BEST);

    // draw circle
    cr.setLineWidth(thickness);
    set_rgba(cr, bc);
    cr.arc(x, y, radius, 0, 2 * Math.PI);
    cr.stroke();

    const side = radius / 4 + thickness;
    const halfSide = side / 2;
    const trHeight = halfSide * Math.sqrt(3);

    const sin = Math.sin(value);
    const cos = Math.cos(value);
    const hsSin = sin * halfSide;
    const hsCos = cos * halfSide;
    const heightSin = sin * trHeight;
    const heightCos = cos * trHeight;
    const thSin = sin * (thickness / 2);
    const thCos = cos * (thickness / 2);

    const arrowX =  sin * radius + x - thSin - heightSin;
    const arrowY = -cos * radius + y + thCos + heightCos;

    // draw line
    set_rgba(cr, bg);
    cr.moveTo(-sin * radius + x + thSin, cos * radius + y - thCos);
    cr.lineTo(arrowX, arrowY);
    cr.stroke();

    // draw arrow head
    cr.moveTo(arrowX, arrowY);
    cr.relLineTo(hsCos, hsSin);
    cr.relLineTo( heightSin - hsCos, -heightCos - hsSin);
    cr.relLineTo(-heightSin - hsCos,  heightCos - hsSin);
    cr.relLineTo(hsCos, hsSin);
    cr.fill();

    // draw text
    const layout = PangoCairo.create_layout(cr);
    const fontDesc = Pango.font_description_from_string(`${fontFamily} ${fontSize}`);
    const hr = radius / 1.6;
    layout.set_font_description(fontDesc);
    set_rgba(cr, fg);
    draw_text(cr, layout, x, y - hr, 'N');
    draw_text(cr, layout, x, y + hr, 'S');
    draw_text(cr, layout, x - hr, y, 'W');
    draw_text(cr, layout, x + hr, y, 'E');
  },
});
