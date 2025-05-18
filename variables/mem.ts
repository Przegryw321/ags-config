import { readFileAsync, Variable } from "astal";

export const MemPercentage = Variable(0)
  .poll(5000, async () => {
    return await readFileAsync('/proc/meminfo').then(contents => {
      const lines = contents.split('\n')
      const totalLine = lines[0].split(' ')
      const total = Number(totalLine[totalLine.length - 2])
      const availableLine = lines[2].split(' ')
      const available = Number(availableLine[availableLine.length - 2])
      const used = total - available
      return Math.round(used / total * 1000) / 10
    })
  })
