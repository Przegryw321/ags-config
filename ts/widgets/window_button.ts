export const WindowButton = (child: any, window: string, tooltip: string) => Widget.Button({
  className: child.className,
  tooltipMarkup: tooltip,
  child,
  onPrimaryClick: () => App.toggleWindow(window),
});
