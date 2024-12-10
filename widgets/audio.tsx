import { bind } from "astal"
import { Gtk } from "astal/gtk3"

import { Speaker, MIN_VOLUME, MAX_VOLUME, vol_percent, Output, get_output } from "../utils/audio"

import { WidgetProps, SliderProps } from "../utils/widget"
import Slider from "./slider"

export function VolumeSlider(props: SliderProps): JSX.Element {
    return <Slider min={MIN_VOLUME}
                   max={MAX_VOLUME}
                   value={bind(Speaker, "volume")}
                   onDragged={({ value }) => Speaker.set_volume(value)}
                   cursor="pointer"
                   {...props}/>
}

export function get_output_icon(output: Output): string {
    switch (output) {
            case Output.HEADPHONE: return "headphones-symbolic"
            case Output.SPEAKER: return "speakers-symbolic"
            default: return "unknown-symbolic"
    }
}

export function SpeakerIcon(props: WidgetProps): JSX.Element {
    return <icon icon={bind(Speaker, "description").as(desc => get_output_icon(get_output(desc)))}
                 {...props}/>
}

export function VolumeLabel(props: WidgetProps): JSX.Element {
    return <box {...props}>
        <SpeakerIcon css="font-size: 1.5rem; margin-right: .2rem;"/>
        <label label="Głośność: " halign={Gtk.Align.START} hexpand/>
        <label label={bind(Speaker, "volume").as(vol => `${vol_percent(vol)}%`)} halign={Gtk.Align.END}/>
    </box>

}
