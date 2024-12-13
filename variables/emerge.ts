import { Variable, monitorFile, readFileAsync, bind } from "astal"
import Gio from "gi://Gio"

export const EMERGE_LOG = "/var/log/emerge.log"

export interface EmergeStatus {
    current: number
    count: number
    name: string
}

export const Emerge: Variable<EmergeStatus | null> = Variable(null)

async function check_log(path: string, event?: Gio.FileMonitorEvent): Promise<void> {
    if (event !== undefined && event !== Gio.FileMonitorEvent.CHANGED) return

    return readFileAsync(path).then(contents => {
        const last  = contents.slice(contents.lastIndexOf('\n', contents.length - 2))
        const words = last.split(' ')

        switch (words[2]) {
            case '===':
                const current    = Number(words[3]?.slice(1))
                const count      = Number(words[5]?.slice(0, -1))
                const packageRaw = words[words.length - 1]
                const name       = packageRaw.slice(1, packageRaw.indexOf(':'))
                Emerge.set({ current, count, name })
                break
            case '***':
                Emerge.set(null)
                break
        }

    }).catch(printerr)
}

check_log(EMERGE_LOG)
monitorFile(EMERGE_LOG, check_log)

export default bind(Emerge)
