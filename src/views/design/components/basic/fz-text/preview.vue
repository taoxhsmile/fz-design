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
      return stylesConvert({
        _styles: this.data._styles
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
