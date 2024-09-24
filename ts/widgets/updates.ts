import Plural from "../lib/plural";
import Archlinux from "../services/archlinux";

export const UpdateTooltip = (max_length: number = 65) => Archlinux.bind('updates').as(updates => {
    let output = `<span font_weight="bold">${updates.length} ${Plural.updates(updates.length)} ${Plural.available(updates.length)}${updates.length > 0 ? ':' : ''}</span>`;
    const length = updates.length;

    if (length == 0) return output;

    // limit the list so it doesn't go off screen
    updates = updates.slice(0, max_length);

    const longest_name = updates.reduce((a, b) => (a && a.name.length > b.name.length) ? a : b).name.length;
    const longest_from = updates.reduce((a, b) => (a && a.from.length > b.from.length) ? a : b).from.length;

    output += '<span font_family="Cascadia Code">';
    updates.forEach(update => {
      switch (update.name) {
        case 'linux':
        case 'nvidia':
          output += `\n<span fgcolor="#a6e3a1">${update.name.padEnd(longest_name)} ${update.from.padEnd(longest_from)} -> ${update.to}</span>`;
          break;
        default:
          output += `\n${update.name.padEnd(longest_name)} ${update.from.padEnd(longest_from)} -> ${update.to}`;
          break;
      }
    })
    if (length > max_length) output += `\n... (jeszcze ${length - max_length})`;
    output += '</span>';

    return output;
});

export const UpdateIcon = ({ ...rest } = {}) => Widget.Label({
  ...rest,
  label: '\ue923',
});

export const UpdateCount = () => Widget.Box({
  vertical: true,
  tooltipMarkup: UpdateTooltip(),

  children: [
    UpdateIcon({
      className: 'update-count-icon'
    }),
    Widget.Label({
      className: 'update-count',
      label: Archlinux.bind('updates').as(v => `${v.length}`),
    })
  ],
});
