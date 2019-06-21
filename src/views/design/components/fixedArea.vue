<template>
  <div class="fixed-area">
    <colorPanel v-if="componentColorPanel.show"></colorPanel>
  </div>
</template>
<script>
import { mapState } from "vuex";
import colorPanel from "./panels/fixed/colorPanel.vue";
export default {
  components: {
    colorPanel
  },
  computed: {
    ...mapState({
      componentColorPanel: "componentColorPanel"
    })
  }
};
</script>
<style lang="less" scoped>
.fixed-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
