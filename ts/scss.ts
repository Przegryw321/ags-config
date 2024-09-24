import Gio from 'gi://Gio';
import Config from './services/config';
import FileMonitor from './services/file_monitor';

export const reload_css = (): void => {
  const theme  = Config.options['theme'];
  const path   = `${FileMonitor.themes_dir}/${theme}/style.scss`;
  const output = '/tmp/ags/style.css'
  Utils.exec(`sassc ${path} ${output}`)
  App.applyCss(output, true)
};

export const auto_scss_reload = () => Utils.monitorFile(FileMonitor.themes_dir, reload_css, {
  flags: Gio.FileMonitorFlags.WATCH_MOVES,
  recursive: true,
});

reload_css();
