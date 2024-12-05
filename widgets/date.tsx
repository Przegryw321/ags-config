import GLib from "gi://GLib"
import { Variable, bind } from "astal"
import { WidgetProps } from "../utils/widget"

const Now = Variable(GLib.DateTime.new_now_local()).poll(1000, _ => GLib.DateTime.new_now_local())

export function now_format(format: string): string {
  return Now.get().format(format) ?? ''
}

export function pl_to_eng_weekday(weekday: string): string | null {
  switch (weekday.slice(0, 3)) {
    case "pon": return "monday"
    case "wto": return "tuesday"
    case "śro": return "wednesday"
    case "czw": return "thursday"
    case "pią": return "friday"
    case "sob": return "saturday"
    case "nie": return "sunday"
    default: return null
  }
}

export function pl_mon_to_eng_season(month: string): string | null {
  switch (month.slice(0, 3)) {
    case "gru":
    case "sty":
    case "lut":
      return "winter"
    case "mar":
    case "kwi":
    case "maj":
      return "spring"
    case "cze":
    case "lip":
    case "sie":
      return "summer"
    case "wrz":
    case "paź":
    case "lis":
      return "autumn"
    default: return null
  }
}

type DateTimeLabelProps = WidgetProps & {
  format: string
}
export function DateTimeLabel({ format, ...props }: DateTimeLabelProps): JSX.Element {
  return <label label={bind(Now).as(now => now.format(format) ?? '')} {...props}/>
}

type DateTimeClassLabelProps = WidgetProps & {
  format: string
  classFunc: (label: string) => string | null | undefined
}
export function DateTimeClassLabel({ format, classFunc, ...props }: DateTimeClassLabelProps): JSX.Element {
  const label = now_format(format)
  const ignoreNull = (label: string) => classFunc(label) ?? ''
  return <label label={label}
                className={ignoreNull(label)}
                setup={(self) => self.hook(Now, self => {
                  self.label = now_format(format)
                  self.className = ignoreNull(self.label)
                })} {...props}/>
}

type ClockProps = WidgetProps
export function Clock(props: ClockProps): JSX.Element {
  return <DateTimeLabel format="%H:%M" {...props}/>
}

type ColorDateProps = WidgetProps
export function ColorDate({ className, ...props }: ColorDateProps): JSX.Element {
  return <box {...props}>
    <DateTimeClassLabel format="%A" classFunc={pl_to_eng_weekday}/>
    <DateTimeLabel      format=", %d "/>
    <DateTimeClassLabel format="%B" classFunc={pl_mon_to_eng_season}/>
  </box>
}
