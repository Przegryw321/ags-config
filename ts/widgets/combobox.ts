import Gtk from 'gi://Gtk?version=3.0';

export interface ComboBoxProps {
  items?: any,
  onChanged?: (self: Gtk.ComboBoxText) => void,
  setup?: (self: Gtk.ComboBoxText) => void,
};

const ComboBoxBasic = Widget.subclass(Gtk.ComboBoxText);

export const ComboBox = (props: ComboBoxProps) => ComboBoxBasic({
  setup(self) {
    if (props.items) props.items.forEach((item: string) => self.append(item, item));
    if (props.onChanged) self.on('changed', props.onChanged);
    if (props.setup) props.setup(self);
  }
});
