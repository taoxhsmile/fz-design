<template>
  <div
    id="screens"
    @click="handleClick"
    @mousewheel.stop.prevent="handleMousewheel"
    @mousedown.left.stop="mousedown"
    ref="screens"
  >
    <screenViewport />
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import $ from "jquery";
import screenViewport from "./screenViewport.vue";
export default {
  components: {
    screenViewport
  },
  computed: {
    ...mapGetters({
      translateX: "componentArtBoard/translateX",
      translateY: "componentArtBoard/translateY"
    })
  },
  methods: {
    ...mapMutations({
      setSelectComponent: "pageDesign/setSelectComponent",
      setTranslateX: "componentArtBoard/setTranslateX",
      setTranslateY: "componentArtBoard/setTranslateY"
    }),
    //点击空白区域的时候清空selectComponent
    handleClick() {
      this.setSelectComponent(null);
    },
    //鼠标滚轮事件
    handleMousewheel(e) {
      let { deltaX, deltaY } = e;
      this.setTranslateX(this.translateX - deltaX);
      this.setTranslateY(this.translateY - deltaY);
    },
    mousedown({ clientX: startX, clientY: startY }) {
      let { translateX, translateY } = this;
      let mousemoveFn = ({ clientX: endX, clientY: endY }) => {
          this.setTranslateX(translateX + (endX - startX));
          this.setTranslateY(translateY + (endY - startY));
        },
        mouseupFn = () => {
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
#screens {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease-in-out;
  background: #f8f8f8;
}
</style>
