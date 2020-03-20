<template>
  <div class="left-toolbar">
    <!-- <img src="@/assets/images/logo.png" class="logo" /> -->

    <!-- 库 -->
    <leftToolbarFunctionalList></leftToolbarFunctionalList>
  </div>
</template>
<script>
import leftToolbarFunctionalList from "./leftToolbarFunctionalList";
export default {
  components: {
    leftToolbarFunctionalList
  }
};
</script>
<style lang="less" scoped>
.left-toolbar {
  .logo {
    width: 36px;
    height: 22px;
    display: block;
    margin: 17px auto;
  }
}
</style>
