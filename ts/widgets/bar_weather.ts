import { TempIcon, WindSpeedIcon, HumidityIcon, WeatherName, WeatherIcon, TempClass } from './weather';
import Weather from '../services/weather';

export const WeatherSummaryNumbers = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    TempIcon({ className: Weather.current.bind('temp').as(TempClass) }),
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
