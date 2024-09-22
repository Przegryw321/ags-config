export const WindowButton = (child: any, window: string, tooltip: string, { ...props } = {}) => Widget.Button({
  ...props,
  className: child.className,
  tooltipMarkup: tooltip,
  child,
  onPrimaryClick: () => App.toggleWindow(window),
});
