<template>
  <el-collapse :value="['1']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 边框 -->
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
              :value="_customFeature.borderBottomStyle"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { borderBottomStyle: val }
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
              :value="_customFeature.borderBottomWidth"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { borderBottomWidth: val }
                  })
              "
            ></el-input-number>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">颜色</el-col>
          <el-col :span="9">
            <el-color-picker
              :value="_customFeature.borderBottomColor"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { borderBottomColor: val }
                  })
              "
              show-alpha
            ></el-color-picker>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>

      <div class="rightpane__content-wrap border">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>大小</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">宽度</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_styles.width"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { width: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>
      <!-- 位置 -->
      <rPosition />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import rPosition from "../common/rPosition";
export default {
  inject: ["rightPane"],
  components: {
    rPosition
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
    _customFeature() {
      return this.rightPane._customFeature;
    },
    _styles() {
      return this.rightPane._styles;
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
ul.font-style {
  display: flex;
  padding: 0px 5px;
  border-radius: 4px;
  border: 1px solid rgba(216, 220, 230, 1);
  width: 118px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 32px;
  li {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    border-radius: 4px;
    color: #909399;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active {
      background: #409eff;
      color: white;
    }
  }
}
</style>
