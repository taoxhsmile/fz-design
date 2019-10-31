<template>
  <div class="fz-form-vessel-preview component-container" :style="[styles]">
    <div class="fz-form-vessel-content">
      <widgetComponentContainer
        style="min-height:30px;"
        :childrens="data._slots"
      />
    </div>
  </div>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
import widgetComponentContainer from "@design/components/widgetComponentContainer";

export default {
  name: "fz-form-vessel-preview",
  mixins: [previewMixins({ defaultStyles })],
  components: {
    widgetComponentContainer
  }
};
</script>
<style lang="less" scoped>
.fz-form-vessel-preview {
  padding-top: 10px;
}
</style>
