<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 大小 -->
      <rSize
        :_styles="_styles"
        :_customFeature="_customFeature"
        :isLineHeight="true"
      />
      <!-- 位置 -->
      <rPosition :_styles="_styles" :_customFeature="_customFeature" />

      <!-- 背景 -->
      <rBackground :_styles="_styles" :_customFeature="_customFeature" />

      <!-- 字体阴影 -->
      <rTextShadow :_styles="_styles" :_customFeature="_customFeature" />
    </el-collapse-item>
    <el-collapse-item title="边框设置" name="2">
      <!-- 边框 -->
      <rBorder :_styles="_styles" :_customFeature="_customFeature" />
      <rBoxShadow :_customFeature="_customFeature" />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import rSize from "../common/rSize";
import rPosition from "../common/rPosition";
import rBackground from "../common/rBackground";
import rTextShadow from "../common/rTextShadow";
import rBorder from "../common/rBorder";
import rBoxShadow from "../common/rBoxShadow";
export default {
  props: ["selectComponent", "_styles", "_customFeature"],
  components: {
    rSize,
    rPosition,
    rBackground,
    rTextShadow,
    rBorder,
    rBoxShadow
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
