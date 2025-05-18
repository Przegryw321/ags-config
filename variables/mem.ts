import { readFileAsync, Variable } from "astal";

export const MemPercentage = Variable(0)
  .poll(5000, ["sh", "-c", "free | head -n-1 | tail -n1 | xargs"], (out, _prev) => {
    const values = out.split(' ')
    const total = Number(values[1])
    const used = Number(values[2])
    return Math.round(used / total * 1000) / 10
  })
