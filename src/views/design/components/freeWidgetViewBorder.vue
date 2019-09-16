<template>
  <div
    class="border"
    v-show="data === hoverComponent || data === selectComponent"
  >
    <div class="border-left"></div>
    <div class="border-top"></div>
    <div class="border-right"></div>
    <div class="border-bottom"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["data"],
  computed: {
    ...mapGetters({
      hoverComponent: "pageDesign/hoverComponent",
      selectComponent: "pageDesign/selectComponent"
    })
  }
};
</script>
<style lang="less" scoped>
.border {
  div {
    position: absolute;
  }
  .border-left {
    left: 0;
    top: 0;
    height: 100%;
    border-left: 1px dashed #f56c6c;
  }
  .border-top {
    left: 0;
    top: 0;
    width: 100%;
    border-top: 1px dashed #f56c6c;
  }
  .border-right {
    right: 0;
    top: 0;
    height: 100%;
    border-right: 1px dashed #f56c6c;
  }
  .border-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed #f56c6c;
  }
}
</style>
