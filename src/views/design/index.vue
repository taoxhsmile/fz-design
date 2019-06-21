<template>
  <section id="design">
    <div id="new-design">
      <div class="contain">
        <!-- 工具栏 -->
        <toolbar />
        <!-- 主内容 -->
        <mainContent />
        <!-- 浮动弹窗容器 -->
        <fixedArea />
      </div>
    </div>
  </section>
</template>
<script>
import toolbar from "./components/toolbar.vue";
import mainContent from "./components/mainContent.vue";
import fixedArea from "./components/fixedArea.vue";
export default {
  name: "design-index",
  components: {
    toolbar,
    mainContent,
    fixedArea
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
    .contain {
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #5b6b73;
      font-size: 12px;
    }
  }
}
</style>
