<template>
  <div class="free-vessel-preview component-container" :style="[styles]">
    自由面板
    {{ childrens }}
    <freeWidgetView></freeWidgetView>
  </div>
</template>
<script>
import { stylesConvert } from "@design/components/tools/stylesConvert";
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
import freeWidgetView from "@design/components/freeWidgetView";
import getComponents from "@design/components/basic/index.js";
export default {
  name: "free-vessel-preview",
  mixins: [previewMixins],
  components: {
    ...getComponents("preview"),
    freeWidgetView
  },
  data() {
    return { defaultStyles };
  },
  computed: {
    styles() {
      let {
        defaultStyles,
        data: { _styles }
      } = this;
      return stylesConvert({
        _styles: { ...defaultStyles, ..._styles }
      });
    },
    childrens() {
      return this.data._slots;
    }
  }
};
</script>
