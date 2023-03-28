import { Graph, Shape } from '@antv/x6';
import { Stencil } from '@antv/x6-plugin-stencil';

/**
 * @param {HTMLElement} container
 * @returns {Graph}
 */
export function createGraph(container) {
  const graph = new Graph({
    container,
    grid: true,
    mousewheel: {
      enabled: true,
      zoomAtMousePosition: true,
      modifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 3,
    },
    connecting: {
      router: 'manhattan',
      connector: {
        name: 'rounded',
        args: {
          radius: 8,
        },
      },
      anchor: 'center',
      connectionPoint: 'anchor',
      allowBlank: false,
      snap: {
        radius: 20,
      },
      createEdge() {
        return new Shape.Edge({
          attrs: {
            line: {
              stroke: '#A2B1C3',
              strokeWidth: 2,
              targetMarker: {
                name: 'block',
                width: 12,
                height: 8,
              },
            },
          },
          zIndex: 0,
        });
      },
      validateConnection({ targetMagnet }) {
        return !!targetMagnet;
      },
    },
    highlighting: {
      magnetAdsorbed: {
        name: 'stroke',
        args: {
          attrs: {
            fill: '#5F95FF',
            stroke: '#5F95FF',
          },
        },
      },
    },
  });

  return graph;
}

/**
 * @param {Graph} graph
 * @param {Graph.Plugin|Graph.Plugin[]} plugins
 */
export function installPlugins(graph, plugins) {
  if (Array.isArray(plugins)) {
    plugins.forEach((plugin) => {
      graph.use(plugin);
    });
  } else {
    graph.use(plugins);
  }
}

/**
 * @param {Graph} graph
 * @returns {Stencil}
 */
export function createStencil(graph) {
  const stencil = new Stencil({
    title: '流程图',
    target: graph,
    stencilGraphWidth: 200,
    stencilGraphHeight: 180,
    collapsable: true,
    groups: [
      {
        title: '基础流程图',
        name: 'group1',
        graphHeight: 250,
        layoutOptions: {
          rowHeight: 70,
        },
      },
    ],
    layoutOptions: {
      columns: 2,
      columnWidth: 80,
      rowHeight: 55,
    },
  });

  return stencil;
}
