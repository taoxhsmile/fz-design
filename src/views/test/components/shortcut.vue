<template>
  <div
    class="shortcut"
    @mousedown="mousedown"
    @mousemove="mousemove"
    @mouseup="mouseup"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  methods: {
    mousedown($event) {
      this.$emit("mousedown", $event);
    },
    mousemove() {},
    mouseup() {
      this.$emit("mouseup");
    }
  }
};
</script>
