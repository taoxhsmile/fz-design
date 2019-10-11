<template>
  <div
    ref="widgetView"
    class="widget-view"
    @click.stop="handleClick"
    @mouseover.stop="mouseover"
    @mouseout="mouseout"
  >
    <slot></slot>
    <!-- 边框线 -->
    <widgetViewBorder :data="data"></widgetViewBorder>

    <!-- 是否支持移动 -->
    <template v-if="canMove">
      <widgetViewDrag :data="data" :list="list" :index="index"></widgetViewDrag>
    </template>
    <!-- 是否支持删除 -->
    <template v-if="canDel">
      <widgetViewDel :data="data" :list="list" :index="index"></widgetViewDel>
    </template>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import widgetViewBorder from "./widgetViewBorder";
import widgetViewDrag from "./widgetViewDrag";
import widgetViewDel from "./widgetViewDel";
export default {
  name: "widget-view",
  components: {
    widgetViewBorder,
    widgetViewDrag,
    widgetViewDel
  },
  props: {
    data: Object,
    list: Array,
    index: Number,
    canMove: {
      type: Boolean,
      default: true
    },
    canDel: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapMutations({
      setHoverComponent: "pageDesign/setHoverComponent",
      setSelectComponent: "pageDesign/setSelectComponent",
      setDragComponent: "pageDesign/setDragComponent"
    }),
    mouseover() {
      this.setHoverComponent(this.data);
    },
    mouseout() {
      this.setHoverComponent(null);
    },
    handleClick() {
      this.setSelectComponent(this.data);
    }
  }
};
</script>
<style lang="less" scoped>
.widget-view {
  position: relative;
  cursor: pointer;
}
</style>
