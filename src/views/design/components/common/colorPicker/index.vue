<template>
  <div class="color-picker">
    <div class="color-picker-header" @mousedown="e => $emit('drag', e)">
      <div class="header-text">默认颜色</div>
      <span class="icon dora" @click="() => $emit('close')">times</span>
    </div>
    <div class="color-picker-body">
      <themePalette></themePalette>
      <hsvPicker></hsvPicker>
      <inputSection></inputSection>
      <customColorList></customColorList>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import themePalette from "./components/themePalette.vue";
import hsvPicker from "./components/hsvPicker.vue";
import inputSection from "./components/inputSection.vue";
import customColorList from "./components/customColorList.vue";

export default {
  name: "color-picker",
  componentName: "color-picker",
  components: {
    themePalette,
    hsvPicker,
    inputSection,
    customColorList
  },
  props: {
    color: {
      type: String,
      default: "#FFFFFF"
    }
  },
  computed: {
    ...mapState({
      componentColorPicker: "componentColorPicker"
    }),
    ...mapGetters({
      previewColor: "componentColorPicker/previewColor"
    })
  },
  created() {
    this.parseColor(this.color);
    //使用emitter进行组件信息传递
    this.createEmitter();
  },
  methods: {
    ...mapMutations({
      parseColor: "componentColorPicker/parseColor"
    }),
    createEmitter() {
      this.$on("parent:updateColor", () => {
        this.$emit("update", this.previewColor);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.color-picker {
  box-sizing: border-box;
  position: absolute;
  width: 262px;
  color: #415058;
  background: white;
  border-radius: 4px;
  box-shadow: 0 -2px 20px 0 rgba(39, 54, 78, 0.11);
  font-size: 12px;
  text-align: left;
  .color-picker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    cursor: move;
    .header-text {
      font-size: 12px;
      line-height: 1;
      font-weight: normal;
    }
    .icon {
      padding: 3px;
      margin-right: -3px;
      box-sizing: content-box;
      color: #8d9ea7;
      font-size: 12px;
      cursor: pointer;
    }
    .dora,
    .duodora {
      display: inline-block;
      width: 1em;
      font: normal normal normal 1em/1 Dora;
      font-size: inherit;
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      font-feature-settings: "liga";
      text-rendering: optimizeLegibility;
      font-variant-ligatures: discretionary-ligatures;
    }
  }
  .color-picker-body {
    padding: 0 10px;
  }
}
</style>
