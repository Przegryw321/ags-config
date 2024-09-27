import GLib from 'gi://GLib';
import Weather, { Forecast } from '../services/weather';
import { ColorDate } from '../widgets/bartime';
import { WeatherMain, WeatherInfo, Wind, Sunset, Timezone, WeatherButton } from '../widgets/forecast';
import { forecasts_to_days } from '../lib/weather_utils';

const CurrentWeatherLeft = (weather: Forecast, now: boolean = false) => {
  const date = GLib.DateTime.new_from_unix_local(weather.dt);
  const date_label = () => ColorDate(date.format('%d'), date.format('%a'), date.format('%m'), {
    className: 'cw-date',
    hpack: 'start',
    vpack: 'start',
  });
  const time_label = () => Widget.Label({
    label: date.format('%H:%M'),
    className: 'cw-time time',
    hpack: 'start',
    vpack: 'start',
  });
  const time_box = () => Widget.Box({
    spacing: 10,
    children: [
      date_label(),
      time_label(),
    ]
  })

  return Widget.Box({
    vertical: true,
    children: [
      Widget.Label({
        className: 'cw-city',
        hpack: 'start',
        vpack: 'start',
        vexpand: true,
        label: weather.city,
      }),
      ... !now ? [time_box()] : [Widget.Label({
        className: 'cw-date',
        label: 'Teraz',
        hpack: 'start',
        vpack: 'start',
      })],
      Wind(weather, {
        hpack: 'start',
      }),
      Sunset(weather, {
        hpack: 'start',
      }),
    ],
  });
};

const CurrentWeatherRight = (weather: Forecast) => Widget.Box({
  vertical: true,
  children: [
    WeatherMain(weather, {
      vexpand: true,
    }),
    WeatherInfo(weather, {
      hpack: 'end',
      vpack: 'end',
    }),
    Timezone(weather, {
      hpack: 'end',
      vpack: 'end',
    }),
  ],
});

const CurrentWeather = (weather: Forecast, now: boolean = false) => Widget.Box({
  className: 'current-weather',
  children: [
    CurrentWeatherLeft(weather, now),
    CurrentWeatherRight(weather),
  ],
});

const WeatherStack = () => Widget.Stack({
  transition: 'slide_left',
  transitionDuration: 800,
  children: {}, // GC, don't remove
  setup: self => self.hook(App, (self, _window) => {
    if (!App.getWindow('weather')?.visible) {
      const child = self.get_child_by_name(Weather.current.dt?.toString() ?? null);
      if (child) self.set_visible_child(child);
    }
  }, 'window-toggled')
});

const WeatherButtons = () => Widget.Box({
  className: 'weather-buttons',
});

const ForecastSelector = (stack: any) => Widget.Box({
  className: 'weather-forecast',
  vertical: true,
  vpack: 'center',

  children: [
    WeatherButtons(),
    WeatherButtons(),
  ],

  setup: self => self.hook(Weather.current, async self => {
    const times = self.children[0];
    const dates = self.children[1];

    times.children.forEach(child => child.destroy());
    dates.children.forEach(child => child.destroy());
    stack.children = {};

    const days = forecasts_to_days(Weather.forecast.forecasts ?? []);
  
    days[0].forEach((forecast: Forecast, index: number) => {
      stack.add_named(CurrentWeather(forecast, index === 0), forecast.dt.toString());
      times.add(WeatherButton(forecast, stack, 'time'));
    });

    for (let i = 1; i < days.length; ++i) {
      if (days[i].length === 0) continue;
      const max = days[i].reduce((prev, curr) => {
        return (prev.temp > curr.temp) ? prev : curr;
      });
      stack.add_named(CurrentWeather(max), max.dt.toString());
      dates.add(WeatherButton(max, stack, 'date'));
    }

    self.show_all();
  }),
});

const WeatherLayout = () => Widget.Box({
  className: 'weather-layout',
  children: [
    WeatherStack(),
  ],
  setup: self => {
    const stack = self.children[0];
    self.add(ForecastSelector(stack));
  }
});

export const WeatherWindow = async (monitor: number = 0) => Widget.Window({
  monitor,
  visible: false,
  name: 'weather',
  anchor: ['top'],
  margins: [20],
  exclusivity: 'normal',
  layer: 'overlay',

  child: WeatherLayout(),
});
