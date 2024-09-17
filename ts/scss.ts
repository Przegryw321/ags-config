import Gio from 'gi://Gio';
import Config from './services/config';

const scss_path = App.configDir + '/scss';

export const reload_css = (): void => {
  const theme  = Config.options['theme'];
  const path   = `${scss_path}/${theme}/style.scss`;
  const output = '/tmp/ags/style.css'
  Utils.exec(`sassc ${path} ${output}`)
  App.applyCss(output, true)
};

export const auto_scss_reload = () => Utils.monitorFile(scss_path, reload_css, {
  flags: Gio.FileMonitorFlags.WATCH_MOVES,
  recursive: true,
});

reload_css();
