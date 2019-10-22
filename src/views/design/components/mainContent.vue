<template>
  <div class="main-content">
    <screens />
    <leftpane />
    <!-- todo:放快捷方式说明之类的弹窗 -->
    <viewport />
    <rightpane />
  </div>
</template>
<script>
import screens from "./screens.vue";
import leftpane from "./leftpane.vue";
import viewport from "./viewport.vue";
import rightpane from "./rightpane.vue";
export default {
  components: {
    screens,
    leftpane,
    viewport,
    rightpane
  }
};
</script>
<style lang="less" scoped>
.main-content {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
</style>
