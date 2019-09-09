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
  width: 345px;
  display: flex;
  box-shadow: rgba(39, 54, 78, 0.11) 0px -2px 30px 0px;
  z-index: 4;
  border-left: 1px solid rgb(222, 222, 228);
  & /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border-radius: 0;
  }
  & /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
  }
  & /deep/ .el-tabs__item {
    height: 56px;
    line-height: 56px;
  }
}
</style>
