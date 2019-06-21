<template>
  <widgetView :data="data">
    <div class="text-preview" :style="[styles]">
      <div class="inner-content">{{ data.content }}</div>
    </div>
  </widgetView>
</template>
<script>
import { stylesConvert } from "../../tools/stylesConvert.js";
import widgetViewMixin from "../common/widgetViewMixin.js";
export default {
  name: "text-preview",
  mixins: [widgetViewMixin],
  computed: {
    styles() {
      let {
        data: { _styles }
      } = this;
      return stylesConvert({
        propertys: ["position", "left", "top"],
        _styles,
        reverse: true
      });
    }
  }
};
</script>
<style lang="less" scoped>
.text-preview {
  cursor: default;
  height: auto;
  .inner-content {
    white-space: pre-wrap;
    word-break: break-all;
    overflow: hidden;
  }
}
</style>
