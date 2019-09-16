<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 大小 -->
      <rSize :_styles="_styles" :_customFeature="_customFeature" />
      <!-- 位置 -->
      <rPosition :_styles="_styles" :_customFeature="_customFeature" />
    </el-collapse-item>
    <el-collapse-item title="边框设置" name="2">
      <!-- <div class="rightpane__content-wrap border">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>样式</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">圆角</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_customFeature.borderRadius"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { borderRadius: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12">
            <el-button type="text">圆形</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle"> </el-row>
      </div> -->
      <rBorder :_styles="_styles" :_customFeature="_customFeature" />
      <rBoxShadow :_styles="_styles" :_customFeature="_customFeature" />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import rSize from "../common/rSize";
import rPosition from "../common/rPosition";
import rBorder from "../common/rBorder";
import rBoxShadow from "../common/rBoxShadow";
export default {
  props: ["selectComponent", "_styles", "_customFeature"],
  components: {
    rSize,
    rPosition,
    rBorder,
    rBoxShadow
  },
  data() {
    return {
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
    setMarginLeft(val) {
      this.setSelectComponentProperty({
        key: "_styles",
        value: { marginLeft: val }
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
