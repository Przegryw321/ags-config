import Gtk from 'gi://Gtk?version=3.0';
import { ComboBox } from '../widgets/combobox';
import Config from '../services/config';
import { LabelButton } from './button';

export const Title = (text: string) => Widget.Label({
  className: 'settings-title',
  hpack: 'start',
  label: text,
});

export const Option = ({ label, child, ...props }) => Widget.Box({
  ...props,
  className: 'option',
  children: [
    Widget.Label({
      className: 'settings-label',
      hpack: 'start',
      hexpand: true,
      label,
    }),
    child,
  ]
});

export const SwitchOption = ({ label, option, ...props }) => Option({
  ...props,
  label,
  child: Widget.Switch({
    hpack: 'end',
    onActivate: ({ active }) => Config.set(option, active),
    active: Config.options[option],
  }),
});


export const NumberOption = ({
  label,
  option,
  min = <number|null> null,
  max = <number|null> null,
  widthChars = <number|undefined> 5,
  ...props
}) => Option({
    ...props,
    label,
    child: Widget.Entry({
      text: `${Config.options[option]}`,
      hpack: 'end',
      xalign: 0.5,
      widthChars,
      onAccept: self => {
        const number = Number(self.text);
        if (isNaN(number) || (min !== null && number < min) || (max !== null && number > max)) {
          self.text = `${Config.options[option]}`;
        } else {
          Config.set(option, number);
        }
      },
    }),
  });

export const ComboBoxOption = ({
  label,
  option,
  items = <string[] | undefined> undefined,
  setup = <((self: Gtk.ComboBoxText) => void) | undefined> undefined,
  ...props
}) => Option({
    ...props,
    label,
    child: ComboBox({
      items,
      onChanged(self: Gtk.ComboBoxText) {
        const active = self.get_active_id();
        if (active) Config.set(option, active);
      },
      setup,
    }),
  });

export const ButtonOption = ({ label1, label2, onClicked, ...props }) => Option({
  ...props,
  label: label1,
  child: LabelButton({
    onClicked,
    label: label2,
  }),
});
