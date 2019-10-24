<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="边框设置" name="1">
      <el-col :span="3">背景</el-col>
      <el-col :span="9">
        <el-color-picker
          :value="customFeature.maskBackgroundColor"
          @active-change="
            val =>
              setSelectComponentProperty({
                key: 'customFeature.maskBackgroundColor',
                value: val
              })
          "
          show-alpha
        ></el-color-picker>
      </el-col>
      <el-col :span="12"></el-col>
    </el-collapse-item>
    <el-collapse-item title="组件设置" name="2">
      <!-- 大小 -->
      <rSize />
      <!-- 位置 -->
      <rMargin />
      <!-- 背景 -->
      <rBackground :show-alpha="false" />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rSize from "../common/rSize";
import rMargin from "../common/rMargin";
import rBackground from "../common/rBackground";
import { mapMutations } from "vuex";
export default {
  inject: ["rightPane"],
  components: {
    rSize,
    rMargin,
    rBackground
  },
  computed: {
    selectComponent() {
      return this.rightPane.selectComponent;
    },
    customFeature() {
      return this.selectComponent.customFeature;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
