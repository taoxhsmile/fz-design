<template>
  <shortcut @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
    <template slot-scope="scope">
      <div class="leftPane-item">
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
import shortcut from "./shortcut";
import tooltip from "../tooltip";
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
.leftPane-item {
  position: relative;
  width: 26px;
  height: 26px;
  line-height: 26px;
  cursor: pointer;
  color: #6c6d6e;
  text-align: center;
  svg {
    fill: currentColor;
    width: 1em;
  }
  .tooltip {
    display: none;
  }
  &:hover {
    color: rgb(65, 80, 88);
    background-color: rgb(242, 242, 242);
    border-color: rgb(232, 232, 232);
  }
  &:hover .tooltip {
    display: block;
  }
}
</style>
