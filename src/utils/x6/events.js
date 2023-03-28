export function copy(graph) {
  const cells = graph.getSelectedCells();
  if (cells.length) {
    graph.copy(cells);
  }
  return false;
}

export function cut(graph) {
  const cells = graph.getSelectedCells();
  if (cells.length) {
    graph.cut(cells);
  }
  return false;
}

export function paste(graph) {
  if (!graph.isClipboardEmpty()) {
    const cells = graph.paste({ offset: 32 });
    graph.cleanSelection();
    graph.select(cells);
  }
  return false;
}

export function undo(graph) {
  if (graph.canUndo()) {
    graph.undo();
  }
  return false;
}

export function redo(graph) {
  if (graph.canRedo()) {
    graph.redo();
  }
  return false;
}

export function selectAll(graph) {
  const nodes = graph.getNodes();
  if (nodes) {
    graph.select(nodes);
  }
}

export function del(graph) {
  const cells = graph.getSelectedCells();
  if (cells.length) {
    graph.removeCells(cells);
  }
}
