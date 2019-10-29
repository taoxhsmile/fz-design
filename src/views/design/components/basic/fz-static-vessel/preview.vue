<template>
  <div
    class="fz-static-vessel-preview component-container"
    :style="[styles]"
    ref="fz-static-vessel-preview"
  >
    <widgetComponentContainer
      style="min-height:30px;"
      :childrens="data._slots"
    />
  </div>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
import widgetComponentContainer from "@design/components/widgetComponentContainer";

export default {
  name: "fz-static-vessel-preview",
  mixins: [previewMixins({ defaultStyles })],
  components: {
    widgetComponentContainer
  }
};
</script>
<style lang="less" scoped>
.fz-static-vessel-preview {
  position: relative;
  overflow: hidden;
  padding-top: 10px;
}
</style>
