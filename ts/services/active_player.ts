import { MprisPlayer } from "types/service/mpris";
const Mpris = await Service.import('mpris');

class ActivePlayer extends Service {
  static {
    Service.register(
      this,
      {
        'player-changed': ['jsobject'],
      },
      {
        'player': ['jsobject', 'r'],
      },
    );
  }

  #player: MprisPlayer | null = Mpris.getPlayer();

  get player() { return this.#player; }

  constructor() {
    super();

    Mpris.connect('player-changed', (_, busname) => {
      this.setPlayer(busname);
    });
    Mpris.connect('player-closed', (_, _busname) => {
      this.setPlayer();
    })
  }

  setPlayer(busname: string | undefined = undefined) {
    this.#player = Mpris.getPlayer(busname);
    this.emit('player-changed', this.#player);
  }

  shift() {
    if (!this.#player) return;
    const index = Mpris.players.indexOf(this.#player);
    const length = Mpris.players.length;
    this.#player = Mpris.players[(index + 1) % length];
    this.emit('player-changed', this.#player);
  }

  playPause() { this.#player?.playPause(); }
  next() { this.#player?.next(); }
  previous() { this.#player?.previous(); }
}

const service = new ActivePlayer;
export default service;
