<template>
  <div class="rightPane-item">
    <el-tabs stretch type="card" v-model="activeName">
      <el-tab-pane label="组件设置" name="content">
        <rightPaneContent />
      </el-tab-pane>

      <el-tab-pane label="样式设置" name="container">
        <rightPaneContainer />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import rightPaneMixins from "../common/rightPaneMixins";
import rightPaneContent from "./rightPaneContent";
import rightPaneContainer from "./rightPaneContainer";
import { defaultStyles } from "./previewData";
export default {
  mixins: [rightPaneMixins(defaultStyles)],
  components: {
    rightPaneContent,
    rightPaneContainer
  },
  data() {
    return {
      activeName: "container"
    };
  }
};
</script>
