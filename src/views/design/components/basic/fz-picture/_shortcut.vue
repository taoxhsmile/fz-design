<template>
  <shortcut :previewData="previewData" @click="() => $emit('click')">
    <slot :data="data"></slot>
  </shortcut>
</template>
<script>
import shortcut from "../common/shortcut";
import previewData from "./previewData";

export default {
  components: {
    shortcut
  },
  data() {
    return {
      data: {
        shorterName: "图片"
      },
      previewData
    };
  }
};
</script>
