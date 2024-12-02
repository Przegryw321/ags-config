import { Menu, MenuLabel } from "./menu"
import { logout, reboot, poweroff, shutdown, shutdown_cancel } from "../utils/power"

export const LogoutMenu = <Menu>
    <MenuLabel label="Wyloguj się" onActivate={logout}/>
    <MenuLabel label="Anuluj"/>
</Menu>

export async function show_logout_menu(): Promise<void> {
    LogoutMenu.popup_at_pointer(null)
}

export const RebootMenu = <Menu>
    <MenuLabel label="Uruchom ponownie" onActivate={reboot}/>
    <MenuLabel label="Anuluj"/>
</Menu>

export async function show_reboot_menu(): Promise<void> {
    RebootMenu.popup_at_pointer(null)
}

export const PoweroffMenu = <Menu>
    <MenuLabel label="Zamknij" onActivate={poweroff}/>
    <MenuLabel label="Zamknij za 1 minutę" onActivate={() => shutdown()}/>
    <MenuLabel label="Anuluj" onActivate={shutdown_cancel}/>
</Menu>

export async function show_poweroff_menu(): Promise<void> {
    PoweroffMenu.popup_at_pointer(null)
}
