import Cairo from "types/@girs/cairo-1.0/cairo-1.0";
import Gtk from "types/@girs/gtk-3.0/gtk-3.0";
import Pango from "types/@girs/pango-1.0/pango-1.0";
const PangoCairo = imports.gi.PangoCairo;

const Hyprland = await Service.import('hyprland');

// TO COLOR GRADIENT:
// background-color -> border-color

const dummyWs = Widget.Box({ className: 'workspace' });
const dummyActiveWs = Widget.Box({ className: 'workspace-active' });
const dummySecondActiveWs = Widget.Box({ className: 'workspace-active-second' })
const dummyOccupiedWs = Widget.Box({ className: 'workspace-occupied' });

// this function is basically copied from end_4's dotfiles
const draw_workspaces = (area: any, cr: any, count: number) => {
  const textOffset = +1;

  cr.setAntialias(Cairo.Antialias.BEST);

  const { width, height } = area.get_allocation();

  const wsStyleContext = dummyWs.get_style_context();
  const wsDiameter = wsStyleContext.get_property('min-width', Gtk.StateFlags.NORMAL);
  const wsRadius = wsDiameter / 2;
  const wsFontFamily = wsStyleContext.get_property('font-family', Gtk.StateFlags.NORMAL);
  const wsFontSize = wsStyleContext.get_property('font-size', Gtk.StateFlags.NORMAL);
  const wsfg = wsStyleContext.get_property('color', Gtk.StateFlags.NORMAL);

  const occupiedStyleContext = dummyOccupiedWs.get_style_context();
  const occupiedfg = occupiedStyleContext.get_property('color', Gtk.StateFlags.NORMAL);
  const occupiedbg = occupiedStyleContext.get_property('background-color', Gtk.StateFlags.NORMAL);

  //const activeWsCenterY = height / 2;
  const activeRadius = wsRadius / 1.2;
  // arbitrarily smaller radius for decorative dot
  //const indicatorRadius = activeRadius / 5;

  const widgetWidth = wsDiameter * count;
  const widgetOffset = (width - widgetWidth) / 2;

  const activeMainStyleContext = dummyActiveWs.get_style_context();
  const activeMainFG = activeMainStyleContext.get_property('color', Gtk.StateFlags.NORMAL);
  const activeMainBG = activeMainStyleContext.get_property('background-color', Gtk.StateFlags.NORMAL);
  const activeMainBC = activeMainStyleContext.get_property('border-color', Gtk.StateFlags.NORMAL);
  const activeMainWs = area.attribute.activeWorkspaces[0];
  //const activeMainWsCenterX    = wsDiameter * activeMainWs - wsRadius + widgetOffset;

  const activeSecondStyleContext = dummySecondActiveWs.get_style_context();
  const activeSecondFG = activeSecondStyleContext.get_property('color', Gtk.StateFlags.NORMAL);
  const activeSecondBG = activeSecondStyleContext.get_property('background-color', Gtk.StateFlags.NORMAL);
  const activeSecondBC = activeSecondStyleContext.get_property('border-color', Gtk.StateFlags.NORMAL);
  const activeSecondWs = area.attribute.activeWorkspaces[1];
  //const activeSecondWsCenterX    = wsDiameter * activeSecondWs - wsRadius + widgetOffset;

  area.set_size_request(wsDiameter * count, wsDiameter);

  // Font
  const layout = PangoCairo.create_layout(cr);
  const fontDesc = Pango.font_description_from_string(`${wsFontFamily[0]} ${wsFontSize}`);
  layout.set_font_description(fontDesc);

  const wsMask = area.attribute.workspaceMask;
  const wsCenterY = height / 2;
  for (let i = 1; i <= count; ++i) {
    const wsCenterX = (wsDiameter * i) - wsRadius + widgetOffset;

    // Draw occupied workspace background
    if (wsMask & (1 << i)) {
      cr.setSourceRGBA(occupiedbg.red, occupiedbg.green, occupiedbg.blue, occupiedbg.alpha);

      // The extra +1 to the rectangle width is to fix the 1 pixel gap that is
      // created otherwise. The most likely culprit is rounding error.

      if (!(wsMask & (1 << (i - 1)))) { // Draw (
        cr.arc(wsCenterX + 1, wsCenterY, wsRadius, 0.5 * Math.PI, -0.5 * Math.PI);
        cr.fill();
      } else { // Draw =
        cr.rectangle(wsCenterX - wsRadius, wsCenterY - wsRadius, wsRadius + 1, wsDiameter);
        cr.fill();
      }
      if (!(wsMask & (1 << (i + 1)))) { // Draw )
        cr.arc(wsCenterX, wsCenterY, wsRadius, -0.5 * Math.PI, 0.5 * Math.PI);
        cr.fill();
      } else { // Draw =
        cr.rectangle(wsCenterX, wsCenterY - wsRadius, wsRadius + 1, wsDiameter);
        cr.fill();
      }

      cr.setSourceRGBA(occupiedfg.red, occupiedfg.green, occupiedfg.blue, occupiedfg.alpha);
    } else {
      cr.setSourceRGBA(wsfg.red, wsfg.green, wsfg.blue, wsfg.alpha);
    }

    // draw active background
    if (i === activeMainWs) {
      const pattern = new Cairo.LinearGradient(
        wsCenterX - wsRadius,
        wsCenterY - wsRadius,
        wsCenterX + wsRadius,
        wsCenterY + wsRadius,
      );
      pattern.addColorStopRGBA(0.2, activeMainBG.red, activeMainBG.green, activeMainBG.blue, activeMainBG.alpha);
      pattern.addColorStopRGBA(1.0, activeMainBC.red, activeMainBC.green, activeMainBC.blue, activeMainBC.alpha);

      cr.setSource(pattern);

      cr.arc(wsCenterX, wsCenterY, activeRadius, 0, 2 * Math.PI);
      cr.fill();

      cr.setSourceRGBA(activeMainFG.red, activeMainFG.green, activeMainFG.blue, activeMainFG.alpha);
    } else if (i === activeSecondWs) {
      const pattern = new Cairo.LinearGradient(
        wsCenterX - wsRadius,
        wsCenterY - wsRadius,
        wsCenterX + wsRadius,
        wsCenterY + wsRadius,
      );
      pattern.addColorStopRGBA(0.2, activeSecondBG.red, activeSecondBG.green, activeSecondBG.blue, activeSecondBG.alpha);
      pattern.addColorStopRGBA(1.0, activeSecondBC.red, activeSecondBC.green, activeSecondBC.blue, activeSecondBC.alpha);

      cr.setSource(pattern);

      cr.arc(wsCenterX, wsCenterY, activeRadius, 0, 2 * Math.PI);
      cr.fill();

      cr.setSourceRGBA(activeSecondFG.red, activeSecondFG.green, activeSecondFG.blue, activeSecondFG.alpha);
    }

    // Draw workspace number
    layout.set_text(`${i}`, -1);
    const [layoutWidth, layoutHeight] = layout.get_pixel_size();
    const x = (wsDiameter * i) - (layoutWidth / 2) - wsRadius + widgetOffset;
    const y = (height - layoutHeight) / 2 + textOffset;
    cr.moveTo(x, y);
    PangoCairo.show_layout(cr, layout);
    cr.stroke();
  }
};

