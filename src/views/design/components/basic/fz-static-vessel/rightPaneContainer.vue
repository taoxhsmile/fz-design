<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 位置 -->
      <rPosition />
      <!-- 背景 -->
      <rBackground />
      <!-- 效果 -->
      <rBoxShadow />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rPosition from "../common/rPosition";
import rBackground from "../common/rBackground";
import rBoxShadow from "../common/rBoxShadow";

export default {
  inject: ["rightPane"],
  components: {
    rPosition,
    rBackground,
    rBoxShadow
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
