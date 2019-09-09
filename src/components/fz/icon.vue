<template>
  <i :class="['icon iconfont', name]"></i>
</template>
<script>
export default {
  name: "icon",
  props: {
    name: {
      type: String
    }
  }
};
</script>
<style lang="less" scoped>
i {
  font-style: normal;
  display: inline-block;
  &:before {
    display: inline-block;
    vertical-align: top;
  }
}
</style>
