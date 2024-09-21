import Gio from 'gi://Gio'

class Archlinux extends Service {
  static {
    Service.register(
      this,
      {
        'updates-changed': ['jsobject'],
        'shutdown-changed': ['int'],
      },
      {
        'updates': ['jsobject', 'r'],
        'shutdown-schedule': ['int', 'r'],
      },
    );
  }

  #updates: { name: string, from: string, to: string }[] = [];
  #shutdownSchedule: number | null = null;

  get updates() {
    return this.#updates;
  }

  get shutdown_schedule() {
    return this.#shutdownSchedule;
  }

  constructor() {
    super();

    const schedule = '/run/systemd/shutdown/scheduled';
    const pacman_lock = '/var/lib/pacman/db.lck';

    const file = Gio.File.new_for_path(schedule);
    this.#onScheduleChange(file);
    // function needs to be passed like this or 'this' gets lost
    // lesson learned the hard way
    Utils.monitorFile(schedule, file => this.#onScheduleChange(file));

    setTimeout(() => this.#checkUpdates().catch(console.error), 10000);
    setInterval(() => this.#checkUpdates().catch(console.error), 3600000);
    Utils.monitorFile(pacman_lock, () => this.#checkUpdates().catch(console.error));
  }

  async #checkUpdates() {
    const updates = await Utils.execAsync('checkupdates').catch(() => null)
    if (updates) {
      const lines   = updates.split('\n');
      const json    = lines.map(line => {
        const words = line.split(' ');
        return { name: words[0], from: words[1], to: words[3] };
      });
      this.#updates = json;
    } else {
      this.#updates = [];
    }
    
    this.changed('updates');
    this.emit('updates-changed', this.#updates);
  }

  #onScheduleChange(file: Gio.File) {
    if (file.query_exists(null)) {
      const contents  = file.load_contents(null);
      const string    = new TextDecoder().decode(contents[1]);
      const equals    = string.indexOf('=');
      const newline   = string.indexOf('\n');
      const timestamp = Number(string.slice(equals + 1, newline));

      this.#shutdownSchedule = timestamp;
    } else {
      // if file doesn't exist then shutdown is cancelled
      this.#shutdownSchedule = null;
    }

    this.changed('shutdown-schedule');
    this.emit('shutdown-changed', this.#shutdownSchedule);
  }
}

const archlinux = new Archlinux;
export default archlinux;
