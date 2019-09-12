<template>
  <div class="text-rightPane">
    <el-tabs stretch type="card" v-model="activeName">
      <el-tab-pane label="组件设置" name="content">
        <rightPaneContent
          :selectComponent="selectComponent"
          :_styles="_styles"
          :_customFeature="_customFeature"
        ></rightPaneContent>
      </el-tab-pane>

      <el-tab-pane label="样式设置" name="container">
        <rightPaneContainer
          :selectComponent="selectComponent"
          :_styles="_styles"
          :_customFeature="_customFeature"
        ></rightPaneContainer>
      </el-tab-pane>

      <el-tab-pane label="交互设置" name="behavior">
        <rightPaneBehavior
          :selectComponent="selectComponent"
          :_styles="_styles"
          :_customFeature="_customFeature"
        ></rightPaneBehavior>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import rightPaneContent from "./rightPaneContent";
import rightPaneContainer from "./rightPaneContainer";
import rightPaneBehavior from "./rightPaneBehavior";
export default {
  components: {
    rightPaneContent,
    rightPaneContainer,
    rightPaneBehavior
  },
  data() {
    return {
      activeName: "content",
      defaultStyles: {
        fontSize: 12,
        textAlign: "left",
        lineHeight: 25,
        width: 375,
        backgroundColor: "rgba(0,0,0,0)",
        borderStyle: "none",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 1)",
        color: "#101010",
        textDecoration: ""
      }
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
  }
};
</script>
<style lang="less" scoped>
.text-rightPane {
  height: 100%;
}
</style>
