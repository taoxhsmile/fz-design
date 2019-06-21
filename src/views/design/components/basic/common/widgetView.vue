<template>
  <div
    ref="widgetView"
    class="widget-view"
    @mousedown.stop="mousedown"
    @mouseenter.stop="mouseenter"
    @mouseleave.stop="mouseleave"
  >
    <slot></slot>
    <div class="hover-border" v-show="data === hoverComponent"></div>
    <div class="select-border" v-show="data === selectComponent"></div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "widget-view",
  props: {
    data: Object
  },
  computed: {
    ...mapGetters({
      hoverComponent: "pageDesign/hoverComponent",
      selectComponent: "pageDesign/selectComponent"
    })
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty",
      setHoverComponent: "pageDesign/setHoverComponent",
      setSelectComponent: "pageDesign/setSelectComponent",
      setIsDrag: "pageDesign/setIsDrag",
      setFixAreaStyles: "pageDesign/setFixAreaStyles"
    }),
    _setFixAreaStyles(type) {
      //热更新会导致重复注册事件
      if (!this.$refs.widgetView) return;

      let {
        _styles: { borderRadius }
      } = this.data;
      let { offsetWidth: width, offsetHeight: height } = this.$refs.widgetView;

      let { left, top } = this.getLeftATop();

      let fixAreaStyles = {
        left,
        top,
        width,
        height,
        borderRadius: borderRadius || 0
      };

      this.setFixAreaStyles({ type, fixAreaStyles });
    },
    mouseenter() {
      this.setHoverComponent(this.data);
    },
    mouseleave() {
      this.setHoverComponent(null);
    },
    // 拖拽preview
    mousedown({ clientX: startX, clientY: startY }) {
      this.setSelectComponent(this.data);
      this.setHoverComponent(null);

      let {
        _styles: { left, top }
      } = this.data;
      left = parseFloat(left);
      top = parseFloat(top);

      document.onmousemove = ({ clientX: endX, clientY: endY }) => {
        this.setIsDrag(true);

        this.setSelectComponentProperty("_styles", {
          left: endX - startX + left,
          top: endY - startY + top
        });
        this._setFixAreaStyles();
      };
      document.onmouseup = () => {
        this.setIsDrag(false);
        document.onmouseup = null;
        document.onmousemove = null;
      };
    },
    //获取当前preview的left和top相对于screen-viewport，处理嵌套问题
    getLeftATop() {
      let { widgetView: el } = this.$refs;
      let left = el.offsetLeft,
        top = el.offsetTop;

      while ((el = el.offsetParent)) {
        if (el.className === "screen-viewport") {
          return { left, top };
        }
        left += el.offsetLeft;
        top += el.offsetTop;
      }
      return { left, top };
    }
  }
};
</script>
<style lang="less" scoped>
.widget-view {
  position: relative;
  .hover-border {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    box-sizing: border-box;
  }
  .select-border {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px solid blue;
    box-sizing: border-box;
  }
}
</style>
