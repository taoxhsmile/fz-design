<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="中隔线设置" name="1">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="4">位置</el-col>
          <el-col :span="12">
            <el-slider
              :value="_customFeature.centerWidth"
              @input="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { centerWidth: val }
                  })
              "
            ></el-slider>
          </el-col>
          <el-col :span="8" style="text-align:center;">
            <el-input-number
              style="width:72px;"
              controls-position="right"
              :min="0"
              :max="99"
              :value="_customFeature.centerWidth"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { centerWidth: val }
                  })
              "
            />
          </el-col>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="点击事件" name="2">
      <rEventClick />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import rEventClick from "../common/rEventClick";
export default {
  inject: ["rightPane"],
  components: {
    rEventClick
  },
  data() {
    return {};
  },
  computed: {
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
