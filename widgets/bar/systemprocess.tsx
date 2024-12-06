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

export default function SystemProcess(props: WidgetProps): JSX.Element {
    return <box {...props}>
        <BarShutdown className="shutdown"/>
        <BarEmerge className="emerge" visible={bind(IsEmerge)}/>
    </box>
}
