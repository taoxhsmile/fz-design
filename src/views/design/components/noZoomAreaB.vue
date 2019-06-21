<template>
  <div
    class="no-zoom-area"
    style="top: 0%; left: 0%; width: 100%; height: 100%;"
  >
    <noZoomAreaBScreen></noZoomAreaBScreen>
  </div>
</template>
<script>
import noZoomAreaBScreen from "./noZoomAreaBScreen.vue";
export default {
  components: {
    noZoomAreaBScreen
  }
};
</script>
<style lang="less" scoped>
.no-zoom-area {
  position: absolute;
  pointer-events: none;
}
</style>
