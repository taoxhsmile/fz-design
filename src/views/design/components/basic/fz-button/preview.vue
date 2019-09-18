<template>
  <button class="button-preview" :style="[styles]">
    {{ data.content }}
  </button>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-button-preview",
  mixins: [previewMixins],
  data() {
    return { defaultStyles };
  }
};
</script>
<style lang="less" scoped>
.button-preview {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  display: block;
  outline: none;
}
</style>
