import GLib from 'gi://GLib';
import { Forecast } from '../services/weather';
import { TempClass } from '../widgets/weather';
import { Compass } from '../widgets/compass';
import { ColorDate } from './bartime';
import { timestamp_to_time } from '../lib/utils';

export const TempLabel = (weather: Forecast, { ...props } = {}) => Widget.Label({
  ...props,
  className: TempClass(weather.temp),
  label: `${Math.round(weather.temp)}°C`,
});

export const WeatherMain = (weather: Forecast, { ...props } = {}) => Widget.Box({
  ...props,
  className: 'cw-main',
  vertical: true,
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

export const WeatherInfo = (weather: Forecast, { ...props } = {}) => Widget.Box({
  ...props,
  className: 'cw-info',
  vertical: true,
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

export const WindSpeed = (weather: Forecast, { ...props } = {}) => Widget.Box({
  ...props,
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

export const Wind = (weather: Forecast, { ...props } = {}) => Widget.Box({
  ...props,
  className: 'cw-wind',
  vertical: true,
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

export const Sunset = (weather: Forecast, { ...props } = {}) => Widget.Box({
  ...props,
  className: 'cw-sunset',
  vertical: true,
  children: [
    Info('Wschód', Widget.Label({
      label: timestamp_to_time(weather.sunrise),
      hpack: 'end',
    })),
    Info('Zachód', Widget.Label({
      label: timestamp_to_time(weather.sunset),
      hpack: 'end',
    })),
  ],
});

export const Timezone = (weather: Forecast, { ...props } = {}) => Widget.Box({
  ...props,
  className: 'cw-timezone',
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

export const WeatherButton = (weather: Forecast, stack: any, type: 'date' | 'time') => {
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

