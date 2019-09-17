<template>
  <div class="group-list component-container">
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
import { mapGetters } from "vuex";
import getComponents from "./basic/index.js";
import widgetView from "./widgetView";
export default {
  components: {
    ...getComponents("preview"),
    widgetView
  },
  computed: {
    ...mapGetters({
      childrens: "pageDesign/pageComponents"
    })
  }
};
</script>
<style lang="less" scoped>
.group-list {
  position: relative;
  z-index: 1;
  min-height: 667px;
}
</style>
