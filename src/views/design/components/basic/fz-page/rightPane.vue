<template>
  <div class="rightPane-item">
    <el-tabs v-model="activeName">
      <el-tab-pane label="页面设置" name="content">
        <rightPaneContent />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import rightPaneMixins from "../common/rightPaneMixins";
import rightPaneContent from "./rightPaneContent";
import { defaultStyles } from "./previewData";
export default {
  mixins: [rightPaneMixins(defaultStyles)],
  components: {
    rightPaneContent
  },
  data() {
    return {
      activeName: "content"
    };
  }
};
</script>
