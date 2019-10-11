<template>
  <el-collapse :value="['1']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 大小 -->
      <rSize />
      <!-- 位置 -->
      <rMargin :type="5" />
      <!-- 颜色 -->
      <rBackground />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rSize from "../common/rSize";
import rMargin from "../common/rMargin";
import rBackground from "../common/rBackground";
export default {
  components: {
    rSize,
    rMargin,
    rBackground
  }
};
</script>
