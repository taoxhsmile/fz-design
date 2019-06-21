<template>
  <!-- 负责定位颜色选择器 -->
  <div class="color-panel" :style="style">
    <!-- 颜色选择器 -->
    <colorPicker
      :color="componentColorPanel.color"
      @drag="handleDrag"
      @update="handleUpdate"
      @close="handleClose"
    ></colorPicker>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import colorPicker from "@design/components/common/colorPicker/index.vue";
export default {
  components: {
    colorPicker
  },
  computed: {
    ...mapState({
      componentColorPanel: "componentColorPanel"
    }),
    style() {
      let {
        position: { left, top }
      } = this.componentColorPanel;
      return {
        left: `${left}px`,
        top: `${top}px`
      };
    }
  },
  methods: {
    ...mapMutations({
      setPosition: "componentColorPanel/setPosition",
      setShow: "componentColorPanel/setShow"
    }),
    //处理拖拽 todo 拖拽统一封装一个组件
    handleDrag(e) {
      let { clientX: startX, clientY: startY } = e;
      let {
        position: { left, top }
      } = this.componentColorPanel;

      document.onmousemove = e => {
        let { clientX: endX, clientY: endY } = e;
        let _left = endX - startX + left,
          _top = endY - startY + top;

        this.setPosition({
          left: _left,
          top: _top
        });
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    //修改颜色
    handleUpdate(color) {
      this.componentColorPanel.callback(color);
    },
    //关闭弹窗
    handleClose() {
      this.setShow(false);
    }
  }
};
</script>
<style lang="less" scoped>
.color-panel {
  position: fixed;
  z-index: 200;
}
</style>
