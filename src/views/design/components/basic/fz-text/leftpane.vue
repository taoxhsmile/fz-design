<template>
  <shortcut @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
    <template slot-scope="scope">
      <div class="text-leftpane">
        <fz-icon name="iconwenben"></fz-icon>
        <p>{{ scope.data.shorterName }}</p>
      </div>
    </template>
  </shortcut>
</template>
<script>
import shortcut from "./_shortcut";
export default {
  components: {
    shortcut
  },
  data() {
    return {};
  },
  methods: {
    mousedown() {},
    mousemove() {},
    mouseup() {}
  }
};
</script>
<style lang="less" scoped>
.text-leftpane {
  position: relative;
}
</style>
