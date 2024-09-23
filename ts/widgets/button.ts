export const LabelButton = ({ label, ...props }) => Widget.Button({
  ...props,
  child: Widget.Label({
    label,
  }),
});

export const IconButton = ({ icon, ...props }) => Widget.Button({
  ...props,
  child: Widget.Icon({
    icon,
  }),
});