const dispatch = (id: number) => Hyprland.messageAsync(`dispatch workspace ${id}`);

const WorkspaceButton = (i: number) => Widget.Button({
  className: 'workspace',
  tooltipMarkup: `Przełącz na ${i} pulpit`,
  onClicked: () => dispatch(i),
});

export const Workspaces = (count: number = 10) => Widget.Box({
  className: 'workspaces',
  children: Array.from({ length: count }, (_, i) => i + 1).map(WorkspaceButton),

  attribute: {
    workspaceMask: 0,
    activeWorkspaces: [0, 0],
    updateMask(self: any) {
      const workspaces = Hyprland.workspaces;
      let workspaceMask = 0;
      for (let i = 0; i < workspaces.length; ++i) {
        const ws = workspaces[i];
        if (ws.id <= 0 || ws.id > count) continue;
        if (ws.windows > 0)
          workspaceMask |= 1 << ws.id;
      }
      self.attribute.workspaceMask = workspaceMask;
      self.queue_draw();
    }
  },

  setup: self => self
    .hook(Hyprland.active.workspace, self => {
      const mainMonitor = Hyprland.monitors[0]?.activeWorkspace.id;
      const secondMonitor = Hyprland.monitors[1]?.activeWorkspace.id;

      if (mainMonitor) self.attribute.activeWorkspaces[0] = mainMonitor;
      if (secondMonitor) self.attribute.activeWorkspaces[1] = secondMonitor;

      if (mainMonitor || secondMonitor) self.queue_draw();
    })
    .hook(Hyprland, self => self.attribute.updateMask(self), 'notify::workspaces')
    .on('draw', (area, cr) => draw_workspaces(area, cr, count))
});
