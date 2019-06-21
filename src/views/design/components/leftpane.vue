<template>
  <div class="leftpane" style="width: 248px;">
    <div class="leftpane-content" style="width:248px;">
      <div class="aside" id="rightnav">
        <leftpaneContentRightnavHeader />
        <leftpaneContentRightnavBody />
      </div>
    </div>
  </div>
</template>
<script>
import leftpaneContentRightnavHeader from "./leftpaneContentRightnavHeader.vue";
import leftpaneContentRightnavBody from "./leftpaneContentRightnavBody.vue";
export default {
  components: {
    leftpaneContentRightnavHeader,
    leftpaneContentRightnavBody
  }
};
</script>
<style lang="less" scoped>
.leftpane {
  box-sizing: content-box;
  position: relative;
  flex-shrink: 0;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  box-shadow: rgba(213, 213, 213, 0.5) 0px 2px 30px 0px;
  font-size: 12px;
  z-index: 4;
  background: white;
  .leftpane-content {
    position: absolute;
    right: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
