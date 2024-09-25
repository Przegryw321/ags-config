import GLib from 'gi://GLib';
import { CloudsLabel, FeelsLikeLabel, HumidityLabel, PressureLabel, TempClass, TempLabel, WeatherCity, WeatherIcon, WeatherName, WindDirection, WindSpeedIcon } from 'ts/widgets/weather';
import Weather from '../services/weather';

const CurrentWeatherMain = () => Widget.Box({
  className: 'cw-top-left',
  vertical: true,
  hpack: 'end',
  vexpand: true,
  children: [
    WeatherName({
      className: 'name',
      hpack: 'end',
    }),
    TempLabel({
      className: TempClass(),
      hpack: 'end',
    }),
  ],
});

const Info = (label: string, child: any) => Widget.Box({
  children: [
    Widget.Label({
      className: 'cw-info-label',
      label,
      hpack: 'start',
      hexpand: true,
    }),
    child,
  ],
});

const CurrentWeatherInfo = () => Widget.Box({
  className: 'cw-info',
  vertical: true,
  hpack: 'end',
  vpack: 'end',
  children: [
    Info('Zachmurzenie', CloudsLabel({
      className: 'clouds',
      hpack: 'end',
    })),
    Info('Wilgotność', HumidityLabel({
      className: 'humidity',
      hpack: 'end',
    })),
    Info('Odczuwalna', FeelsLikeLabel({
      className: TempClass('feels_like'),
      hpack: 'end',
    })),
    Info('Ciśnienie', PressureLabel({
      className: 'pressure',
      hpack: 'end',
    })),
  ],
});

const Wind = () => Widget.Box({
  className: 'cw-wind',
  vertical: true,
  hpack: 'start',
  vpack: 'end',
  children: [
    WindDirection({
      className: 'cw-direction',
      hpack: 'center',
      vpack: 'start',
    }),
    WindSpeedIcon({ className: 'speed' }),
  ],
});

const TimestampToTime = (timestamp: number | undefined) => GLib.DateTime.new_from_unix_local(timestamp ?? 0).format('%H:%M') ?? 'null';
const Sunset = () => Widget.Box({
  className: 'cw-sunset',
  vertical: true,
  hpack: 'start',
  vpack: 'end',
  children: [
    Info('Wschód', Widget.Label({
      label: Weather.current.bind('sunrise').as(TimestampToTime),
      hpack: 'end',
    })),
    Info('Zachód', Widget.Label({
      label: Weather.current.bind('sunset').as(TimestampToTime),
      hpack: 'end',
    })),
  ],
});

const Timezone = () => Widget.Box({
  className: 'cw-timezone',
  hpack: 'end',
  vpack: 'end',
  children: [
    Widget.Label({
      label: 'Strefa czasowa',
      hpack: 'start',
      hexpand: true,
    }),
    Widget.Label({
      className: 'timezone',
      hpack: 'end',
      label: Weather.current.bind('timezone').as(shift => {
        if (!shift) return 'null';
        return `UTC${shift >= 0 ? '+' : ''}${shift / 3600}`;
      }),
    }),
  ],
});

const CurrentWeatherLeft = () => Widget.Box({
  vertical: true,
  children: [
    WeatherCity({
      className: 'cw-city',
      hpack: 'start',
      vpack: 'start',
      vexpand: true,
    }),
    Wind(),
    Sunset(),
  ],
});

const CurrentWeatherRight = () => Widget.Box({
  vertical: true,
  children: [
    CurrentWeatherMain(),
    CurrentWeatherInfo(),
    Timezone(),
  ],
});

const CurrentWeather = () => Widget.Box({
  className: 'current-weather',
  children: [
    CurrentWeatherLeft(),
    CurrentWeatherRight(),
  ],
});

const WeatherLayout = () => Widget.Box({
  className: 'weather-layout',
  children: [
    CurrentWeather(),
  ],
});

export const WeatherWindow = async (monitor: number = 0) => Widget.Window({
  monitor,
  name: 'weather',
  anchor: ['top'],
  margins: [20],
  exclusivity: 'normal',
  layer: 'overlay',

  child: WeatherLayout(),
});
