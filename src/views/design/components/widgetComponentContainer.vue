<template>
  <div class="fz-widget-preview component-container">
    <!-- 预览数据列表 -->
    <template v-for="(componentData, i) in childrens">
      <widgetView
        :key="componentData.__id__"
        :data="componentData"
        :list="childrens"
        :index="i"
        :canDrag="getCanDragByComponentType(componentData.__type__)"
        :style="widgetViewStyle(componentData)"
      >
        <component
          :is="componentData.__type__"
          :data-cid="componentData.__id__"
          :data="componentData"
          :list="childrens"
          :index="i"
        ></component>
      </widgetView>
    </template>
  </div>
</template>
<script>
import getComponents, { getPreviewData } from "./basic/index.js";
import widgetView from "./widgetView";
export default {
  props: ["childrens"],
  components: {
    ...getComponents("preview"),
    widgetView
  },
  methods: {
    getCanDragByComponentType(type) {
      let previewData = getPreviewData("previewData")[type];

      if (
        previewData.componentOptions &&
        previewData.componentOptions.canDrag === false
      ) {
        return false;
      }
      return true;
    },
    widgetViewStyle(componentData) {
      if (componentData.__type__ === "fz-popup-window") {
        return {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        };
      }
    }
  }
};
</script>
<style lang="less" scoped>
.fz-widget-preview {
  position: relative;
  min-height: 100%;
}
</style>
