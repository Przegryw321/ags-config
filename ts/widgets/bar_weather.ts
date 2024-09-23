import Weather, { CurrentWeather } from '../services/weather';

export const WeatherIcon = ({ ...props } = {}) => Widget.Icon({
  ...props,
  icon: Weather.bind('icon'),
});

export const WeatherName = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.bind('description')
});

export const TempIcon = ({ style, ...props }) => Widget.Box({
  ...props,

  children: [
    Widget.Label({
      className: 'icon',
      label: '\ue1ff',
    }),
    Widget.Label({
      className: 'label',
    }),
  ],

  setup: self => self.hook(Weather, (self, _weather: CurrentWeather | null) => {
    const temp = Math.round(Weather.temp ?? -273);
    self.children[1].label = `${temp}°C`;
    self.class_name = style(temp);
  })
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
    TempIcon({
      style: (temp: number) => {
        if (temp > 25) return 'hot';
        if (temp > 15) return 'warm';
        if (temp > 0) return 'cold';
        return 'freezing';
      }
    }),
    WindSpeedIcon({ className: 'wind' }),
    HumidityIcon({ className: 'humidity' }),
  ],
});

export const WeatherSummaryInfo = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    WeatherName({
      className: 'name',
      //hpack: 'start',
    }),
    WeatherSummaryNumbers({
      spacing: 10,
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
