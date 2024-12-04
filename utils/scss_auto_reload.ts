import { App } from "astal/gtk3"
import { monitorFile } from "astal/file"
import { execAsync } from "astal/process"
import GLib from "gi://GLib"

const theme = "./themes/catppuccin_mocha"
const scss = `${theme}/style.scss`
const css = `${GLib.get_user_runtime_dir()}/ags_style.css`

function load_css(): void {
    execAsync(`sass ${scss} ${css}`).then(() => {
        App.reset_css()
        App.apply_css(css)
    }).catch(console.error)
}

load_css()
monitorFile(theme, load_css)
