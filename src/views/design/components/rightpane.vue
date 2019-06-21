<template>
  <div class="rightpane">
    <!-- 属性 -->
    <rightpaneContent />
  </div>
</template>
<script>
import rightpaneContent from "./rightpaneContent";
export default {
  components: {
    rightpaneContent
  }
};
</script>
<style lang="less" scoped>
.rightpane {
  position: relative;
  width: 250px;
  display: flex;
  box-shadow: rgba(39, 54, 78, 0.11) 0px -2px 30px 0px;
  z-index: 4;
}
</style>
