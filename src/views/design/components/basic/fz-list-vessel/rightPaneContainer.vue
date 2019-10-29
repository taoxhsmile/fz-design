<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 背景 -->
      <rBackground />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rBackground from "../common/rBackground";

export default {
  inject: ["rightPane"],
  components: {
    rBackground
  }
};
</script>
<style lang="less" scoped>
.align-btns {
  & /deep/ .el-button {
    width: 84px;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
