import GLib from 'gi://GLib';
import { TempClass } from '../widgets/weather';
import Weather, { Forecast } from '../services/weather';
import { Compass } from '../widgets/compass';
import { WeekdayClass } from '../widgets/bartime';

const TempLabel = (weather: Forecast, { ...props } = {}) => Widget.Label({
  ...props,
  className: TempClass(weather.temp),
  label: `${Math.round(weather.temp)}°C`,
});

const CurrentWeatherMain = (weather: Forecast) => Widget.Box({
  className: 'cw-main',
  vertical: true,
  hpack: 'end',
  vexpand: true,
  children: [
    Widget.Label({
      className: 'name',
      label: weather.description,
      hpack: 'end',
    }),
    TempLabel(weather, { hpack: 'end' }),
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

const CurrentWeatherInfo = (weather: Forecast) => Widget.Box({
  className: 'cw-info',
  vertical: true,
  hpack: 'end',
  vpack: 'end',
  children: [
    Info('Zachmurzenie', Widget.Label({
      className: 'clouds',
      label: `${weather.clouds}%`,
      hpack: 'end',
    })),
    Info('Wilgotność', Widget.Label({
      className: 'humidity',
      label: `${weather.humidity}%`,
      hpack: 'end',
    })),
    Info('Odczuwalna', Widget.Label({
      className: TempClass(weather.feels_like),
      label: `${Math.round(weather.feels_like)}°C`,
      hpack: 'end',
    })),
    Info('Ciśnienie', Widget.Label({
      className: 'pressure',
      label: `${weather.pressure}mbar`,
      hpack: 'end',
    })),
  ],
});

const WindSpeed = (weather: Forecast) => Widget.Box({
  children: [
    Widget.Label({
      className: 'icon',
      label: '\uefd8',
      vpack: 'end',
    }),
    Widget.Label({
      className: 'label',
      label: `${weather.wind.speed}m/s`,
      vpack: 'end',
    })
  ],
})

const Wind = (weather: Forecast) => Widget.Box({
  className: 'cw-wind',
  vertical: true,
  hpack: 'start',
  vpack: 'end',
  children: [
    Compass({
      className: 'cw-direction',
      hpack: 'center',
      vpack: 'start',
      setup: (self: any) => {
        self.attribute.value = weather.wind.deg;
      }
    }),
    WindSpeed(weather),
  ],
});

const TimestampToTime = (timestamp: number | undefined) => GLib.DateTime.new_from_unix_local(timestamp ?? 0).format('%H:%M') ?? 'null';
const Sunset = (weather: Forecast) => Widget.Box({
  className: 'cw-sunset',
  vertical: true,
  hpack: 'start',
  vpack: 'end',
  children: [
    Info('Wschód', Widget.Label({
      label: TimestampToTime(weather.sunrise),
      hpack: 'end',
    })),
    Info('Zachód', Widget.Label({
      label: TimestampToTime(weather.sunset),
      hpack: 'end',
    })),
  ],
});

const Timezone = (weather: Forecast) => Widget.Box({
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
      label: `UTC${weather.timezone >= 0 ? '+' : ''}${weather.timezone / 3600}`,
    }),
  ],
});

const ColorDate = (day: string | null, weekday: string | null, month: string | null, { ...props } = {}) => Widget.Box({
  ...props,
  visible: false,
  children: [
    Widget.Label({
      className: WeekdayClass(weekday ?? ''),
      label: day,
    }),
    Widget.Label('.'),
    Widget.Label({
      className: (() => {
        switch (month) {
          case '01': case '02': case '12':
            return 'winter';
          case '03': case '04': case '05':
            return 'spring';
          case '06': case '07': case '08':
            return 'summer';
          case '09': case '10': case '11':
            return 'autumn';
          default: return '';
        }
      })(),
      label: month,
    })
  ]
});

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
      Wind(weather),
      Sunset(weather),
    ],
  });
};

const CurrentWeatherRight = (weather: Forecast) => Widget.Box({
  vertical: true,
  children: [
    CurrentWeatherMain(weather),
    CurrentWeatherInfo(weather),
    Timezone(weather),
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

const WeatherButton = (weather: Forecast, stack: any, type: 'date' | 'time') => {
  const date = GLib.DateTime.new_from_unix_local(weather.dt);

  const widget = type === 'date' ?
    ColorDate(date.format('%d'), date.format('%a'), date.format('%m'), { hpack: 'center' }) :
    Widget.Label({
      className: 'time',
      label: date.format('%H:%M'),
    });

  return Widget.Button({
    className: 'weather-button',
    tooltipText: weather.description,
    child: Widget.Box({
      vertical: true,
      children: [
        Widget.Icon({
          className: 'icon',
          icon: weather.icon_path,
        }),
        TempLabel(weather, { hpack: 'center' }),
        widget,
      ]
    }),

    onClicked: () => {
      const current_dt = Number(stack.shown);
      if (current_dt > weather.dt) {
        stack.transition = 'slide_right';
      } else {
        stack.transition = 'slide_left';
      }
      stack.shown = weather.dt.toString();
    },
  });
};

/*
 * Convert Forecast[] to a more convienient 2D array for the widget.
 * The first element is current weather + 4 future forecasts.
 * The rest is a collection of forecasts for a given day.
 * @param forecasts - array of forecasts
*/
const forecasts_to_days = (forecasts: Forecast[]) => {
  let days: Forecast[][] = [];
  let day_arr: Forecast[] = [Weather.current as any];

  for (let i = 0; i < 4; ++i) {
    day_arr.push(forecasts[i]);
  }
  days.push(day_arr);
  day_arr = [];

  let day = GLib.DateTime.new_from_unix_local(Weather.current.dt ?? 0).get_day_of_year() + 1;

  for (let i = 4; i < forecasts.length; ++i) {
    const fc_day = GLib.DateTime.new_from_unix_local(forecasts[i].dt).get_day_of_year();
    if (fc_day === day) {
      day_arr.push(forecasts[i]);
    } else {
      days.push(day_arr);
      day_arr = [];
      day = fc_day;
    }
  }

  days.push(day_arr);

  return days;
};

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

  setup: self => self.hook(Weather.current, self => {
    const times = self.children[0];
    const dates = self.children[1];

    times.children.forEach(child => child.destroy());
    dates.children.forEach(child => child.destroy());
    stack.get_children().forEach((child: any) => child.destroy());

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
