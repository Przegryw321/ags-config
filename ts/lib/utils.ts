import Gio from 'gi://Gio';
import { FileInfo } from 'types/@girs/gio-2.0/gio-2.0.cjs';

export const has_jp_chars = (str: string) => str.match('[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]');

export const curl = (url: string, output: string) => {
  return Utils.execAsync(`curl ${url} -so ${output}`);
};

export const get_themes = () => {
  const dir      = Gio.File.new_for_path(`${App.configDir}/scss`);
  const children = dir.enumerate_children('', Gio.FileQueryInfoFlags.NONE, null);

  let file = <FileInfo | null> null;
  let themes: string[] = [];
  while (file = children.next_file(null)) {
    themes.push(file.get_name());
  }

  return themes;
};

