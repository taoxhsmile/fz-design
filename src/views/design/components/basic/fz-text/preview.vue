<template>
  <div class="text-preview" :style="styles">
    <div class="inner-content">{{ data.content }}</div>
  </div>
</template>
<script>
import { stylesConvert } from "@design/components/tools/stylesConvert";
import previewMixins from "@design/components/basic/common/previewMixins";
export default {
  name: "text-preview",
  mixins: [previewMixins],
  computed: {
    styles() {
      let {
        _styles,
        _customFeature: { useTextShadow, textShadow, useBoxShadow, boxShadow }
      } = this.data;

      if (useTextShadow === 1) {
        _styles = {
          ..._styles,
          textShadow: `${textShadow.hShadow} ${textShadow.vShadow} ${
            textShadow.blur
          } ${textShadow.color}`
        };
      }

      if (useBoxShadow === 1) {
        _styles = {
          ..._styles,
          boxShadow: `${boxShadow.hShadow} ${boxShadow.vShadow} ${
            boxShadow.blur
          } ${boxShadow.color}`
        };
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
  .inner-content {
    white-space: pre-wrap;
    word-break: break-all;
    overflow: hidden;
  }
}
</style>
