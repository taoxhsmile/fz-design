<template>
  <ul class="theme-palette">
    <li
      class="theme-palette-color"
      v-for="(color, i) in componentInfo.themePaletteColors"
      :key="i"
      :style="`background-color: ${color};`"
      :class="{ transparent: color === 'transparent' }"
      @click="handleClick(color)"
    ></li>
  </ul>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import emitterMixin from "@/mixins/emitter.js";
export default {
  mixins: [emitterMixin],
  computed: {
    ...mapState({
      componentInfo: "componentColorPicker"
    })
  },
  methods: {
    ...mapMutations({
      parseColor: "componentColorPicker/parseColor"
    }),
    handleClick(color) {
      this.parseColor(color);
      this.dispatch("color-picker", "parent:updateColor");
    }
  }
};
</script>
<style lang="less" scoped>
.theme-palette {
  display: flex;
  padding: 8px 0 10px;
  margin: 0;
  .theme-palette-color {
    &.transparent {
      position: relative;
      overflow: hidden;
      background-image: linear-gradient(45deg, #ccc 26%, transparent 26%),
        linear-gradient(-45deg, #ccc 26%, transparent 26%),
        linear-gradient(45deg, transparent 73%, #ccc 73%),
        linear-gradient(-45deg, transparent 73%, #ccc 73%);
      background-size: 6px 6px;
      background-position: 0 0, 0 3px, 3px -3px, -3px 0;
    }
    &:not(:last-child) {
      margin-right: 10px;
    }
    list-style: none;
    width: 18px;
    height: 18px;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
}
</style>
