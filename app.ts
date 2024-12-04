#!/usr/bin/gjs -m
import { App } from "astal/gtk3"
import { monitorFile } from "astal/file"
import { execAsync } from "astal/process"
import GLib from "gi://GLib"

import Bar from "./windows/bar"
import Startmenu from "./windows/startmenu"

import { PlayerControlObj } from "./utils/player"

const theme = "./themes/catppuccin_mocha"
const scss = `${theme}/style.scss`
const css = `${GLib.get_user_runtime_dir()}/ags_style.css`
import style from "./themes/catppuccin_mocha/style.scss"

function load_css(): void {
    execAsync(`sass ${scss} ${css}`).then(() => {
        App.reset_css()
        App.apply_css(css)
    }).catch(console.error)
}

load_css()
monitorFile(theme, load_css)

App.start({
    css: style,
    icons: `${SRC}/icons`,
    main() {
        Bar().catch(printerr)
        Startmenu().catch(printerr)
    },
    requestHandler(request: string, res: (response: any) => void) {
        // HACK: can't figure out what tsconfig option makes the lsp accept this function
        if ((Object as any).hasOwn(PlayerControlObj, request)) {
            PlayerControlObj[request]()
            res("")
        }
        else
            res("unknown command")
    }
})
