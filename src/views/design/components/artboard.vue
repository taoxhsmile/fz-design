<template>
  <div class="artboard">
    <ruler></ruler>
    <artboardScroll></artboardScroll>
  </div>
</template>
<script>
import ruler from "./ruler.vue";
import artboardScroll from "./artboardScroll.vue";
export default {
  components: {
    ruler,
    artboardScroll
  }
};
</script>
<style lang="less" scoped>
.artboard {
  flex: 1;
  position: relative;
  pointer-events: none;
}
</style>
