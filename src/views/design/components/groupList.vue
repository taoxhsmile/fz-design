<template>
  <div class="group-list component-container">
    <!-- 预览数据列表 -->
    <preview :list="list"></preview>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import preview from "./preview.vue";
export default {
  components: {
    preview
  },
  computed: {
    ...mapGetters({
      list: "pageDesign/pageComponents"
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
