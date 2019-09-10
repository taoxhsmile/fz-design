<template>
  <div class="basic-widgets-wrap">
    <!-- 基础组件快捷列表 -->
    <ul class="basic-widgets">
      <li v-for="(basicPreviewData, i) in basicPreviewDatas" :key="i">
        <shortcut :basicPreviewData="basicPreviewData">
          <div class="content">
            <fz-icon :name="basicPreviewData.icon"></fz-icon>
            <p>{{ basicPreviewData.name }}</p>
          </div>
        </shortcut>
      </li>
    </ul>
    <!-- 库 -->
    <basicWidgetsFunctionalList></basicWidgetsFunctionalList>
  </div>
</template>
<script>
import { getPreviewDataByKind } from "@design/components/basic/index.js";
import basicWidgetsFunctionalList from "./basicWidgetsFunctionalList";
import shortcut from "./shortcut";
export default {
  components: {
    basicWidgetsFunctionalList,
    shortcut
  },
  data() {
    return {
      basicPreviewDatas: getPreviewDataByKind("basic")
    };
  }
};
</script>
<style lang="less" scoped>
.basic-widgets-wrap {
  position: relative;
  z-index: 11;
  flex-shrink: 0;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 255, 255);
  border-left: 1px solid rgb(222, 222, 228);
  border-right: 1px solid rgb(222, 222, 228);
  .basic-widgets {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    li {
      width: 100%;
      .content {
        text-align: center;
        color: rgb(108, 109, 110);
        padding: 10px 0;
      }
      i {
        display: block;
        width: 24px;
        height: 24px;
        margin: 0 auto;
        font-size: 22px;
        margin-bottom: 9px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
