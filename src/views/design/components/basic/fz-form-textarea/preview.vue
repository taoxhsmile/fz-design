<template>
  <div class="fz-form-textarea-preview" :style="[styles]">
    <el-input
      type="textarea"
      :rows="2"
      :placeholder="customFeature.placeholder"
    ></el-input>
  </div>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-form-textarea-preview",
  mixins: [previewMixins({ defaultStyles })],
  computed: {
    customFeature() {
      return this.data.customFeature;
    }
  }
};
</script>
<style lang="less" scoped>
.fz-form-textarea-preview {
}
</style>
