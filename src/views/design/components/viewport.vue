<template>
  <div class="viewport" ref="viewport">
    <artboard></artboard>
    <artboardFooter></artboardFooter>
  </div>
</template>
<script>
import artboard from "./artboard.vue";
import artboardFooter from "./artboardFooter.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    artboard,
    artboardFooter
  },
  mounted() {
    this.initResizeEvent();
  },
  methods: {
    ...mapMutations({
      setViewport: "componentArtBoard/setViewport"
    }),
    initResizeEvent() {
      let eventFn = () => {
        let { width, height } = this.$refs.viewport.getBoundingClientRect();
        this.setViewport({
          width,
          height
        });
      };
      //初始化的时候先执行一次
      eventFn();

      window.addEventListener("resize", eventFn);
      this.$once("hook:beforeDestory", () => {
        window.removeEventListener("resize", eventFn);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.viewport {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 400px;
}
</style>
