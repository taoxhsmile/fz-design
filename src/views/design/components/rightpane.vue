<template>
  <div class="rightpane">
    <template v-if="selectComponent">
      <pageRightPane v-if="selectComponent.__type__ === 'page'"></pageRightPane>
      <component v-else :is="rightPane"></component>
    </template>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import getComponents from "./basic/index.js";
import pageRightPane from "./basic/fz-page/rightPane.vue";
export default {
  components: {
    pageRightPane
  },
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent",
      pageData: "pageDesign/pageData"
    }),
    rightPane() {
      let { selectComponent } = this;
      if (!selectComponent) {
        return null;
      }
      return getComponents("rightPane")[`${selectComponent.__type__}`];
    }
  }
};
</script>
<style lang="less" scoped>
.rightpane {
  position: relative;
  width: 345px;
  min-width: 345px;
  box-shadow: rgba(39, 54, 78, 0.11) 0px -2px 30px 0px;
  z-index: 4;
  border-left: 1px solid rgb(222, 222, 228);
  background: white;

  & /deep/ .el-tabs__header {
    margin: 0;
  }
  // & /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
  //   border-radius: 0;
  // }
  // & /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
  //   border: none;
  // }
  // //tab标题栏
  & /deep/ .el-tabs__item {
    height: 56px;
    line-height: 56px;
  }
  & /deep/ .el-tabs__nav {
    margin-left: 20px;
  }
  & /deep/ .el-tabs__content {
    overflow-y: auto;
    height: calc(100% - 56px);
  }

  & /deep/ .el-collapse {
    border-top: none;
  }
  & /deep/ .el-collapse-item__header {
    color: #303133;
    padding-left: 20px;
    border-bottom: 1px solid #d8d8d8;
  }
  & /deep/ .el-collapse-item__arrow {
    margin-right: 25px;
    font-size: 18px;
    color: #909399;
  }
  & /deep/ .el-collapse-item__header.focusing:focus:not(:hover) {
    color: #303133;
  }
  & /deep/ .el-collapse-item__content {
    padding-bottom: 0;
    border-bottom: 1px solid #d8d8d8;
  }

  & /deep/ .rightpane__content-wrap {
    padding: 10px 24px;
    &.border {
      border-bottom: 1px solid #d8d8d8;
    }
  }

  & /deep/ .rightpane__title {
    color: #909399;
  }

  & /deep/ .el-row {
    padding: 10px 0;
  }

  & /deep/ .el-tabs {
    height: 100%;
  }

  & /deep/ .el-collapse-item__arrow {
    margin-right: 16px;
  }

  & /deep/ .el-input-number.is-controls-right .el-input__inner {
    padding-left: 8px;
    padding-right: 40px;
  }

  & /deep/ .el-collapse-item__wrap {
    border-bottom: none;
  }

  & /deep/ .el-color-picker__trigger {
    width: 48px;
    height: 48px;
  }

  & /deep/ .rightPane-item {
    height: 100%;
  }
}
</style>
