<template>
  <div class="container">
    <div class="widget-item">
      1
      <div class="widget-item">1-1</div>
    </div>
    <div class="widget-item">2</div>
    <div class="widget-item">3</div>
    <div class="widget-item">4</div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    let $container = $(".container"),
      $widgetItems = $container.find("> .widget-item");

    for (let i = 0; i < $widgetItems.length; i++) {
      $widgetItems.eq(i).css({ border: "1px solid red" });
    }
  }
};
</script>
<style lang="less" scoped>
.widget-item {
  min-height: 20px;
  padding: 5px;
}
</style>
