import { Variable, bind } from "astal"
import AstalMpris from "gi://AstalMpris"
import Mpris from "../utils/player"

export const ActivePlayer = Variable(null as AstalMpris.Player | null)
    .observe(Mpris, 'player-added', (_mpris, player) => {
        bind(player, 'playback-status').subscribe(() => ActivePlayer.set(player))
        return player
    })
    .observe(Mpris, 'player-closed', () => {
        const players = Mpris.get_players()

        if (players.length > 0)
            return players[players.length - 1]

        return null
    })

const players = Mpris.get_players()

for (const player of players)
    bind(player, 'playback-status').subscribe(() => ActivePlayer.set(player))

if (players.length > 0)
    ActivePlayer.set(players[players.length - 1])
