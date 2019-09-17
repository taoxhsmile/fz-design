<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 大小 -->
      <rSize></rSize>
      <!-- 位置 -->
      <rPosition />
      <!-- 背景 -->
      <rBackground />
    </el-collapse-item>
    <el-collapse-item title="边框设置" name="2">
      <rBoxShadow />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import rSize from "../common/rSize";
import rPosition from "../common/rPosition";
import rBackground from "../common/rBackground";
import rBoxShadow from "../common/rBoxShadow";
export default {
  components: {
    rSize,
    rPosition,
    rBackground,
    rBoxShadow
  },
  data() {
    return {
      color: "red",
      borderStyleOptions: [
        {
          label: "无",
          value: "none"
        },
        {
          label: "实线",
          value: "solid"
        },
        {
          label: "点线",
          value: "dotted"
        },
        {
          label: "虚线",
          value: "dashed"
        }
      ]
    };
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    }),
    setStylesAlign(val) {
      this.setSelectComponentProperty({
        key: "_customFeature",
        value: { align: val }
      });
      this.setSelectComponentProperty({
        key: "_styles",
        value: {
          marginLeft: val === "left" ? 0 : "auto",
          marginRight: val === "right" ? 0 : "auto"
        }
      });
    },
    handleClick() {
      this.color = "green";
      console.log("111");
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
