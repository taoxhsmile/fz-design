<template>
  <div class="rightpane__content-wrap border">
    <el-row
      class="rightpane__title"
      type="flex"
      justify="center"
      align="middle"
    >
      <el-col>颜色</el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="3">背景</el-col>
      <el-col :span="9">
        <!-- 使用透明 -->
        <el-color-picker
          v-if="showAlpha"
          :value="_styles.backgroundColor"
          @active-change="
            val =>
              setSelectComponentProperty({
                key: '_styles',
                value: { backgroundColor: val }
              })
          "
          show-alpha
        ></el-color-picker>
        <!-- 不使用透明 -->
        <el-color-picker
          v-else
          :value="_styles.backgroundColor"
          @active-change="
            val =>
              setSelectComponentProperty({
                key: '_styles',
                value: { backgroundColor: val }
              })
          "
        ></el-color-picker>
      </el-col>
      <el-col :span="12">
        <!-- <el-button type="text">设置背景图</el-button> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
import rMixins from "./rMixins";
export default {
  mixins: [rMixins],
  props: {
    showAlpha: {
      type: Boolean,
      default: true
    }
  }
};
</script>
