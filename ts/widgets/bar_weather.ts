import Weather, { CurrentWeather } from '../services/weather';

export const WeatherIcon = ({ ...props } = {}) => Widget.Icon({
  ...props,
  icon: Weather.bind('icon'),
});

export const WeatherName = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.bind('description')
});

export const TempIcon = ({ ...props } = {}) => Widget.Box({
  ...props,
  className: Weather.bind('temp').as(temp => {
    if (temp === null) return '';
    if (temp >= 25) return 'hot';
    if (temp >= 15) return 'warm';
    if (temp >  0) return 'cold';
    return 'freezing';
  }),

  children: [
    Widget.Label({
      className: 'icon',
      label: '\ue1ff',
    }),
    Widget.Label({
      className: 'label',
      label: Weather.bind('temp').as(t => `${Math.round(t ?? -273)}°C`),
    }),
  ],
});

export const WindSpeedIcon = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    Widget.Label({
      className: 'icon',
      label: '\uefd8',
    }),
    Widget.Label({
      className: 'label',
      label: Weather.bind('wind_speed').as(s => `${s}m/s`),
    }),
  ],
});

export const HumidityIcon = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    Widget.Label({
      className: 'icon',
      label: '\ue798',
    }),
    Widget.Label({
      className: 'label',
      label: Weather.bind('humidity').as(h => `${h}%`),
    }),
  ],
});

export const WeatherSummaryNumbers = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    TempIcon(),
    WindSpeedIcon({ className: 'wind' }),
    HumidityIcon({ className: 'humidity' }),
  ],
});

export const WeatherSummaryInfo = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    WeatherName({
      className: 'name',
    }),
    WeatherSummaryNumbers({
      spacing: 10,
      hpack: 'center',
    }),
  ],
});

export const BarWeather = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    WeatherIcon({ className: 'bar-weather-icon' }),
    WeatherSummaryInfo({
      vertical: true,
      vpack: 'center',
    }),
  ],
})
