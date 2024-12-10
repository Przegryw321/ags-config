export function interpolate(x: number, pairs: [number, number][]): number {
    for (let i = 1; i < pairs.length; ++i) {
        const x0 = pairs[i - 1][0]
        const x1 = pairs[i][0]
        const v0 = pairs[i - 1][1]
        const v1 = pairs[i][1]
        if (x >= v0 && x <= v1) {
            return (x * (x0 - x1) + (x1 * v0) - (x0 * v1)) / (v0 - v1)
        }
    }
    return 0
}


export interface Color {
    red: number
    green: number
    blue: number
    alpha: number
}

export function color(r: number, g: number, b: number): Color {
    return { red: r, green: g, blue: b, alpha: 1.0}
}

export function interpolate_colors(x: number, pairs: [Color, number][]): Color {
    let obj: Color = {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
    }

    let key: keyof typeof obj
    for (key in obj)
        obj[key] = interpolate(x, pairs.map(p => [p[0][key], p[1]]))

    return obj
}
