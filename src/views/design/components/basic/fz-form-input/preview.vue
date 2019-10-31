<template>
  <div class="fz-form-input-preview" :style="[styles]">
    <el-input :placeholder="customFeature.placeholder"></el-input>
  </div>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-form-input-preview",
  mixins: [previewMixins({ defaultStyles })],
  computed: {
    customFeature() {
      return this.data.customFeature;
    }
  }
};
</script>
<style lang="less" scoped>
.fz-form-input-preview {
}
</style>
