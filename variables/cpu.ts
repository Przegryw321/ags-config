import { monitorFile, readFileAsync, Variable } from "astal"

export const LoadAvg = Variable(0)
  .poll(5000, "cat /proc/loadavg", (out, _prev) => Number(out.split(' ')[0]))

export const CpuCount = Variable(0)
  .poll(15000, "nproc", (out, _prev) => Number(out))
