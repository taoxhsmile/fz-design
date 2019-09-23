<template>
  <div class="fz-free-vessel-preview component-container" :style="[styles]">
    <template v-for="(componentData, i) in childrens">
      <freeWidgetView
        :key="componentData.__id__"
        :data="componentData"
        :list="childrens"
        :index="i"
      >
        <component
          :is="componentData.__type__"
          :data-cid="componentData.__id__"
          :data="componentData"
          :list="childrens"
          :index="i"
        ></component>
      </freeWidgetView>
    </template>
  </div>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import freeWidgetView from "@design/components/freeWidgetView";
import getComponents from "@design/components/basic/index.js";
import { defaultStyles } from "./previewData";

export default {
  name: "fz-free-vessel-preview",
  mixins: [previewMixins({ defaultStyles })],
  components: {
    ...getComponents("preview"),
    freeWidgetView
  },
  computed: {
    childrens() {
      return this.data._slots;
    }
  }
};
</script>
<style lang="less" scoped>
.fz-free-vessel-preview {
  position: relative;
  overflow: hidden;
}
</style>
