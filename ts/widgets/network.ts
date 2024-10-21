import { Network as Network_t, Wifi, Wired } from "types/service/network";

const Network = await Service.import('network');

export const ETHERNET     = '\udb80\ude01';
export const ETHERNET_OFF = '\udb80\ude02';

export const WIFI       = ['\udb82\udd1f', '\udb82\udd22', '\udb82\udd25', '\udb82\udd28'];
export const WIFI_ALERT = ['\udb82\udd20', '\udb82\udd23', '\udb82\udd26', '\udb82\udd29'];
export const WIFI_LOCK  = ['\udb82\udd21', '\udb82\udd24', '\udb82\udd27', '\udb82\udd2a'];
export const WIFI_OFF   = '\udb82\udd2d';

export const WEB_CANCEL = '\udb85\udf90';

export const get_wired_icon = (wired: Wired): string => {
  switch (wired.internet) {
    case 'connected':
    case 'connecting':
      return ETHERNET;
    default:
      return ETHERNET_OFF;
  }
};

export const get_wifi_icon = (wifi: Wifi): string => {
  switch (wifi.internet) {
    case 'connected':
    case 'connecting':
      return WIFI[Math.round(wifi.strength / 100 * WIFI.length)];
    default:
      return WIFI_OFF;
  }
};

export const get_network_icon = (network: Network_t): string => {
  switch (network.primary) {
    case 'wired': return get_wired_icon(network.wired);
    case 'wifi': return get_wifi_icon(network.wifi);
    default: return WEB_CANCEL;
  }
};

export const set_network_class = (widget: any) => {
  const internet = Network[Network.primary ?? 'wired'].internet;
  ['connected', 'connecting', 'disconnected'].forEach(state => {
    widget.toggleClassName(state, internet === state);
  });
}

export const NetworkIcon = ({ ...props } = {}) => Widget.Label({
  ...props,

  setup: self => self.hook(Network, self => {
    self.label = get_network_icon(Network);
    set_network_class(self);
  }),
});
