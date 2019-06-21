<template>
  <ol class="rn-body">
    <leftpaneContentRightnavBodyScreenList />
    <leftpaneContentRightnavBodyComponentList />
  </ol>
</template>
<script>
import leftpaneContentRightnavBodyScreenList from "./leftpaneContentRightnavBodyScreenList.vue";
import leftpaneContentRightnavBodyComponentList from "./leftpaneContentRightnavBodyComponentList.vue";
export default {
  components: {
    leftpaneContentRightnavBodyScreenList,
    leftpaneContentRightnavBodyComponentList
  }
};
</script>
<style lang="less" scoped>
.rn-body {
  & > li {
    display: none;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    &.active {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
