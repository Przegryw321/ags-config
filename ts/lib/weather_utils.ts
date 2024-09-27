import GLib from 'gi://GLib';
import Weather, { Forecast } from '../services/weather';

/*
 * Convert Forecast[] to a more convienient 2D array for the widget.
 * The first element is current weather + 4 future forecasts.
 * The rest is a collection of forecasts for a given day.
 * @param forecasts - array of forecasts
*/
export const forecasts_to_days = (forecasts: Forecast[]) => {
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
