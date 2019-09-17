<template>
  <div class="rightpane__content-wrap border">
    <el-row
      class="rightpane__title"
      type="flex"
      justify="center"
      align="middle"
    >
      <el-col>位置</el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="3">左边</el-col>
      <el-col :span="9">
        <el-input-number
          style="width:88px;"
          controls-position="right"
          :min="0"
          :value="_styles.marginLeft"
          :disabled="_customFeature.align !== 'left'"
          @change="
            val =>
              setSelectComponentProperty({
                key: '_styles',
                value: { marginLeft: val }
              })
          "
        ></el-input-number>
      </el-col>
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
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col class="align-btns">
        <el-button
          :type="_customFeature.align === 'left' ? 'primary' : ''"
          @click="setStylesAlign('left')"
        >
          置左
        </el-button>
        <el-button
          :type="_customFeature.align === 'center' ? 'primary' : ''"
          @click="setStylesAlign('center')"
        >
          居中
        </el-button>
        <el-button
          :type="_customFeature.align === 'right' ? 'primary' : ''"
          @click="setStylesAlign('right')"
        >
          置右
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import rMixins from "./rMixins";
export default {
  mixins: [rMixins],
  methods: {
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
