<template>
  <el-collapse :value="['1']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 位置 -->
      <rMargin :type="2" />
      <!-- 背景 -->
      <rBackground />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rMargin from "../common/rMargin";
import rBackground from "../common/rBackground";
export default {
  components: {
    rMargin,
    rBackground
  }
};
</script>
