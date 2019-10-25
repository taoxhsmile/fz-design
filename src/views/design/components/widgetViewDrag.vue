<template>
  <div
    class="drag"
    v-show="data === hoverComponent"
    @click.stop
    @mousedown.left.stop="mousedownFn"
  ></div>
</template>
<script>
import { mapGetters } from "vuex";
import { drag } from "@design/components/tools/drag";

export default {
  props: ["list", "index", "data"],
  computed: {
    ...mapGetters({
      hoverComponent: "pageDesign/hoverComponent"
    })
  },
  methods: {
    // 拖拽preview
    mousedownFn({ pageX, pageY, currentTarget }) {
      let dragTarget = currentTarget.parentNode;

      drag.call(this, {
        dragTarget,
        pageX,
        pageY,
        insertIndex: this.index,
        insertList: this.list,
        insertDirection: "top",
        componentList: this.list,
        componentIndex: this.index,
        componentData: this.data,
        isCreate: false,
        store: this.$store
      });
    }
  }
};
</script>
<style lang="less" scoped>
.drag {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 900;
  transform: translateX(-50%);
  width: 58px;
  height: 26px;
  background: url(../../../assets/images/widgetView_drag.png) no-repeat center
    center;
  background-size: 100% 100%;
  cursor: move;
}
</style>
