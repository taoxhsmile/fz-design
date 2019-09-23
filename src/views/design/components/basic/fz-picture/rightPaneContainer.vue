<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 大小 -->
      <rSize />
      <!-- 位置 -->
      <rMargin />
    </el-collapse-item>
    <el-collapse-item title="边框设置" name="2">
      <rBorder />
      <rBoxShadow />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rSize from "../common/rSize";
import rMargin from "../common/rMargin";
import rBorder from "../common/rBorder";
import rBoxShadow from "../common/rBoxShadow";
export default {
  components: {
    rSize,
    rMargin,
    rBorder,
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
