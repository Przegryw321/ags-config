import { bind, Variable } from "astal"
import { WidgetProps } from "../../utils/widget"

import Shutdown from "../../variables/shutdown"
import BarShutdown from "./barshutdown"

import Emerge from "../../variables/emerge"
import BarEmerge from "../emerge"

export const IsEmerge = Variable.derive(
    [Shutdown, Emerge],
    (shutdown, emerge) => shutdown === null && emerge !== null
)

export default function SystemProcess({ halign, valign, ...props }: WidgetProps): JSX.Element {
    return <box {...props}>
        <BarShutdown className="shutdown"
                     halign={halign}
                     valign={valign}
                     hexpand/>
        <BarEmerge className="emerge"
                   visible={bind(IsEmerge)}
                   halign={halign}
                   valign={valign}
                   hexpand/>
    </box>
}
