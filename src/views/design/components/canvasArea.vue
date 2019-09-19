<template>
  <div class="canvas-wrap">
    <div class="canvas-scroll">
      <div
        id="canvas"
        style="width: 375px;  background: none; "
        @mousewheel.stop
      >
        <widgetComponentContainer
          style="min-height: 667px;"
          :childrens="list"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import widgetComponentContainer from "./widgetComponentContainer";
export default {
  components: {
    widgetComponentContainer
  },
  computed: {
    ...mapGetters({
      list: "pageDesign/pageComponents"
    })
  }
};
</script>
<style lang="less" scoped>
.canvas-wrap {
  width: 375px;
  height: 667px;
  position: relative;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid #c8cdd0;
  }
}
.canvas-scroll {
  height: 667px;
  width: 389px;
  box-sizing: border-box;
  position: relative;
  left: -4px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dedee4;
    border-radius: 4px;
  }
}
#canvas {
  position: relative;
  box-sizing: content-box;
  background-color: white;
  background-repeat: repeat;
  background-position: top left;
  background-size: 100% auto;
  z-index: 1;
  transform-origin: top left;
  margin: 0 auto;
}
</style>
