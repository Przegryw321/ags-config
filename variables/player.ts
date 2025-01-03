import { Variable } from "astal"
import AstalMpris from "gi://AstalMpris"
import Mpris from "../utils/player"

export const ActivePlayer = Variable(null as AstalMpris.Player | null)
    .observe(Mpris, 'player-added', (_mpris, player) => {
        ActivePlayer.observe(player, 'notify', player => player)
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
    ActivePlayer.observe(player, 'notify', player => player)

if (players.length > 0)
    ActivePlayer.set(players[players.length - 1])
