<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 大小 -->
      <rSize />
      <!-- 位置 -->
      <rMargin />
      <!-- 背景 -->
      <rBackground />
    </el-collapse-item>
    <el-collapse-item title="边框设置" name="2">
      <!-- 边框 -->
      <rBorder />
      <rBoxShadow />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rSize from "../common/rSize";
import rMargin from "../common/rMargin";
import rBackground from "../common/rBackground";
import rBorder from "../common/rBorder";
import rBoxShadow from "../common/rBoxShadow";
export default {
  components: {
    rSize,
    rMargin,
    rBackground,
    rBorder,
    rBoxShadow
  }
};
</script>
