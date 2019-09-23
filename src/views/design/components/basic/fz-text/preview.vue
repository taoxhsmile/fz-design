<template>
  <div class="fz-text-preview" :style="[styles]">
    <div class="inner-content">{{ data.content }}</div>
  </div>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-text-preview",
  mixins: [previewMixins({ defaultStyles })]
};
</script>
<style lang="less" scoped>
.fz-text-preview {
  box-sizing: border-box;
  .inner-content {
    white-space: pre-wrap;
    word-break: break-all;
    overflow: hidden;
  }
}
</style>
