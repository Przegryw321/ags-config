import Weather from '../services/weather';
import { Compass } from './compass';

export const WeatherIcon = ({ ...props } = {}) => Widget.Icon({
  ...props,
  icon: Weather.current.bind('icon_path'),
});

export const TempClass = (property: 'temp' | 'feels_like' | 'temp_min' | 'temp_max' = 'temp') => Weather.current.bind(property).as(temp => {
  if (temp == null) return '';
  temp = Math.round(temp);
  if (temp >= 25) return 'hot';
  if (temp >= 15) return 'warm';
  if (temp >  0) return 'cold';
  return 'freezing';
});


export const TempLabel = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.current.bind('temp').as(t => `${Math.round(t ?? -273)}°C`),
});

export const TempIcon = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    Widget.Label({
      className: 'icon',
      label: '\ue1ff',
    }),
    TempLabel({ className: 'label' }),
  ],
});

export const WeatherName = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.current.bind('description').as(d => `${d}`),
});

export const WindSpeedLabel = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.current.bind('wind_speed').as(s => `${s}m/s`),
});

export const WindSpeedIcon = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    Widget.Label({
      className: 'icon',
      label: '\uefd8',
    }),
    WindSpeedLabel({ className: 'label' })
  ],
});

export const HumidityLabel = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.current.bind('humidity').as(h => `${h}%`),
});

export const HumidityIcon = ({ ...props } = {}) => Widget.Box({
  ...props,

  children: [
    Widget.Label({
      className: 'icon',
      label: '\ue798',
    }),
    HumidityLabel({ className: 'label' }),
  ],
});

export const WeatherCity = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.current.bind('name').as(n => `${n}`),
});

export const FeelsLikeLabel = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.current.bind('feels_like').as(f => `${Math.round(f ?? -273)}°C`),
});

export const PressureLabel = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.current.bind('pressure').as(p => `${p}mbar`),
});

export const CloudsLabel = ({ ...props } = {}) => Widget.Label({
  ...props,
  label: Weather.current.bind('clouds').as(c => `${c}%`),
});

export const WindDirection = ({ ...props } = {}) => Compass({
  ...props,
  setup: (self: any) => self.hook(Weather.current, (self: any) => {
    self.attribute.value = Weather.current.wind_deg;
    self.queue_draw();
  })
});
