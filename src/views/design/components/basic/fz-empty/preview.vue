<template>
  <div class="fz-empty-preview" :style="styles"></div>
</template>
<script>
import previewMixins from "../common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-empty-preview",
  mixins: [previewMixins({ defaultStyles })]
};
</script>
<style lang="less" scoped>
.fz-empty-preview {
}
</style>
