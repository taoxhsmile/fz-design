<template>
  <div
    ref="freeWidgetView"
    class="free-widget-view"
    @mousedown.stop="mousedown"
    @mouseenter.stop="mouseenter"
    @mouseleave.stop="mouseleave"
  >
    <slot></slot>
    <freeWidgetViewBorder :data="data"></freeWidgetViewBorder>
    <freeWidgetViewDel
      :data="data"
      :list="list"
      :index="index"
    ></freeWidgetViewDel>
  </div>
</template>
<script>
import $ from "jquery";
import { mapMutations } from "vuex";
import freeWidgetViewBorder from "./freeWidgetViewBorder";
import freeWidgetViewDel from "./freeWidgetViewDel";
export default {
  name: "free-widget-view",
  components: {
    freeWidgetViewBorder,
    freeWidgetViewDel
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
    mousedown({ clientX: startX, clientY: startY, currentTarget: dragTarget }) {
      let { left, top } = $(dragTarget).position(); //拖拽物体的初始位置
      let mousemoveFn = ({ clientX: endX, clientY: endY }) => {
          let nLeft = endX - startX + left,
            nTop = endY - startY + top;

          //设置样式
          $(dragTarget).css({
            left: `${nLeft}px`,
            top: `${nTop}px`
          });
        },
        mouseupFn = () => {
          //重置状态
          this.setDragComponent(null);
          //设置选中组件
          this.setSelectComponent(this.data);

          $(document).off("mousemove", mousemoveFn);
          $(document).off("mouseup", mouseupFn);
        };

      $(document).on("mousemove", mousemoveFn);
      $(document).on("mouseup", mouseupFn);
    }
  }
};
</script>
<style lang="less" scoped>
.free-widget-view {
  position: relative;
  cursor: pointer;
}
</style>
