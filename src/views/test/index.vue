<template>
  <section class="test">
    <div class="left">
      <ul>
        <li><textLeftPane /></li>
      </ul>
      <ul>
        <li><textComponentList /></li>
      </ul>
    </div>
    <div class="center">
      <div class="no-zoom-area"></div>
      <div class="zoom-area">
        <div id="canvas">
          <page :data="pageData"></page>
        </div>
      </div>
      <div class="no-zoom-area">
        <hoverBorder></hoverBorder>
        <div class="selection-handler">
          <selection></selection>
        </div>
      </div>
    </div>
    <div class="right">
      {{ hoverComponent }}
      {{ selectComponent }}
    </div>
  </section>
</template>
<script>
import { mapState /*, mapMutations, mapActions*/ } from "vuex";
import leftPane from "./components/leftPane.js";
import componentList from "./components/componentList.js";
import page from "./components/page";
import hoverBorder from "./components/hoverBorder.vue";
import selection from "./components/selection.vue";
export default {
  components: {
    ...leftPane,
    ...componentList,
    page,
    hoverBorder,
    selection
  },
  computed: {
    ...mapState({
      pageInfo: "pageDesign"
    }),
    pageData() {
      return this.pageInfo.pageData;
    },
    hoverComponent() {
      return this.pageInfo.hoverComponent;
    },
    selectComponent() {
      return this.pageInfo.selectComponent;
    }
  }
};
</script>
<style lang="less" scoped>
section {
  display: flex;
  .left {
    flex: 0 0 100px;
    ul {
      li {
      }
    }
  }
  .center {
    flex: 0 0 375px;
    height: 667px;
    position: relative;
    .no-zoom-area {
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .zoom-area {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      #canvas {
        position: relative;
        z-index: 1;
        height: 667px;
        &::after {
          content: "";
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border: 1px solid #c8cdd0;
        }
      }
    }
  }
  .right {
    flex: auto;
  }
  .selection-handler {
    position: absolute;
    z-index: 2;
  }
}
</style>
