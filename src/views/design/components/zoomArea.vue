<template>
  <div class="zoom-area" style="transform: scale(1);">
    <canvasArea />
  </div>
</template>
<script>
import canvasArea from "./canvasArea.vue";
export default {
  name: "zoomArea",
  components: {
    canvasArea
  }
};
</script>

<style lang="less" scoped>
.zoom-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
}
</style>
