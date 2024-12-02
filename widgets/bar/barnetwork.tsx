import { WidgetProps } from "../../utils/widget"
import { NetworkIcon } from "../network"

export default function BarNetwork(props: WidgetProps): JSX.Element {
    return <button {...props}>
        <NetworkIcon/>
    </button>
}
