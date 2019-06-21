<template>
  <div
    class="preview"
    @click.stop="setSelectComponent"
    @mouseenter.stop="mouseenter"
    @mouseleave="mouseleave"
  >
    <slot></slot>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    ...mapMutations({
      setHoverComponent: "pageDesign/setHoverComponent",
      setSelectComponent: "pageDesign/setSelectComponent"
    }),
    mouseenter() {
      this.setHoverComponent(this.data);
    },
    mouseleave() {
      this.setHoverComponent(null);
    },
    setSelectComponent() {
      this.setSelectComponent(this.data);
    }
  }
};
</script>
