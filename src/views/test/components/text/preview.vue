<template>
  <preview :data="data">
    <div class="text-preview" :style="data._styles">
      <span>文本</span>
    </div>
  </preview>
</template>
<script>
import preview from "../preview.vue";
export default {
  components: {
    preview
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.text-preview {
  cursor: default;
}
</style>
