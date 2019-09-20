<template>
  <div class="rightPane-item">
    <el-tabs stretch type="card" v-model="activeName">
      <el-tab-pane label="分割线组件" name="content">
        <rightPaneContent />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import rightPaneContent from "./rightPaneContent";
import { defaultStyles } from "./previewData";
export default {
  components: {
    rightPaneContent
  },
  data() {
    return {
      activeName: "content",
      defaultStyles
    };
  },
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
    }),
    _styles() {
      return { ...this.defaultStyles, ...this.selectComponent._styles };
    },
    _customFeature() {
      return this.selectComponent._customFeature;
    }
  },
  provide() {
    return {
      rightPane: this
    };
  }
};
</script>
