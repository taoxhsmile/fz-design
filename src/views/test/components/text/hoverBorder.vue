<template>
  <div class="text-hover-border" :style="[data._styles]"></div>
</template>
<script>
export default {
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
.text-hover-border {
  border: 1px solid red;
  // background: rgba(255, 0, 0, 0.3);
}
</style>
