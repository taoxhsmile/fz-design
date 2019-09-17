<template>
  <div class="leftpane-component-library">
    <el-tabs stretch type="card" v-model="activeName">
      <el-tab-pane label="基础组件" name="basic">
        <ul>
          <li v-for="(basicPreviewData, i) in basicPreviewDatas" :key="i">
            <shortcut :basicPreviewData="basicPreviewData">
              <div class="content">
                <fz-icon :name="basicPreviewData.componentInfo.icon"></fz-icon>
                <p>{{ basicPreviewData.componentInfo.name }}</p>
              </div>
            </shortcut>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="布局组件" name="layout">
        <ul>
          <li v-for="(basicPreviewData, i) in layoutPreviewDatas" :key="i">
            <shortcut :basicPreviewData="basicPreviewData">
              <div class="content">
                <fz-icon :name="basicPreviewData.componentInfo.icon"></fz-icon>
                <p>{{ basicPreviewData.componentInfo.name }}</p>
              </div>
            </shortcut>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="功能组件" name="functional">
        <ul>
          <li v-for="(basicPreviewData, i) in functionalPreviewDatas" :key="i">
            <shortcut :basicPreviewData="basicPreviewData">
              <div class="content">
                <fz-icon :name="basicPreviewData.componentInfo.icon"></fz-icon>
                <p>{{ basicPreviewData.componentInfo.name }}</p>
              </div>
            </shortcut>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getPreviewDataByKind } from "@design/components/basic/index.js";
import shortcut from "./shortcut";
export default {
  components: {
    shortcut
  },
  data() {
    return {
      activeName: "basic",
      basicPreviewDatas: getPreviewDataByKind("basic"),
      layoutPreviewDatas: getPreviewDataByKind("layout"),
      functionalPreviewDatas: getPreviewDataByKind("functional")
    };
  }
};
</script>
<style lang="less" scoped>
.leftpane-component-library {
  & /deep/ .el-tabs__header {
    margin: 0;
  }
  & /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border-radius: 0;
  }
  & /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
  }
  & /deep/ .el-tabs__item {
    height: 56px;
    line-height: 56px;
  }

  ul {
    display: flex;
    li {
      width: 100px;
      height: 100px;
      text-align: center;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      i {
        font-size: 22px;
      }
      p {
        margin-top: 8px;
      }
    }
  }
}
</style>
