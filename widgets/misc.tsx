import { Binding, bind } from "astal"
import { WidgetProps } from "../utils/widget"

type DeepBindProps = WidgetProps & {
    binding: Binding<any>
    property: string
}
export function DeepBindLabel({ binding, property, ...props }: DeepBindProps) {
    // wrapped in a box so it can be used as a JSX element
    return <box>{binding.as(obj => {
        if (!obj) return <label visible={false}/>
        return <label truncate label={bind(obj, property)} {...props}/>
    })}</box>
}
