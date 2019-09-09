<template>
  <li
    id="component_list"
    class="rn-components"
    :class="{
      active: leftPaneActiveIndex == 1
    }"
  >
    <div id="layer-scroll-list" class="rn-content-body">
      <div class="component-list">
        <el-tree
          v-show="pageComponents && pageComponents.length"
          ref="tree"
          :data="pageComponents"
          node-key="__id__"
          default-expand-all
          draggable
          :expand-on-click-node="false"
          :allow-drop="allowDrop"
          :allow-drag="allowDrag"
          :props="props"
          highlight-current
          @node-click="handleClick"
        >
          <template slot-scope="{ data: componentData }">
            <component
              :is="`${componentData.__type__}LeftpaneRightnav`"
              :data="componentData"
              :data-cid="componentData.__id__"
            ></component>
          </template>
        </el-tree>
      </div>
    </div>
  </li>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import getComponents from "./basic/index.js";
export default {
  components: {
    ...getComponents("leftpaneRightnav")
  },
  data() {
    return {
      props: {
        children: "_slots"
      }
    };
  },
  computed: {
    ...mapGetters({
      pageComponents: "pageDesign/pageComponents",
      selectComponent: "pageDesign/selectComponent",
      leftPaneActiveIndex: "pageDesign/leftPaneActiveIndex"
    })
  },
  methods: {
    ...mapMutations({
      setSelectComponent: "pageDesign/setSelectComponent"
    }),
    handleClick(node) {
      this.setSelectComponent(node);
    },
    allowDrop(draggingNode, dropNode, type) {
      return type === "inner"
        ? ["bLayout", "bDuplicate"].indexOf(dropNode.data.__type__) > -1
        : true;
    },
    allowDrag(/*draggingNode*/) {
      return true;
    }
  },
  watch: {
    selectComponent(newVal) {
      this.$refs.tree.setCurrentKey((newVal && newVal.__id__) || null);
    }
  }
};
</script>
<style lang="less" scoped>
.rn-content-body {
  flex: 1;
  width: calc(100% - 2px);
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dedee4;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
}
.component-list {
  /deep/ .el-tree-node__content {
    border: 1px solid transparent;
    height: auto;
    &:hover {
      background: #f7f7f7;
      .rn-list-item {
        color: rgb(41, 141, 248);
        .icon {
          color: inherit;
        }
      }
    }
  }
  /deep/ .el-tree--highlight-current {
    .el-tree-node {
      &.is-current {
        & > .el-tree-node__content {
          background: rgb(242, 242, 242);
          .rn-list-item {
            color: rgb(41, 141, 248);
            .icon {
              color: inherit;
            }
          }
        }
      }
      &.is-drop-inner {
        & > .el-tree-node__content {
          border: 1px solid rgb(41, 141, 248);
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
