<template>
  <div class="fz-picture-preview" :style="styles">
    <template v-if="src">
      <img :src="src" @mousemove.prevent />
    </template>
    <!-- 没有上传图片 -->
    <template v-else>
      <div class="img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-icon icon"
          viewBox="0 0 24 22"
          aria-hidden="true"
          style="width: 24px; height: 22px;"
        >
          <path
            d="M2.273.1h17.454c1.205 0 2.182.977 2.182 2.182v15.436a2.182 2.182 0 0 1-2.182 2.182H2.273A2.182 2.182 0 0 1 .09 17.718V2.282C.09 1.077 1.068.1 2.273.1zm0 3.29v13.22c0 .602.488 1.09 1.09 1.09h15.273a1.09 1.09 0 0 0 1.091-1.09V3.39a1.09 1.09 0 0 0-1.09-1.09H3.363a1.09 1.09 0 0 0-1.091 1.09zm1.09 12.172V14.4l2.905-2.928a1.09 1.09 0 0 1 1.664.137l1.108 1.565a1.09 1.09 0 0 0 1.766.02l3.023-4.064a1.09 1.09 0 0 1 1.82.105l2.987 5.165v1.113c0 .601-.486 1.089-1.086 1.091l-13.091.05a1.09 1.09 0 0 1-1.095-1.092zM7.183 7.8a1.643 1.643 0 0 1-1.637-1.65c0-.911.733-1.65 1.637-1.65s1.636.739 1.636 1.65c0 .911-.732 1.65-1.636 1.65z"
            fill="#8D9EA7"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </template>
  </div>
</template>
<script>
import { stylesConvert } from "../../tools/stylesConvert.js";
import previewMixins from "../common/previewMixins";
export default {
  name: "fz-picture-preview",
  mixins: [previewMixins],
  computed: {
    styles() {
      return stylesConvert({
        _styles: this.data._styles
      });
    },
    src() {
      return this.data.src;
    }
  }
};
</script>
<style lang="less" scoped>
.fz-picture-preview {
  cursor: default;
  height: 100%;
  overflow: hidden;
  .img {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: #e8e8e8;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
}
</style>
