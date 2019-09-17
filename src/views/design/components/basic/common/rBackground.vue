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
        <el-color-picker
          :value="_styles.backgroundColor"
          @change="
            val =>
              setSelectComponentProperty({
                key: '_styles',
                value: { backgroundColor: val }
              })
          "
          show-alpha
        ></el-color-picker>
      </el-col>
      <el-col :span="12">
        <el-button type="text">设置背景图</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import rMixins from "./rMixins";
export default {
  mixins: [rMixins]
};
</script>
