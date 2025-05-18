export interface RGBA {
  red: number
  green: number
  blue: number
  alpha: number
}

export function clamp(x: number, min: number, max: number) {
  return Math.min(max, Math.max(min, x))
}

export function interpolate2(a: number, b: number, value: number): number {
  return (1 - value) * a + (value * b)
}

export function interpolate3(a: number, b: number, c: number, value: number): number {
  value = clamp(value, 0, 1)
  //console.log('value:', value)
  //console.log('abc', a, b, c)
  const pa = Math.max(0, 0.5 - value) * 2
  const pb = (value < 0.5 ? value : (1 - value)) * 2
  const pc = Math.max(0, value - 0.5) * 2
  return (pa * a) + (pb * b) + (pc * c)
}

export function gradient2(c1: RGBA, c2: RGBA, value: number): RGBA {
  return {
    red: interpolate2(c1.red, c2.red, value),
    green: interpolate2(c1.green, c2.green, value),
    blue: interpolate2(c1.blue, c2.blue, value),
    alpha: interpolate2(c1.alpha, c2.alpha, value)
  }
}

export function gradient3(c1: RGBA, c2: RGBA, c3: RGBA, value: number): RGBA {
  return {
    red: interpolate3(c1.red, c2.red, c3.red, value),
    green: interpolate3(c1.green, c2.green, c3.green, value),
    blue: interpolate3(c1.blue, c2.blue, c3.blue, value),
    alpha: interpolate3(c1.alpha, c2.alpha, c3.alpha, value),
  }
}
