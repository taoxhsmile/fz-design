<template>
  <div class="text-preview" :style="[styles]">
    <div class="inner-content">{{ data.content }}</div>
  </div>
</template>
<script>
import { stylesConvert } from "@design/components/tools/stylesConvert";
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-text-preview",
  mixins: [previewMixins],
  data() {
    return { defaultStyles };
  },
  computed: {
    styles() {
      let {
        defaultStyles,
        data: {
          _styles,
          _customFeature: {
            useTextShadow,
            textShadow,
            useBoxShadow,
            boxShadow
          },
          inFreeVessel
        }
      } = this;
      //文本阴影
      if (useTextShadow === 1) {
        _styles.textShadow = `${textShadow.hShadow} ${textShadow.vShadow} ${
          textShadow.blur
        } ${textShadow.color}`;
      }
      //box阴影
      if (useBoxShadow === 1) {
        _styles.boxShadow = `${boxShadow.hShadow} ${boxShadow.vShadow} ${
          boxShadow.blur
        } ${boxShadow.color}`;
      }

      _styles = { ...defaultStyles, ..._styles };

      if (inFreeVessel) {
        ["width", "marginTop", "marginLeft", "top", "left", "position"].forEach(
          key => {
            delete _styles[key];
          }
        );
      }

      return stylesConvert({
        _styles
      });
    }
  }
};
</script>
<style lang="less" scoped>
.text-preview {
  line-height: 25px;
  font-size: 12px;
  color: #101010;
  margin: 0 auto;
  box-sizing: border-box;
  .inner-content {
    white-space: pre-wrap;
    word-break: break-all;
    overflow: hidden;
  }
}
</style>
