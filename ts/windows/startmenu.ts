import { SleepButton, LogoutButton, RebootButton, PoweroffButton } from "../widgets/powermenu";
import { Applist } from "../widgets/applist";
import { UpdateCount } from "../widgets/updates";

const PowerOptions = () => Widget.Box({
  vertical: true,
  vpack: 'end',
  vexpand: true,

  children: [
    SleepButton(),
    LogoutButton(),
    RebootButton(),
    PoweroffButton(),
  ],
})

const Leftbar = () => Widget.Box({
  className: 'startmenu-leftbar',
  vertical: true,

  children: [
    UpdateCount(),
    PowerOptions(),
  ]
});

const StartmenuApplist = () => Widget.Box({
  className: 'startmenu-applist',
  children: [Applist(5, [
    'spotify',
    'virt-manager',
    'qbittorrent',
    'firefox',
    'kitty',
    'steam',
    'thunar',
    'gimp',
    'lutris',
  ], 'startmenu')],
})

export const StartMenu = async (monitor: number = 0) => Widget.Window({
  monitor,
  visible: false,
  name: 'startmenu',
  anchor: ['top', 'left'],
  margins: [20],
  exclusivity: 'normal',
  layer: 'overlay',

  child: Widget.Box({
    children: [
      Leftbar(),
      StartmenuApplist(),
    ],
  }),
});
