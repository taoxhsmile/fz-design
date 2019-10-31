<template>
  <button class="fz-form-button-preview" :style="[styles]">
    {{ data.content }}
  </button>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-form-button-preview",
  mixins: [previewMixins({ defaultStyles })]
};
</script>
<style lang="less" scoped>
.fz-form-button-preview {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  display: block;
  outline: none;
  width: 100%;
  height: 100%;
}
</style>
