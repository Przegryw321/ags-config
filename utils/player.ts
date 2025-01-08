import AstalMpris from "gi://AstalMpris"
const Mpris = AstalMpris.get_default()

import { ActivePlayer } from "../variables/player"

import { double_wrap } from "../utils/math"

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

export async function shift(step: number = 1): Promise<void> {
    const player = ActivePlayer.get()
    if (!player) return

    const players = Mpris.get_players()
    const index = players.indexOf(player)
    const length = players.length

    ActivePlayer.set(players[double_wrap(index + step, length)])
}

export const PlayerControlObj: { [key: string]: () => Promise<void> } = {
    pause,
    play,
    play_pause,
    stop,
    previous,
    next,
    shift,
    unshift: () => shift(-1),
}

export default Mpris
