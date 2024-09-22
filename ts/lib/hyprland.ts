const Hyprland = await Service.import('hyprland');

export const is_focused_fullscreen = (event: string, args: string) => {
  switch (event) {
    case 'fullscreen':
      return Hyprland.clients.some(c => c.fullscreen === 2 && c.workspace.id === Hyprland.active.workspace.id);
    case 'workspace':
      return Hyprland.clients.some(c => c.fullscreen === 2 && c.workspace.id === Number(args));
    default:
      return false;
  }
};
