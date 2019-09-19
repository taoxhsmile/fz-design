<template>
  <div class="widget-component-container component-container">
    <!-- 预览数据列表 -->
    <template v-for="(componentData, i) in childrens">
      <widgetView
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
      </widgetView>
    </template>
  </div>
</template>
<script>
import getComponents from "./basic/index.js";
import widgetView from "./widgetView";
export default {
  props: ["childrens"],
  components: {
    ...getComponents("preview"),
    widgetView
  }
};
</script>
<style lang="less" scoped>
.widget-component-container {
  position: relative;
}
</style>
