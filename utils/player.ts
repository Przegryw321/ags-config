import AstalMpris from "gi://AstalMpris"
const Mpris = AstalMpris.get_default()

import { ActivePlayer } from "../variables/player"

export async function pause(): Promise<void> {
    ActivePlayer.get()?.pause()
}

export async function play(): Promise<void> {
    ActivePlayer.get()?.play()
}

export async function play_pause(): Promise<void> {
    ActivePlayer.get()?.play_pause()
}

export async function stop(): Promise<void> {
    ActivePlayer.get()?.stop()
}

export async function previous(): Promise<void> {
    ActivePlayer.get()?.previous()
}

export async function next(): Promise<void> {
    ActivePlayer.get()?.next()
}

export const PlayerControlObj: { [key: string]: () => Promise<void> } = {
    pause,
    play,
    play_pause,
    stop,
    previous,
    next,
}

export default Mpris
