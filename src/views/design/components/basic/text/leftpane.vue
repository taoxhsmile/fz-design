<template>
  <shortcut @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
    <template slot-scope="scope">
      <div class="text-leftpane">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-icon icon icon"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            d="M9 17V4H4v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4h-5v13h1a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2h1z"
          ></path>
        </svg>
        <tooltip
          :leftText="scope.data.shorterName"
          :rightText="scope.data.shorterPing"
        ></tooltip>
      </div>
    </template>
  </shortcut>
</template>
<script>
import shortcut from "./_shortcut";
import tooltip from "../common/tooltip";
export default {
  components: {
    tooltip,
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
  display: flex;
  justify-content: center;
  align-items: center;
  .tooltip {
    display: none;
  }
}
</style>
