<template>
  <div class="leftpane-component-library">
    <el-tabs stretch type="card" v-model="activeName">
      <el-tab-pane label="基础组件" name="basic">
        <ul>
          <template v-for="(basicPreviewData, i) in basicPreviewDatas">
            <li class="item" :key="i">
              <shortcut :basicPreviewData="basicPreviewData">
                <div class="content">
                  <fz-icon
                    :name="basicPreviewData.componentInfo.icon"
                  ></fz-icon>
                  <p>{{ basicPreviewData.componentInfo.name }}</p>
                </div>
              </shortcut>
            </li>
            <li
              class="line"
              :key="i + 'line'"
              v-if="showLine(i, basicPreviewDatas)"
            ></li>
          </template>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="布局组件" name="layout">
        <ul>
          <template v-for="(basicPreviewData, i) in layoutPreviewDatas">
            <li class="item" :key="i">
              <shortcut :basicPreviewData="basicPreviewData">
                <div class="content">
                  <fz-icon
                    :name="basicPreviewData.componentInfo.icon"
                  ></fz-icon>
                  <p>{{ basicPreviewData.componentInfo.name }}</p>
                </div>
              </shortcut>
            </li>
            <li
              class="line"
              :key="i + 'line'"
              v-if="showLine(i, layoutPreviewDatas)"
            ></li>
          </template>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="功能组件" name="functional">
        <ul>
          <template v-for="(basicPreviewData, i) in functionalPreviewDatas">
            <li class="item" :key="i">
              <shortcut :basicPreviewData="basicPreviewData">
                <div class="content">
                  <fz-icon
                    :name="basicPreviewData.componentInfo.icon"
                  ></fz-icon>
                  <p>{{ basicPreviewData.componentInfo.name }}</p>
                </div>
              </shortcut>
            </li>
            <li
              class="line"
              :key="i + 'line'"
              v-if="showLine(i, functionalPreviewDatas)"
            ></li>
          </template>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="全局组件" name="global">
        <ul>
          <template v-for="(basicPreviewData, i) in globalPreviewDatas">
            <li class="item" :key="i">
              <shortcut :basicPreviewData="basicPreviewData">
                <div class="content">
                  <fz-icon
                    :name="basicPreviewData.componentInfo.icon"
                  ></fz-icon>
                  <p>{{ basicPreviewData.componentInfo.name }}</p>
                </div>
              </shortcut>
            </li>
            <li
              class="line"
              :key="i + 'line'"
              v-if="showLine(i, globalPreviewDatas)"
            ></li>
          </template>
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
      functionalPreviewDatas: getPreviewDataByKind("functional"),
      globalPreviewDatas: getPreviewDataByKind("global")
    };
  },
  methods: {
    showLine(i, data) {
      let len = data.length;
      return (i + 1) % 3 === 0 && i < len - 1;
    }
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
    flex-wrap: wrap;
    li {
      &.item {
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
      &.line {
        width: 100%;
        height: 1px;
        background: #dbdfe6;
      }
    }
  }
}
</style>
