<template>
  <div class="shortcut" @click.stop="_addComponent">
    <slot></slot>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["basicPreviewData"],
  methods: {
    ...mapMutations({
      addComponent: "pageDesign/addComponent"
    }),
    _addComponent() {
      let {
        basicPreviewData: { data }
      } = this;
      let _styles = {
        ...data._styles
      };
      this.addComponent({ ...data, _styles });
    }
  }
};
</script>
<style lang="less" scoped>
.shortcut {
  cursor: pointer;
}
</style>
