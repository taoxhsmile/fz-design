<template>
  <shortcut @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
    <template slot-scope="scope">
      <div class="picture-leftpane">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-icon icon icon"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            d="M2 1h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 3v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zm1 11.048V14l2.665-2.665a1 1 0 0 1 1.521.126l1.02 1.427a1 1 0 0 0 1.614.02l2.776-3.702a1 1 0 0 1 1.663.096L17 14v1.004a1 1 0 0 1-.996 1l-12 .044a1 1 0 0 1-1.004-1zM6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
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
.picture-leftpane {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .tooltip {
    display: none;
  }
}
</style>
