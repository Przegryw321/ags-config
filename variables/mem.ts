import { Variable } from "astal";

export const MemPercentage = Variable(0)
  .poll(5000, "free", (out, _prev) => {
    const values = out.split('\n')[1].split('     ')
    const used = Number(values[2])
    const total = Number(values[1])
    return Math.round(used / total * 1000) / 10
  })
