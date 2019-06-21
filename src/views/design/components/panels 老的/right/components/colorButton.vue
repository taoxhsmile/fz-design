<template>
  <div type="color-btn" class="color-button" @click="handleClick">
    <div class="thumbnail-wrapper">
      <div class="thumbnail" :style="`background-color: ${color};`"></div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    color: {
      type: String
    }
  },
  methods: {
    ...mapMutations({
      showColorPanel: "componentColorPanel/showColorPanel"
    }),
    handleClick({ currentTarget }) {
      let { color } = this,
        boundingClientRect = currentTarget.getBoundingClientRect();

      // 显示颜色选择器
      this.showColorPanel({
        boundingClientRect,
        color,
        // 选择颜色完毕之后的回调
        callback: newColor => {
          // 触发更新颜色
          this.$emit("update", newColor);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.color-button {
  width: 30px;
  height: 22px;
  position: relative;
  cursor: pointer;
  padding: 2px;
  border-radius: 2px;
  background: rgb(246, 247, 248);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(242, 242, 243);
  border-image: initial;
  overflow: hidden;
  transition: border-color 0.2s ease-out 0s;
  .thumbnail-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        45deg,
        rgb(204, 204, 204) 25%,
        transparent 0px
      ),
      linear-gradient(-45deg, rgb(204, 204, 204) 25%, transparent 0px),
      linear-gradient(45deg, transparent 75%, rgb(204, 204, 204) 0px),
      linear-gradient(-45deg, transparent 75%, rgb(204, 204, 204) 0px);
    background-size: 12px 12px;
    background-clip: padding-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
    border-image: initial;
    border-radius: 1px;
    background-position: -1px -1px, -1px 5px, 5px -7px, -7px -1px;
    overflow: hidden;
    .thumbnail {
      height: 100%;
    }
  }
}
</style>
