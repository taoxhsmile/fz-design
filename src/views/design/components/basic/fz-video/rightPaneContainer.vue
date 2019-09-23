<template>
  <el-collapse :value="['1']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 大小 -->
      <rSize />
      <!-- 位置 -->
      <rMargin />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rSize from "../common/rSize";
import rMargin from "../common/rMargin";
export default {
  components: {
    rSize,
    rMargin
  }
};
</script>
