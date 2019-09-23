<template>
  <div
    class="shortcut"
    @click.stop="_addComponent"
    @mousedown.left.stop="mousedownFn"
  >
    <slot></slot>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import $ from "jquery";
import { drag } from "@design/components/tools/drag";

export default {
  props: ["basicPreviewData"],
  methods: {
    ...mapMutations({
      addComponent: "pageDesign/addComponent",
      setSelectComponent: "pageDesign/setSelectComponent",
      setComponentProperty: "pageDesign/setComponentProperty"
    }),
    //点击添加组件
    _addComponent() {
      this.addComponent({ componentData: this.basicPreviewData.default });
    },
    mousedownFn({ currentTarget }) {
      let dragTarget = $("<div></div>").append(
          $(currentTarget)
            .find(".icon")
            .clone()
        )[0],
        { basicPreviewData } = this;

      drag.call(this, {
        dragTarget,
        dragTargetWidth: 82,
        dragTargetHeight: 52,
        basicPreviewData,
        isCreate: true
      });
    }
  }
};
</script>
<style lang="less" scoped>
.shortcut {
  cursor: pointer;
}
</style>
