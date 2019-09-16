<template>
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
          :value="_styles.borderStyle"
          @change="
            val =>
              setSelectComponentProperty({
                key: '_styles',
                value: { borderStyle: val }
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
          :value="_styles.borderWidth"
          @change="
            val =>
              setSelectComponentProperty({
                key: '_styles',
                value: { borderWidth: val }
              })
          "
        ></el-input-number>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="3">颜色</el-col>
      <el-col :span="9">
        <el-color-picker
          :value="_styles.borderColor"
          @change="
            val =>
              setSelectComponentProperty({
                key: '_styles',
                value: { borderColor: val }
              })
          "
          show-alpha
        ></el-color-picker>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["_styles", "_customFeature"],
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
    })
  }
};
</script>
