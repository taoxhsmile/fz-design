<template>
  <div
    ref="widgetView"
    class="widget-view"
    @click.stop="handleClick"
    @mouseenter.stop="mouseenter"
    @mouseleave.stop="mouseleave"
  >
    <slot></slot>
    <widgetViewBorder :data="data"></widgetViewBorder>
    <widgetViewDrag :data="data" :list="list" :index="index"></widgetViewDrag>
    <widgetViewDel :data="data" :list="list" :index="index"></widgetViewDel>
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
    index: Number
  },
  methods: {
    ...mapMutations({
      setHoverComponent: "pageDesign/setHoverComponent",
      setSelectComponent: "pageDesign/setSelectComponent",
      setDragComponent: "pageDesign/setDragComponent"
    }),
    mouseenter() {
      this.setHoverComponent(this.data);
    },
    mouseleave() {
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
