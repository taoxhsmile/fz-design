<template>
  <div class="fz-popup-window-preview">
    <div
      class="fz-popup-window-mask"
      :style="{ background: customFeature.maskBackgroundColor }"
    ></div>
    <div class="fz-popup-window-content" :style="[styles]">
      <widgetComponentContainer
        :childrens="data._slots"
      ></widgetComponentContainer>
    </div>
  </div>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
import widgetComponentContainer from "@design/components/widgetComponentContainer";
export default {
  name: "fz-popup-window-preview",
  mixins: [previewMixins({ defaultStyles })],
  components: {
    widgetComponentContainer
  },
  computed: {
    customFeature() {
      return this.data.customFeature;
    }
  }
};
</script>
<style lang="less" scoped>
.fz-popup-window-preview {
  box-sizing: border-box;
  height: 100%;
  .fz-popup-window-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .fz-popup-window-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
  }
}
</style>
