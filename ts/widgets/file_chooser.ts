import Gtk from 'gi://Gtk?version=3.0';

export interface FileChooserButtonProps {
  action?: Gtk.FileChooserAction,
  onFileSet?: (self: Gtk.FileChooserButton) => void,
  setup?: (self: Gtk.FileChooserButton) => void,
};

const FileChooserButtonBasic = Widget.subclass(Gtk.FileChooserButton);

export const FileChooserButton = (props: FileChooserButtonProps) => FileChooserButtonBasic({
  setup(self) {
    if (props.action) self.set_action(props.action);
    if (props.onFileSet) self.on('file-set', props.onFileSet);
    if (props.setup) props.setup(self);
  }
});
