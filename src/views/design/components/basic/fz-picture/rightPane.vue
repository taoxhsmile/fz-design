<template>
  <div class="text-rightPane">
    <el-tabs v-model="activeName">
      <el-tab-pane label="文本组件" name="content">
        <el-col>
          文本内容
        </el-col>
        <el-col> </el-col>
      </el-tab-pane>
      <el-tab-pane label="组件样式" name="container">组件样式</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeName: "content",
      defaultStyles: {}
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
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
