import { WidgetProps } from "../utils/widget"
import Emerge from "../variables/emerge"

export default function EmergeStatus(props: WidgetProps): JSX.Element {
    return <box visible={Emerge.as(s => s !== null)} {...props}>
        <label className="emerge" label="emerge: "/>
        (
        <label className="current" label={Emerge.as(status => `${status?.current} `)}/>
        z
        <label className="count" label={Emerge.as(status => ` ${status?.count}`)}/>
        )
        <label className="name" label={Emerge.as(status => ` ${status?.name}`)}/>
    </box>
}
