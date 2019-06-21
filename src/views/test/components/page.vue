<template>
  <div class="page">
    <component
      v-for="componentData in data"
      :key="componentData.__id__"
      :is="componentData.__type__"
      :data="componentData"
    ></component>
  </div>
</template>
<script>
import preview from "./preview.js";
export default {
  components: {
    ...preview
  },
  //   beforeCreate() {
  //     this.$options.components.bLayout = require("./layout").default;
  //   },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="less" scoped>
.page {
  position: relative;
  z-index: 1;
  // border: 1px dashed blue;
  // min-height: 667px;
}
</style>
