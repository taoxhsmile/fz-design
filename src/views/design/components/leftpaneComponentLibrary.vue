<template>
  <div class="leftpane-component-library">
    <el-collapse :value="['1', '2', '3', '4']">
      <el-collapse-item title="基础组件" name="1">
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
      </el-collapse-item>
      <el-collapse-item title="布局组件" name="2">
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
      </el-collapse-item>
      <el-collapse-item title="功能组件" name="3">
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
      </el-collapse-item>
      <el-collapse-item title="全局组件" name="4">
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
      </el-collapse-item>
    </el-collapse>
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
  overflow-x: hidden;
  overflow-y: auto;
  & /deep/ .el-collapse-item {
    .el-collapse-item__header {
      padding-left: 20px;
      border-bottom: 1px solid #d8d8d8;
      color: #303133;
    }
    .el-collapse-item__arrow {
      margin-right: 25px;
      font-size: 18px;
      color: #909399;
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
    .el-collapse-item__wrap {
      border-bottom: 1px solid #d8d8d8;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      &.item {
        width: 33.33%;
        height: 100px;
        text-align: center;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        i {
          font-size: 22px;
          color: #303133;
        }
        p {
          margin-top: 8px;
          color: #909399;
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
