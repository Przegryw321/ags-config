import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import { curl, file_age } from '../lib/utils';

import Config from './config';

export interface WeatherOptions {
  city: string,
  units: string,
  lang: string,
}

export interface Coord {
  lon: number,
  lat: number,
}

export interface WeatherInfo {
  id: number,
  main: string,
  description: string,
  icon: string,
}

export interface WeatherData {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
  sea_level: number,
  grnd_level: number,
}

export interface Wind {
  speed: number,
  deg: number,
  gust: number,
}

export interface Rain1h {
  '1h': number,
}

export interface Rain3h {
  '3h': number,
}

export interface Clouds {
  all: number,
}

export interface Sys {
  type: number,
  id: number,
  country: string,
  sunrise: number,
  sunset: number,
}

export interface SysForecast {
  pod: string,
}

export interface WeatherResponse {
  coord: Coord,
  weather: WeatherInfo[],
  base: string,
  main:WeatherData,
  visibility: number,
  wind: Wind,
  rain: Rain1h,
  clouds: Clouds,
  dt: number,
  sys: Sys,
  timezone: number,
  id: number,
  name: string,
  cod: number,
}

export interface ForecastRaw {
  dt: number,
  main: WeatherData,
  weather: WeatherInfo[],
  clouds: Clouds,
  wind: Wind,
  visibility: number,
  pop: number,
  rain: Rain3h,
  sys: SysForecast,
  dt_txt: string,
}

export interface City {
  id: number,
  name: string,
  coord: Coord,
  country: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number,
}

export interface ForecastResponse {
  cod: number,
  message: number,
  cnt: number,
  list: ForecastRaw[],
  city: City,
}

export interface Forecast {
  dt: number,
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
  sea_level: number,
  ground_level: number,
  id: number,
  main: string,
  description: string,
  icon: string,
  clouds: number,
  wind: Wind,
  visibility: number,
  pop: number,
  rain3h: number | undefined,
  pod: string,
}

interface WeatherParams {
  appId: string,
  path: string,
  icons: string,
  options: WeatherOptions,
}

function isWeatherResponse(object: any): object is WeatherResponse {
  return 'weather' in object;
}

function isForecastResponse(object: any): object is ForecastResponse {
  return 'list' in object;
}

/*
 * Convert a ForecastRaw object to a Forecast
 * @param forecast - the ForecastRaw object
*/
function toForecast(forecast: ForecastRaw): Forecast {
  return {
    dt: forecast.dt,
    temp: forecast.main.temp,
    feels_like: forecast.main.feels_like,
    temp_min: forecast.main.temp_min,
    temp_max: forecast.main.temp_max,
    pressure: forecast.main.pressure,
    humidity: forecast.main.humidity,
    sea_level: forecast.main.sea_level,
    ground_level: forecast.main.grnd_level,
    id: forecast.weather[0].id,
    main: forecast.weather[0].main,
    description: forecast.weather[0].description,
    icon: forecast.weather[0].icon,
    clouds: forecast.clouds.all,
    wind: forecast.wind,
    visibility: forecast.visibility,
    pop: forecast.pop,
    rain3h: forecast.rain?.['3h'],
    pod: forecast.sys.pod,
  };
}

/*
 * Returns the url to the icon.
 * @param icon - name of the icon
*/
function icon_url(icon: string | undefined) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

/*
 * Download the icon if it doesn't exist.
 * @param icon - name of the icon
 * @param path - path to the icon on the filesystem
*/
async function downloadIcon(icon: string | undefined, path: string) {
  const file = Gio.File.new_for_path(path);

  if (!file.query_exists(null)) {
    return curl(icon_url(icon), path);
  }
}

