#!/usr/bin/gjs -m
import { App } from "astal/gtk3"
import { monitorFile } from "astal/file"
import { execAsync } from "astal/process"
import GLib from "gi://GLib"

import Bar from "./windows/bar"
import Startmenu from "./windows/startmenu"

const theme = "./themes/catppuccin_mocha"
const scss = `${theme}/style.scss`
const css = `${GLib.get_user_runtime_dir()}/ags_style.css`
//import style from "./themes/catppuccin_mocha/style.scss"

function load_css(): void {
    execAsync(`sass ${scss} ${css}`).then(() => {
        App.reset_css()
        App.apply_css(css)
    }).catch(console.error)
}

load_css()
monitorFile(theme, load_css)

App.start({
    css,
    icons: `${SRC}/icons`,
    main() {
        Bar().catch(printerr)
        Startmenu().catch(printerr)
    },
})
