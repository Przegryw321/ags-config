import { bind, timeout } from "astal"
import { Astal, App, Gtk } from "astal/gtk3"

import { Speaker } from "../utils/audio"
import { VolumeSlider, VolumeLabel } from "../widgets/audio"

import { get_property } from "../utils/draw"

import { interpolate_colors, Color } from "../utils/math"

const dummyLow = <label className="low-volume"/>
const dummyMedium = <label className="medium-volume"/>
const dummyHigh = <label className="high-volume"/>

const TIMEOUT = 3000

export default async function VolumePopup(): Promise<JSX.Element> {
    return <window name="volume-popup"
                   visible={false}
                   application={App}
                   margin={20}
                   anchor={Astal.WindowAnchor.TOP}
                   layer={Astal.Layer.OVERLAY}
                   setup={(self) => self.hook(bind(Speaker, "volume"), self => {
                       self.visible = true
                       self.timer?.cancel()
                       self.timer = timeout(TIMEOUT, () => self.visible = false)
                   })}>
        <box className="volpop"
             orientation={Gtk.Orientation.VERTICAL}
             spacing={5}
             setup={(self) => self.hook(bind(Speaker, "volume"), (self, volume) => {
                  // set border color
                  const lowColor = get_property(dummyLow.get_style_context(), 'color')
                  const mediumColor = get_property(dummyMedium.get_style_context(), 'color')
                  const highColor = get_property(dummyHigh.get_style_context(), 'color')
                  const color = interpolate_colors(volume, [
                       [lowColor as Color, 0.0],
                       [lowColor as Color, 0.5],
                       [mediumColor as Color, 0.6],
                       [highColor as Color, 1]
                   ])
                  color.red *= 255
                  color.green *= 255
                  color.blue *= 255
                  const cssColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`
                  self.css = `min-width: 8.6rem; border-color: ${cssColor};`
              })
              }>
            <VolumeLabel/>
            <VolumeSlider className="volpop-slider" length={0}/>
        </box>
    </window>
}
