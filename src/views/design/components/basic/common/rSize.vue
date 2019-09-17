<template>
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
      <el-col :span="3">{{ isLineHeight ? "行高" : "高度" }}</el-col>
      <el-col :span="9">
        <!-- 行高 -->
        <template v-if="isLineHeight">
          <el-input-number
            style="width:88px;"
            controls-position="right"
            :min="0"
            :value="_styles.lineHeight"
            @change="
              val =>
                setSelectComponentProperty({
                  key: '_styles',
                  value: { lineHeight: val }
                })
            "
          ></el-input-number>
        </template>
        <!-- 高度 -->
        <template v-else>
          <el-input-number
            style="width:88px;"
            controls-position="right"
            :min="0"
            :value="_styles.height"
            @change="
              val =>
                setSelectComponentProperty({
                  key: '_styles',
                  value: { height: val }
                })
            "
          ></el-input-number>
        </template>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import rMixins from "./rMixins";
export default {
  mixins: [rMixins],
  props: ["isLineHeight"]
};
</script>
