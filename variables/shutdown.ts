import { monitorFile, readFileAsync } from "astal/file"
import { Variable } from "astal"

export const SHUTDOWN_SCHEDULE = "/run/systemd/shutdown/scheduled"

const variable: Variable<Date | null> = Variable(null)

monitorFile(SHUTDOWN_SCHEDULE, (file, _event) => {
  readFileAsync(SHUTDOWN_SCHEDULE).then(contents => {
    const equals    = contents.indexOf('=')
    const newline   = contents.indexOf('\n')
    const timestamp = Number(contents.slice(equals + 1, newline))
    const date      = new Date(timestamp / 1000)
    variable.set(date)
  }).catch(() => {
      variable.set(null)
    })
})

export default variable
