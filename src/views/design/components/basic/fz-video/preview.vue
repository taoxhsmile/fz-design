<template>
  <div class="fz-video-preview" :style="styles">
    <template v-if="src">
      <video :src="src" controls></video>
    </template>
    <template v-else>
      请上传视频
    </template>
  </div>
</template>
<script>
import previewMixins from "../common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-video-preview",
  mixins: [previewMixins({ defaultStyles })],
  computed: {
    src() {
      return this.data.src;
    }
  }
};
</script>
<style lang="less" scoped>
.fz-video-preview {
  video {
    width: 100%;
    height: 100%;
    outline: none;
  }
}
</style>
