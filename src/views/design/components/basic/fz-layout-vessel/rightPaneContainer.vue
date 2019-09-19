<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 位置 -->
      <div class="rightpane__content-wrap border">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>间距</el-col>
        </el-row>
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col :span="3">上边</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_styles.marginTop"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { marginTop: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>
      <!-- 背景 -->
      <rBackground />
    </el-collapse-item>
    <el-collapse-item title="中隔线设置" name="2">
      <div class="rightpane__content-wrap border">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>边框</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">样式</el-col>
          <el-col :span="9">
            <el-select
              style="width:88px;"
              :value="_customFeature.cellBorderStyle"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { cellBorderStyle: val }
                  })
              "
              placeholder="请选择"
            >
              <el-option
                v-for="item in borderStyleOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">粗细</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_customFeature.cellBorderWidth"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { cellBorderWidth: val }
                  })
              "
            ></el-input-number>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">颜色</el-col>
          <el-col :span="9">
            <el-color-picker
              :value="_customFeature.cellBorderColor"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { cellBorderColor: val }
                  })
              "
              show-alpha
            ></el-color-picker>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import rBackground from "../common/rBackground";
export default {
  inject: ["rightPane"],
  components: {
    rBackground
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
  computed: {
    _styles() {
      return this.rightPane._styles;
    },
    _customFeature() {
      return this.rightPane._customFeature;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
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
