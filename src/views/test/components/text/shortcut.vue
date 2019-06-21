<template>
  <shortcut
    @mousedown="() => $emit('mousedown')"
    @mousemove="() => $emit('mousemove')"
    @mouseup="mouseup"
  >
    <slot :data="data"></slot>
  </shortcut>
</template>
<script>
import { mapMutations /*, , mapActions*/ } from "vuex";
import shortcut from "../shortcut";
import previewData from "./previewData";

export default {
  components: {
    shortcut
  },
  data() {
    return {
      data: {
        shorterName: "文字",
        shorterPing: "T"
      }
    };
  },
  methods: {
    ...mapMutations({
      addComponent: "pageDesign/addComponent"
    }),
    mouseup() {
      // 创建一个preview实例 并且设置指定移动的指
      let _styles = {
        ...previewData._styles,
        left: `${Math.random() * 100}px`,
        top: `${Math.random() * 100}px`
      };
      this.addComponent({ ...previewData, _styles });
    }
  }
};
</script>
