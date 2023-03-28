<template>
  <div id="container"
    style="min-width: 400px;min-height: 600px;">
    <div id="stencil"></div>
    <div id="graph-container"></div>
    <transition name="el-zoom-in-center">
      <div id="node-edit"
        v-show="currentNode">
        <el-form>
          <el-form-item label="name">
            <el-input />
          </el-form-item>
          <el-form-item label="describe">
            <el-input />
          </el-form-item>
          <component v-if="formName"
            :is="formName" />
        </el-form>

      </div>
    </transition>
  </div>
</template>

<script>
import { Graph } from '@antv/x6';

import { createGraph, createStencil, installPlugins } from '@/utils/x6/index';
import { plugins } from '@/utils/x6/plugins';
import { registerNodes, createNodes } from '@/utils/x6/node';
import {
  copy,
  cut,
  paste,
  undo,
  redo,
  selectAll,
  del,
} from '@/utils/x6/events';

import { pascal } from '@/utils/index';

import WebForm from '@/components/WebForm.vue';
import LocalForm from '@/components/LocalForm.vue';
import SourceForm from '@/components/SourceForm.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'X6',
  components: {
    WebForm,
    LocalForm,
    SourceForm,
  },
  data() {
    return {
      currentNode: null,
    };
  },
  computed: {
    formName() {
      if (
        this.currentNode
        && this.currentNode.data
        && this.currentNode.data.model_processd_type
      ) {
        return `${pascal(this.currentNode.data.model_processd_type)}Form`;
      }
      return '';
    },
  },
  mounted() {
    // #region 初始化画布
    const graph = createGraph(document.getElementById('graph-container'));
    // #endregion

    // #region 使用插件
    installPlugins(graph, plugins);
    // #endregion

    // #region 初始化 stencil
    const stencil = createStencil(graph);
    document.getElementById('stencil').appendChild(stencil.container);
    // #endregion

    // #region 快捷键与事件
    graph.bindKey(['meta+c', 'ctrl+c'], () => {
      copy(graph);
    });
    graph.bindKey(['meta+x', 'ctrl+x'], () => {
      cut(graph);
    });
    graph.bindKey(['meta+v', 'ctrl+v'], () => {
      paste(graph);
    });
    graph.bindKey(['meta+z', 'ctrl+z'], () => {
      undo(graph);
    });
    graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
      redo(graph);
    });
    graph.bindKey(['meta+a', 'ctrl+a'], () => {
      selectAll(graph);
    });
    graph.bindKey('backspace', () => {
      del(graph);
      this.currentNode = null;
    });
    graph.bindKey(['ctrl+1', 'meta+1'], () => {
      const zoom = graph.zoom();
      if (zoom < 1.5) {
        graph.zoom(0.1);
      }
    });
    graph.bindKey(['ctrl+2', 'meta+2'], () => {
      const zoom = graph.zoom();
      if (zoom > 0.5) {
        graph.zoom(-0.1);
      }
    });

    // 点击事件
    graph.on('blank:click', () => {
      this.currentNode = null;
    });
    graph.on('node:click', (e) => {
      console.log(e);
      this.currentNode = e.node;
    });

    graph.on('node:added', (e) => {
      e.node.prop({
        data: {
          model_processd_type: e.node.label,
        },
      });
      console.log(e.node);
    });

    // 控制连接桩显示/隐藏
    const showPorts = (ports, show) => {
      for (let i = 0, len = ports.length; i < len; i += 1) {
        ports[i].style.visibility = show ? 'visible' : 'hidden';
      }
    };
    graph.on('node:mouseenter', () => {
      const container = this.$el.querySelector('#graph-container');
      const ports = container.querySelectorAll('.x6-port-body');
      showPorts(ports, true);
    });
    graph.on('node:mouseleave', () => {
      const container = this.$el.querySelector('#graph-container');
      const ports = container.querySelectorAll('.x6-port-body');
      showPorts(ports, false);
    });
    // #endregion

    // #region 初始化图形

    Graph.registerNode(registerNodes, true);

    const nodes = createNodes.map((node) => graph.createNode(node));

    stencil.load(nodes, 'group1');
    // #endregion
  },
};
</script>

<style lang="scss" scoped>
@import url('@/styles/x6.scss');
#container {
  display: flex;
  border: 1px solid #dfe3e8;
  position: relative;
  width: 100%;
  height: 100%;
}
#stencil {
  width: 180px;
  height: 100%;
  height: 600px;
  position: relative;
  border-right: 1px solid #dfe3e8;
}
#graph-container {
  flex: 1;
  // width: calc(100% - 180px);
  height: 100%;
  height: 600px;
}

#node-edit {
  width: 300px;
  background-color: rgb(251, 251, 251);
  padding: 10px;
}
</style>
