<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 大小 -->
      <rSize></rSize>
      <!-- 位置 -->
      <rMargin />
      <!-- 背景 -->
      <rBackground />
    </el-collapse-item>
    <el-collapse-item title="边框设置" name="2">
      <!-- 阴影 -->
      <rBoxShadow />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import rSize from "../common/rSize";
import rMargin from "../common/rMargin";
import rBackground from "../common/rBackground";
import rBoxShadow from "../common/rBoxShadow";
export default {
  components: {
    rSize,
    rMargin,
    rBackground,
    rBoxShadow
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    }),
    setStylesAlign(val) {
      this.setSelectComponentProperty({
        key: "customFeature",
        value: { align: val }
      });
      this.setSelectComponentProperty({
        key: "_styles",
        value: {
          marginLeft: val === "left" ? 0 : "auto",
          marginRight: val === "right" ? 0 : "auto"
        }
      });
    }
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
