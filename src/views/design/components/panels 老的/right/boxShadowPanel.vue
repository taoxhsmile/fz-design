<template>
  <subPanel title="阴影">
    <shadowPanel type="boxShadow"></shadowPanel>
  </subPanel>
</template>
<script>
import subPanel from "./components/subPanel.vue";
import shadowPanel from "./components/shadowPanel.vue";
export default {
  components: {
    subPanel,
    shadowPanel
  }
};
</script>
<style lang="less" scoped>
.text-shadow-panel {
  .panel-body {
    & > div {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 6px;
      }
      .title {
        margin-top: 10px;
        color: #8d9ea7;
        font-size: 12px;
        text-align: center;
        line-height: 1;
      }
    }
    .input-wrap {
      width: 34px;
    }
    .input-color {
      width: 30px;
    }
  }
  .panel-body /deep/ input {
    padding-right: 0.5em !important;
  }
}
</style>
