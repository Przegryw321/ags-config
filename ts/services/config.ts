class Config extends Service {
  static {
    Service.register(
      this,
      {
        'config-changed': ['jsobject'],
      },
      {
        'options': ['jsobject', 'rw'],
      },
    );
  }

  #userConfigPath = `${App.configDir}/userconfig.json`;
  #options = {};

  get options(): object {
    return this.#options;
  }

  set options(object: object) {
    this.#options = object;
  }

  constructor() {
    super();

    try {
      const contents = Utils.readFile(this.#userConfigPath);
      this.#options = JSON.parse(contents);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Save settings to file
  */
  saveToFile(): void {
    const output = JSON.stringify(this.#options);
    Utils.writeFile(output, this.#userConfigPath);
  }

  /**
   * Add an option with a default value
   * Does nothing if it already exists
  */
  add(name: string, value: any): void {
    if (!this.#options.hasOwnProperty(name))
      this.#options[name] = value;
  }

  /**
   * Set the value of an option
   * Creates the option if it doesn't exist
  */
  set(name: string, value: any): void {
    this.#options[name] = value;

    this.changed('options');
    this.emit('config-changed', this.#options);
  }

  /**
   * Toggle the value of a boolean option
  */
  toggle(name: string): void {
    this.#options[name] = !this.#options[name];

    this.changed('options');
    this.emit('config-changed', this.#options);
  }
}

const service = new Config;
export default service;
