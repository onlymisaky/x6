import { Transform } from '@antv/x6-plugin-transform';
import { Selection } from '@antv/x6-plugin-selection';
import { Snapline } from '@antv/x6-plugin-snapline';
import { Keyboard } from '@antv/x6-plugin-keyboard';
import { Clipboard } from '@antv/x6-plugin-clipboard';
import { History } from '@antv/x6-plugin-history';

/** @type {Transform} */
const transform = new Transform({
  resizing: true,
  rotating: true,
});

/** @type {Selection} */
const selection = new Selection({
  enabled: true,
  rubberband: true,
  showNodeSelectionBox: true,
});

/** @type {Snapline} */
const snapline = new Snapline({
  enabled: true,
  rubberband: true,
  showNodeSelectionBox: true,
});

/** @type {Keyboard} */
const keyboard = new Keyboard({
  enabled: true,
  rubberband: true,
  showNodeSelectionBox: true,
});

/** @type {Clipboard} */
const clipboard = new Clipboard({
  enabled: true,
  rubberband: true,
  showNodeSelectionBox: true,
});

/** @type {History} */
const history = new History({
  enabled: true,
  rubberband: true,
  showNodeSelectionBox: true,
});

export const plugins = [
  transform,
  selection,
  snapline,
  keyboard,
  clipboard,
  history,
];
