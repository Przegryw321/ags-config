import AstalWp from "gi://AstalWp"

export const { audio } = AstalWp.get_default()!
export const Speaker = audio.defaultSpeaker
export const Microphone = audio.defaultMicrophone

export const MIN_VOLUME = 0
export const MAX_VOLUME = 1

export const HEADPHONE_DESC = "Family"
export const SPEAKER_DESC = "GA104"

export enum Output {
    HEADPHONE,
    SPEAKER,
    UNKNOWN,
}

export function get_output(description?: string): Output {
    if (description?.startsWith(HEADPHONE_DESC))
        return Output.HEADPHONE
    if (description?.startsWith(SPEAKER_DESC))
        return Output.SPEAKER
    return Output.UNKNOWN
}

export function vol_percent(volume: number): number {
    const decimal = (volume - MIN_VOLUME) / (MAX_VOLUME - MIN_VOLUME)
    return Math.round(decimal * 100)
}

export default audio
