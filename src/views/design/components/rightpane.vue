<template>
  <div class="rightpane">
    <component v-if="selectComponent" :is="rightPane"></component>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import getComponents from "./basic/index.js";
export default {
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
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
  min-width: 345px;
  box-shadow: rgba(39, 54, 78, 0.11) 0px -2px 30px 0px;
  z-index: 4;
  border-left: 1px solid rgb(222, 222, 228);
  background: white;

  & /deep/ .el-tabs__header {
    margin: 0;
  }
  & /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border-radius: 0;
  }
  & /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
  }
  //tab标题栏
  & /deep/ .el-tabs__item {
    height: 56px;
    line-height: 56px;
  }
  & /deep/ .el-collapse {
    border-top: none;
  }
  & /deep/ .el-collapse-item__header {
    color: #303133;
    height: 56px;
    line-height: 56px;
    background: #fafafa;
    font-family: PingFangSC;
    padding-left: 24px;
    font-weight: normal;
    font-size: 14px;
  }
  & /deep/ .el-collapse-item__header.focusing:focus:not(:hover) {
    color: #303133;
  }
  & /deep/ .el-collapse-item__content {
    padding-bottom: 0;
  }

  & /deep/ .rightpane__content-wrap {
    padding: 10px 24px;
    &.border {
      border-bottom: 1px solid #e9ecf0;
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

  & /deep/ .el-tabs__content {
    overflow-y: auto;
    height: calc(100% - 56px);
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
