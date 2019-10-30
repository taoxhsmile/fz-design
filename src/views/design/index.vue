<template>
  <section id="design">
    <div id="new-design">
      <dir class="left-contain">
        <leftToolbar />
      </dir>
      <div class="right-contain">
        <!-- 工具栏 -->
        <topToolbar />
        <!-- 主内容 -->
        <mainContent />
      </div>
      <!-- 浮动弹窗容器 -->
      <fixedArea />
      <!-- 弹窗 -->
      <dialogs />
    </div>
  </section>
</template>
<script>
import leftToolbar from "./components/leftToolbar.vue";
import topToolbar from "./components/topToolbar.vue";
import mainContent from "./components/mainContent.vue";
import fixedArea from "./components/fixedArea.vue";
import dialogs from "./components/dialogs.vue";
export default {
  name: "design-index",
  components: {
    leftToolbar,
    topToolbar,
    mainContent,
    fixedArea,
    dialogs
  }
};
</script>
<style lang="less" scoped>
#design {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  #new-design {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    display: flex;
    .left-contain {
      flex: 0 0 60px;
      height: 100%;
      width: 60px;
      background: #262633;
    }
    .right-contain {
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #5b6b73;
      font-size: 12px;
      flex: auto;
    }
  }
}
</style>
