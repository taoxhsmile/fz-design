<template>
  <div
    ref="freeWidgetView"
    class="free-widget-view"
    :class="[data.__type__]"
    @mousedown.stop="mousedown"
    @mouseover.stop="mouseover"
    @mouseout.stop="mouseout"
    @click.stop
    :style="[styles]"
  >
    <slot></slot>
    <freeWidgetViewBorder :data="data"></freeWidgetViewBorder>
    <freeWidgetViewDel
      :data="data"
      :list="list"
      :index="index"
    ></freeWidgetViewDel>
    <freeWidgetViewControl :data="data"></freeWidgetViewControl>
  </div>
</template>
<script>
import $ from "jquery";
import { mapMutations } from "vuex";
import freeWidgetViewBorder from "./freeWidgetViewBorder";
import freeWidgetViewDel from "./freeWidgetViewDel";
import freeWidgetViewControl from "./freeWidgetViewControl";
import { stylesConvert } from "@design/components/tools/stylesConvert";
export default {
  name: "free-widget-view",
  components: {
    freeWidgetViewBorder,
    freeWidgetViewDel,
    freeWidgetViewControl
  },
  props: {
    data: Object,
    list: Array,
    index: Number
  },
  computed: {
    styles() {
      let {
          data: { _styles }
        } = this,
        styles = {};
      ["position", "left", "top", "width"].forEach(key => {
        styles[key] = _styles[key];
      });
      return stylesConvert({
        _styles: styles
      });
    }
  },
  methods: {
    ...mapMutations({
      setHoverComponent: "pageDesign/setHoverComponent",
      setSelectComponent: "pageDesign/setSelectComponent",
      setDragComponent: "pageDesign/setDragComponent",
      setComponentProperty: "pageDesign/setComponentProperty"
    }),
    mouseover() {
      this.setHoverComponent(this.data);
    },
    mouseout() {
      this.setHoverComponent(null);
    },
    mousedown({ clientX: startX, clientY: startY, currentTarget: dragTarget }) {
      let $parent = $(dragTarget).parent(),
        $parentWidth = $parent.width(),
        $parentHeight = $parent.height(),
        $dragTargetWidth = $(dragTarget).width(),
        $dragTargetHeight = $(dragTarget).height(),
        {
          _styles: { left: oldLeft, top: oldTop }
        } = this.data,
        nLeft = oldLeft,
        nTop = oldTop; //拖拽物体的初始位置

      let mousemoveFn = ({ clientX: endX, clientY: endY }) => {
          nLeft = endX - startX + oldLeft;
          nTop = endY - startY + oldTop;

          if (nLeft < 0) {
            nLeft = 0;
          } else if (nLeft + $dragTargetWidth > $parentWidth) {
            nLeft = $parentWidth - $dragTargetWidth;
          }
          if (nTop < 0) {
            nTop = 0;
          } else if (nTop + $dragTargetHeight > $parentHeight) {
            nTop = $parentHeight - $dragTargetHeight;
          }

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

          this.setComponentProperty({
            component: this.data,
            key: "_styles",
            value: {
              left: nLeft,
              top: nTop
            }
          });

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
  cursor: pointer;
  position: absolute;
  &.fz-text {
    max-width: 100%;
    min-height: 10px;
    line-height: 1.4em;
    white-space: pre-wrap;
    word-break: break-all;
    height: auto !important;
  }
}
</style>
