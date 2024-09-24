import Gio from 'gi://Gio';
import { curl } from '../lib/utils';

import Config from './config';

export interface WeatherOptions {
  city: string,
  units: string,
  lang: string,
};

export interface CurrentWeather {
  coord: {
    lon: number
    lat: number
  },
  weather: [{
    id: number,
    main: string,
    description: string,
    icon: string,
  }],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
  },
  clouds: {
    all: number,
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number,
  },
  timezone: number,
  id: number,
  name: string,
  cod: number,
};

function isCurrentWeather(object: any): object is CurrentWeather {
  return 'weather' in object;
}

class Weather extends Service {
  static {
    Service.register(
      this,
      {
        'current-weather-changed': ['jsobject'],
      },
      {
        'current-weather': ['jsobject', 'r'],
        'description': ['string', 'r'],
        'icon': ['string', 'r'],
        'temp': ['int', 'r'],
        'pressure': ['int', 'r'],
        'humidity': ['int', 'r'],
        'wind-speed': ['int', 'r'],
      },
    );
  }

  // weather data
  #currentWeather: CurrentWeather | null = null;
  #description: string = '';
  #icon: string = '';
  #temp: number | null = null;
  #pressure: number | null = null;
  #humidity: number | null = null;
  #windSpeed: number | null = null;

  // key for the openweathermap api
  #appId: string;

  // service configuration
  #weatherFilesPath = `${App.configDir}/weather`;
  #weatherJsonPath  = `${this.#weatherFilesPath}/current_weather.json`;
  #weatherIconsPath = `${this.#weatherFilesPath}/icons`;
  #keyPath          = `${this.#weatherFilesPath}/key`;

  // info to pass to the api
  #urlStart     = 'https://api.openweathermap.org/data/2.5/weather';
  #urlIconStart = 'https://openweathermap.org/img/wn';
  #options: WeatherOptions;

  get current_weather() { return this.#currentWeather; }
  get description()     { return this.#description; }
  get icon()            { return this.#icon; }
  get temp()            { return this.#temp; }
  get pressure()        { return this.#pressure; }
  get humidity()        { return this.#humidity; }
  get wind_speed()      { return this.#windSpeed; }

  constructor() {
    super();

    this.#appId = Utils.readFile(this.#keyPath).trim();

    Config.add('weather_city', 'London');
    Config.add('weather_units', 'metric');
    Config.add('weather_lang', 'en');
    this.#options = {
      city: Config.options['weather_city'],
      units: Config.options['weather_units'],
      lang: Config.options['weather_lang'],
    };

    this.#fetchCurrentWeather();
    setTimeout(() => this.#fetchCurrentWeather(), 3600000);
  }

  #update() {
    this.changed('current-weather');
    this.changed('description');
    this.changed('icon');
    this.changed('temp');
    this.changed('pressure');
    this.changed('humidity');
    this.changed('wind-speed');
    this.emit('current-weather-changed', this.#currentWeather);
  }

  async #readCurrentWeather() {
    const json = JSON.parse(await Utils.readFileAsync(this.#weatherJsonPath));

    if (isCurrentWeather(json)) {
      this.#currentWeather = json;

      const weather = json.weather[0];
      this.#description    = weather.description;
      this.#icon           = `${this.#weatherIconsPath}/${weather.icon}.png`;
      this.#temp           = json.main.temp;
      this.#pressure       = json.main.pressure;
      this.#humidity       = json.main.humidity;
      this.#windSpeed      = json.wind.speed;
    } else {
      this.#currentWeather = null;
      this.#description    = '';
      this.#icon           = '';
      this.#temp           = null;
      this.#pressure       = null;
      this.#humidity       = null;
      this.#windSpeed      = null;
    }
    await this.#fetchIcon();
  }

  async #fetchIcon() {
    if (!this.#currentWeather) return;
    const icon      = this.#currentWeather.weather[0].icon;
    const icon_path = `${this.#weatherIconsPath}/${icon}.png`;
    const file      = Gio.file_new_for_path(icon_path);
    if (!file.query_exists(null)) {
      const icon_url = `${this.#urlIconStart}/${icon}@2x.png`;
      await curl(icon_url, icon_path).catch(console.error);
    }
  }

  async #fetchCurrentWeather() {
    const url = `${this.#urlStart}\
?appid=${this.#appId}\
&q=${this.#options.city}\
&units=${this.#options.units}\
&lang=${this.#options.lang}`;

    await curl(url, this.#weatherJsonPath).catch(console.error);

    await this.#readCurrentWeather();
    if (!this.#currentWeather) return;

    await this.#fetchIcon();
    this.#update();
  }

  /**
   * Reads in data from the weather json file
  */
  async readCurrentWeather() {
    await this.#readCurrentWeather();
    this.#update();
  }

  /**
   * Makes an API call to get the current weather if the file is old enough
   * @param [force=false] - skip the check and force an api call
  */
  async fetchCurrentWeather(force: boolean = false) {
    const lastUpdated = Number(await Utils.execAsync(`date -r ${this.#weatherJsonPath} +%s`).catch(() => null));
    const now         = +new Date / 1000;

    if (!force && lastUpdated && now - lastUpdated < 3600) {
      await this.readCurrentWeather();
      if (this.#currentWeather) return
    }

    this.#fetchCurrentWeather();
  }

  /**
   * Reloads weather options from the Config service
  */
  reloadOptions() {
    this.#options = {
      city: Config.options['weather_city'],
      units: Config.options['weather_units'],
      lang: Config.options['weather_lang'],
    };
  }

  getFullIconPath(icon: string) {
    return `${this.#weatherIconsPath}/${icon}.png`;
  }
}

const service = new Weather;
export default service;
