export const LabelButton = ({ label, ...props }) => Widget.Button({
  ...props,
  child: Widget.Label({
    label,
  }),
});
