<template>
  <div
    class="screen-viewport"
    :style="
      `width: 375px; height: 667px; min-width: 375px; min-height: 667px; transform: matrix(1, 0, 0, 1, ${
        componentArtBoard.translateX
      }, ${componentArtBoard.translateY});`
    "
  >
    <noZoomAreaB />
    <zoomArea />
  </div>
</template>
<script>
import noZoomAreaB from "./noZoomAreaB.vue";
import zoomArea from "./zoomArea.vue";
import { mapState } from "vuex";
export default {
  components: {
    noZoomAreaB,
    zoomArea
  },
  computed: {
    ...mapState({
      componentArtBoard: "componentArtBoard"
    })
  }
};
</script>
<style lang="less" scoped>
.screen-viewport {
  position: relative;
}
</style>
