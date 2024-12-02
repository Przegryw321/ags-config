import Hyprland from "./hyprland"
import { execAsync } from "astal"

export async function sleep(): Promise<string> {
    return execAsync('systemctl suspend')
}

export async function logout(): Promise<void> {
    Hyprland.dispatch('exit', '')
}

export async function reboot(): Promise<string> {
    return execAsync('systemctl reboot')
}

export async function poweroff(): Promise<string> {
    return execAsync('systemctl poweroff')
}

export async function shutdown(time?: string): Promise<string> {
    return execAsync(`shutdown ${time ?? ''}`)
}

export async function shutdown_cancel(): Promise<string> {
    return execAsync('shutdown -c')
}
