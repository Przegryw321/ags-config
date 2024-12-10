#!/usr/bin/gjs -m
import { App } from "astal/gtk3"

import Bar from "./windows/bar"
import Startmenu from "./windows/startmenu"
import VolumePopup from "./windows/volumepopup"

import { PlayerControlObj } from "./utils/player"

import style from "./themes/catppuccin_mocha/style.scss"
import "./utils/scss_auto_reload"

App.start({
    css: style,
    icons: `${SRC}/icons`,
    main() {
        Bar().catch(printerr)
        Startmenu().catch(printerr)
        VolumePopup().catch(printerr)
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
