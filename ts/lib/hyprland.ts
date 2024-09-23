const Hyprland = await Service.import('hyprland');

export const is_focused_fullscreen = (event: string) => {
  switch (event) {
    case 'fullscreen':
    case 'workspace':
      const mainMonitorActive = Hyprland.monitors[0].activeWorkspace.id;
      return Hyprland.clients.some(c => c.fullscreen === 2 && c.workspace.id === mainMonitorActive);
    default:
      return null;
  }
};

const HYPRLAND_SCRIPTS = `${App.configDir}/../hypr/hyprland/scripts`;
export const screenshot_region  = () => Utils.execAsync(`${HYPRLAND_SCRIPTS}/screenshot_region`).catch(console.error);
export const screenshot_window  = () => Utils.execAsync(`${HYPRLAND_SCRIPTS}/screenshot_window`).catch(console.error);
export const screenshot_monitor = () => Utils.execAsync(`${HYPRLAND_SCRIPTS}/screenshot_monitor`).catch(console.error);

export const set_wallpaper = (path: string) => Utils.execAsync(`${HYPRLAND_SCRIPTS}/set_wallpaper ${path}`).catch(console.error);
