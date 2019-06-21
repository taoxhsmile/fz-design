<template>
  <div class="tooltip">
    <slot>
      <div class="tooltip-inner">
        <div class="tooltip-left">{{ leftText }}</div>
        <div class="tooltip-right">{{ rightText }}</div>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.tooltip {
  position: absolute;
  left: 35px;
  top: 1px;
  z-index: 1050 !important;
  font-size: 12px;
  line-height: 22px;
  white-space: nowrap;
  .tooltip-inner {
    max-width: 200px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background-color: #415058;
    border-radius: 2px;
    display: flex;
    .tooltip-left {
      padding: 0 8px;
      flex: auto;
    }
    .tooltip-right {
      flex: 0 0 22px;
      width: 22px;
      line-height: 22px;
      background-color: #ff6161 !important;
      border-radius: 0 2px 2px 0;
    }
  }
}
</style>