class CurrentWeather extends Service {
  static {
    Service.register(
      this,
      {
      },
      {
        'main':         ['string', 'r'],
        'description':  ['string', 'r'],
        'icon':         ['string', 'r'],
        'temp':         ['float',  'r'],
        'feels-like':   ['float',  'r'],
        'temp-min':     ['float',  'r'],
        'temp-max':     ['float',  'r'],
        'pressure':     ['int',    'r'],
        'humidity':     ['int',    'r'],
        'sea-level':    ['int',    'r'],
        'ground-level': ['int',    'r'],
        'visibility':   ['int',    'r'],
        'wind-speed':   ['float',  'r'],
        'wind-deg':     ['int',    'r'],
        'wind-gust':    ['float',  'r'],
        'rain1h':       ['float',  'r'],
        'clouds':       ['int',    'r'],
        'dt':           ['double', 'r'],
        'sunrise':      ['double', 'r'],
        'sunset':       ['double', 'r'],
        'timezone':     ['int',    'r'],
        'name':         ['string', 'r'],
      },
    );
  }

  // weather data
  #response: WeatherResponse | null = null;

  readonly #appId: string;

  // info to pass to the api
  options: WeatherOptions;
  #path: string;
  #icons: string;

  get main()         { return this.#response?.weather[0].main; }
  get description()  { return this.#response?.weather[0].description; }
  get icon()         { return this.#response?.weather[0].icon; }
  get icon_path()    { return `${this.#icons}/${this.#response?.weather[0].icon}.png`; }
  get temp()         { return this.#response?.main.temp; }
  get feels_like()   { return this.#response?.main.feels_like; }
  get temp_min()     { return this.#response?.main.temp_min; }
  get temp_max()     { return this.#response?.main.temp_min; }
  get pressure()     { return this.#response?.main.pressure}
  get humidity()     { return this.#response?.main.humidity; }
  get sea_level()    { return this.#response?.main.sea_level; }
  get ground_level() { return this.#response?.main.grnd_level; }
  get visibility()   { return this.#response?.visibility; }
  get wind_speed()   { return this.#response?.wind.speed; }
  get wind_deg()     { return this.#response?.wind.deg; }
  get wind_gust()    { return this.#response?.wind.gust; }
  get rain1h()       { return this.#response?.rain['1h']; }
  get clouds()       { return this.#response?.clouds.all; }
  get dt()           { return this.#response?.dt; }
  get sunrise()      { return this.#response?.sys.sunrise; }
  get sunset()       { return this.#response?.sys.sunset; }
  get timezone()     { return this.#response?.timezone; }
  get name()         { return this.#response?.name; }

  get weather_url() {
    return `https://api.openweathermap.org/data/2.5/weather\
?appid=${this.#appId}\
&q=${this.options.city}\
&units=${this.options.units}\
&lang=${this.options.lang}`;
  }


  get path()      { return this.#path; }

  constructor(params: WeatherParams) {
    super();
    this.#appId  = params.appId;
    this.#path   = `${params.path}/current_weather.json`;
    this.#icons  = params.icons;
    this.options = params.options;

    this.checkWeather();
    Utils.timeout(900000, () => this.checkWeather());
  }

  /**
   * This function checks if the file is outdated and downloads a new one if
   * it is. It will reread the data from it regardless.
   * @param [force=false] - Force the download
  */
  async checkWeather(force: boolean = false) {
    const age  = file_age(this.#path);
    const hour = 3600000000;

    if (force || !age || age > hour) {
      await this.#downloadWeather().catch(console.error);
    }

    await this.#readWeather().catch(console.error);
    await downloadIcon(this.icon, this.icon_path).catch(console.error);

    this.#update();
  }

  async #downloadWeather() {
    return curl(this.weather_url, this.#path);
  }

  async #readWeather() {
    const json = JSON.parse(await Utils.readFileAsync(this.#path));

    if (isWeatherResponse(json)) {
      this.#response = json;
    } else {
      this.#response = null;
    }
  }

  #update() {
    this.changed('main');
    this.changed('description');
    this.changed('icon');
    this.changed('temp');
    this.changed('feels-like');
    this.changed('temp_min');
    this.changed('temp_max');
    this.changed('pressure');
    this.changed('humidity');
    this.changed('sea-level');
    this.changed('ground-level');
    this.changed('visibility');
    this.changed('wind-speed');
    this.changed('wind-deg');
    this.changed('wind-gust');
    this.changed('rain1h');
    this.changed('clouds');
    this.changed('dt');
    this.changed('sunrise');
    this.changed('sunset');
    this.changed('timezone');
    this.changed('name');
    this.emit('changed');
  }
}

class WeatherForecast extends Service {
  static {
    Service.register(this, {},
      {
        'forecast': ['jsobject', 'r'],
      },
    );
  }

  #forecast: Forecast[] | null = null;

  readonly #appId: string;

  options: WeatherOptions;
  #path: string;
  #icons: string;

  get forecast() { return this.#forecast; }

  get forecast_url() {
    return `https://api.openweathermap.org/data/2.5/forecast\
?appid=${this.#appId}\
&q=${this.options.city}\
&units=${this.options.units}\
&lang=${this.options.lang}`;
  }

  constructor(params: WeatherParams) {
    super();
    this.#appId  = params.appId;
    this.#path   = `${params.path}/forecast.json`;
    this.#icons  = params.icons;
    this.options = params.options;

    this.checkForecast();
    Utils.timeout(900000, () => this.checkForecast());
  }

  /**
   * This function checks if the file is outdated and downloads a new one if
   * it is. It will reread the data from it regardless.
   * @param [force=false] - Force the download
  */
  async checkForecast(force: boolean = false) {
    const age   = file_age(this.#path);
    const hour3 = 10800000000;

    if (force || !age || age > hour3) {
      await this.#downloadForecast().catch(console.error);
    }

    await this.#readForecast().catch(console.error);
    await this.#downloadIcons().catch(console.error);

    this.changed('forecast');
    this.emit('changed');
  }

  async #downloadForecast() {
    return curl(this.forecast_url, this.#path);
  }

  async #readForecast() {
    const json = JSON.parse(await Utils.readFileAsync(this.#path));

    if (isForecastResponse(json)) {
      this.#forecast = json.list.map(toForecast);
    } else {
      this.#forecast = null;
    }
  }

  async #downloadIcons() {
    let promises: Promise<string | undefined>[] = [];
    this.#forecast?.forEach(forecast => {
      const icon = forecast.icon;
      const path = this.#iconPath(icon);
      promises.push(downloadIcon(icon, path));
    });
    return Promise.all(promises);
  }

  #iconPath(icon: string) {
    return `${this.#icons}/${icon}.png`;
  }
}

class Weather {
  #current: CurrentWeather;
  #forecast: WeatherForecast;

  readonly #appId: string;
  #options!: WeatherOptions;

  // where the service will download everything
  #weatherFilesPath = `${App.configDir}/weather`;
  #weatherIconsPath = `${this.#weatherFilesPath}/icons`;
  // where to look for the API key
  #keyPath = `${this.#weatherFilesPath}/key`;

  get current()  { return this.#current; }
  get forecast() { return this.#forecast; }

  constructor() {
    Config.add('weather_city', 'London');
    Config.add('weather_units', 'metric');
    Config.add('weather_lang', 'en');

    this.#appId = Utils.readFile(this.#keyPath).trim();
    this.#reloadOptions();

    const params: WeatherParams = {
      appId: this.#appId,
      path: this.#weatherFilesPath,
      icons: this.#weatherIconsPath,
      options: this.#options,
    };

    this.#current = new CurrentWeather(params);
    this.#forecast = new WeatherForecast(params);
  }

  #reloadOptions() {
    this.#options = {
      city: Config.options['weather_city'],
      units: Config.options['weather_units'],
      lang: Config.options['weather_lang'],
    };
  }

  reloadOptions() {
    this.#reloadOptions();
    this.#current.options  = this.#options;
    this.#forecast.options = this.#options;
  }
}

const service = new Weather;
export default service;
