import { bind, Variable } from "astal"
import { WidgetProps } from "../utils/widget"
import AstalNetwork from "gi://AstalNetwork"
export const Network = AstalNetwork.get_default()

export import Internet = AstalNetwork.Internet
export import Primary = AstalNetwork.Primary

// Workaround for not being able to bind to the Network class.
// The Network.wifi.strength property does not send a 'notify' signal
// so we're using a poll to update it regularly.
export const NetworkVar = Variable(false).poll(15000, val => !val)
NetworkVar.stopPoll()
Network.connect('notify', network => {
    if (network.primary === Primary.WIFI) NetworkVar.startPoll()
    else NetworkVar.stopPoll()
    NetworkVar.set(!NetworkVar.get())
})
export const NetworkBind = bind(NetworkVar).as(_ => Network)

export function get_wired_icon(wired: AstalNetwork.Wired): string {
    switch (wired.internet) {
        case Internet.CONNECTED: return "lan-symbolic"
        case Internet.CONNECTING: return "lan-symbolic"
        default: return "nointernet-symbolic"
    }
}

export function get_wifi_icon(wifi: AstalNetwork.Wifi): string {
    switch (wifi.internet) {
        case Internet.CONNECTED: return `wifi${Math.round(wifi.strength / 100 * 3 + 1)}-symbolic`
        case Internet.CONNECTING: return "wifiscan-symbolic"
        default: return "nointernet-symbolic"
    }
}

export function get_network_icon(network: AstalNetwork.Network): string {
    switch (network.primary) {
        case Primary.WIRED: return get_wired_icon(network.wired)
        case Primary.WIFI: return get_wifi_icon(network.wifi)
        default: return "nointernet-symbolic"
    }
}

type InternetString = "connected" | "connecting" | "disconnected"
export function internet_to_string(internet: AstalNetwork.Internet): InternetString {
    switch (internet) {
        case Internet.CONNECTED: return "connected"
        case Internet.CONNECTING: return "connecting"
        default: return "disconnected"
    }
}

export function primary_to_string(primary: AstalNetwork.Primary): "wired" | "wifi" {
    switch (primary) {
        case Primary.WIFI: return "wifi"
        default: return "wired"
    }
}

export function get_primary(network: AstalNetwork.Network): AstalNetwork.Wired | AstalNetwork.Wifi | null {
    if (network.primary === Primary.UNKNOWN) return null
    return network[primary_to_string(network.primary)]
}

export function NetworkIcon(props: WidgetProps): JSX.Element {
    const className = NetworkBind.as(net =>
        internet_to_string(get_primary(net)?.internet ?? Internet.DISCONNECTED))
    return <icon icon={NetworkBind.as(get_network_icon)} className={className} {...props}/>
}
