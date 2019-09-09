<template>
  <div class="leftpane">
    <div class="leftpane-content">
      <!-- 组件库 -->
      <template v-if="basicWidgetsFunctionalListActiveIndex === 0">
        <leftpaneComponentLibrary></leftpaneComponentLibrary>
      </template>
      <!-- 图标库 -->
      <template v-if="basicWidgetsFunctionalListActiveIndex === 1">
        图标库
      </template>
      <!-- 素材库 -->
      <template v-if="basicWidgetsFunctionalListActiveIndex === 2">
        素材库
      </template>
      <!-- 页面库 -->
      <template v-if="basicWidgetsFunctionalListActiveIndex === 3">
        <leftpanePageLibrary></leftpanePageLibrary>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import leftpaneComponentLibrary from "./leftpaneComponentLibrary";
import leftpanePageLibrary from "./leftpanePageLibrary";
export default {
  components: {
    leftpaneComponentLibrary,
    leftpanePageLibrary
  },
  computed: {
    ...mapGetters({
      basicWidgetsFunctionalListActiveIndex:
        "componentBasicWidgetsFunctionalList/activeIndex"
    })
  }
};
</script>
<style lang="less" scoped>
.leftpane {
  box-sizing: content-box;
  position: relative;
  flex-shrink: 0;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  box-shadow: rgba(213, 213, 213, 0.5) 0px 2px 30px 0px;
  font-size: 12px;
  z-index: 4;
  background: white;
  width: 300px;
  .leftpane-content {
    position: absolute;
    width: 100%;
    right: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
