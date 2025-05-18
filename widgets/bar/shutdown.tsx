import { interval } from "astal/time"
import { WidgetProps } from "../../utils/widget"
import Plural from "../../utils/plural"
import Shutdown from "../../variables/shutdown"

function cancel_timer(widget: any) {
  widget.timer?.cancel()
  widget.timer = undefined
}

export default function BarShutdown(props: WidgetProps) {
  return <label truncate visible={false} setup={(self) => self.hook(Shutdown, (self, date) => {
    if (!date) {
      cancel_timer(self)
      self.visible = false
      return
    }

    cancel_timer(self)
    self.visible = true
    self.timer = interval(1000, () => {
      const currentDate = new Date()
      const diff = date.valueOf() - currentDate.valueOf()

      let   leftover = diff / 1000
      const seconds  = Math.floor(leftover) % 60
      const minutes  = Math.floor(leftover /= 60) % 60
      const hours    = Math.floor(leftover /= 60)

      const s = `${seconds} ${Plural.seconds(seconds)}`
      const m = minutes > 0 ? `${minutes} ${Plural.minutes(minutes)} i `: ''
      let   h = hours   > 0 ? `${hours} ${Plural.hours(hours)} ` : ''

      if (h && !m) h += 'i '

      self.label = `System zamknie się za ${h}${m}${s}`
    })
  })} {...props}/>
}
