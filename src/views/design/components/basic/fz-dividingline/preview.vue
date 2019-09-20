<template>
  <div class="fz-dividingline-preview" :style="styles">
    <div class="inner-content" :style="[innerContentStyle]"></div>
  </div>
</template>
<script>
import previewMixins from "../common/previewMixins";
import { defaultStyles } from "./previewData";
import { stylesConvert } from "@design/components/tools/stylesConvert";

export default {
  name: "fz-dividingline-preview",
  mixins: [previewMixins],
  data() {
    return { defaultStyles };
  },
  computed: {
    _customFeature() {
      return this.data._customFeature;
    },
    innerContentStyle() {
      let {
        _customFeature: {
          borderBottomStyle,
          borderBottomWidth,
          borderBottomColor
        }
      } = this;
      return stylesConvert({
        _styles: {
          borderBottomStyle,
          borderBottomWidth,
          borderBottomColor
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.fz-dividingline-preview {
  padding: 10px 0;
}
</style>
