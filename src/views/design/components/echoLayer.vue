<template>
  <div v-if="echoComponent" class="echo-layer" :style="[styles]"></div>
</template>
<script>
import { mapGetters } from "vuex";
import { stylesConvert } from "@design/components/tools/stylesConvert.js";
export default {
  computed: {
    ...mapGetters({
      echoComponent: "pageDesign/echoComponent",
      fixAreaStyles: "pageDesign/fixAreaStyles"
    }),
    styles() {
      let { fixAreaStyles } = this;
      return stylesConvert({
        propertys: ["width", "height", "left", "top", "borderRadius"],
        _styles: fixAreaStyles["echoLayer"]
      });
    }
  }
};
</script>

<style lang="less" scoped>
.echo-layer {
  border: 1px solid #288df8;
  background-color: rgba(41, 141, 248, 0.3);
  position: absolute;
}
</style>
