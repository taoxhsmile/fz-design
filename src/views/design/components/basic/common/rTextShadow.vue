<template>
  <div class="rightpane__content-wrap">
    <el-row
      class="rightpane__title"
      type="flex"
      justify="center"
      align="middle"
    >
      <el-col>效果</el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="12">
        <el-radio
          :value="customFeature.useTextShadow"
          @input="
            val =>
              setSelectComponentProperty({
                key: 'customFeature',
                value: { useTextShadow: val }
              })
          "
          :label="0"
          >无效果</el-radio
        >
      </el-col>
      <el-col :span="12">
        <el-radio
          :value="customFeature.useTextShadow"
          @input="
            val =>
              setSelectComponentProperty({
                key: 'customFeature',
                value: { useTextShadow: val }
              })
          "
          :label="1"
          >阴影</el-radio
        >
      </el-col>
    </el-row>

    <div v-show="customFeature.useTextShadow === 1">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="5">模糊半径</el-col>
        <el-col :span="7">
          <el-input-number
            style="width:68px;"
            controls-position="right"
            :min="0"
            :value="customFeature.textShadow.blur"
            @change="
              val =>
                setSelectComponentProperty({
                  key: 'customFeature.textShadow',
                  value: { blur: val }
                })
            "
          ></el-input-number>
        </el-col>
        <el-col :span="5">阴影颜色</el-col>
        <el-col :span="7">
          <el-color-picker
            :value="customFeature.textShadow.color"
            @active-change="
              val =>
                setSelectComponentProperty({
                  key: 'customFeature.textShadow',
                  value: { color: val }
                })
            "
            show-alpha
          ></el-color-picker>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="5">X轴偏移</el-col>
        <el-col :span="7">
          <el-input-number
            style="width:68px;"
            controls-position="right"
            :min="0"
            :value="customFeature.textShadow.hShadow"
            @change="
              val =>
                setSelectComponentProperty({
                  key: 'customFeature.textShadow',
                  value: { hShadow: val }
                })
            "
          ></el-input-number>
        </el-col>
        <el-col :span="5">Y轴偏移</el-col>
        <el-col :span="7">
          <el-input-number
            style="width:68px;"
            controls-position="right"
            :min="0"
            :value="customFeature.textShadow.vShadow"
            @change="
              val =>
                setSelectComponentProperty({
                  key: 'customFeature.textShadow',
                  value: { vShadow: val }
                })
            "
          ></el-input-number>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import rMixins from "./rMixins";
export default {
  mixins: [rMixins]
};
</script>
