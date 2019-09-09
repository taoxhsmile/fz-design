<template>
  <shortcut @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
    <template slot-scope="scope">
      <div class="fz-picture-leftpane">
        <fz-icon name="icontupian"></fz-icon>
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
.fz-picture-leftpane {
  position: relative;
}
</style>
