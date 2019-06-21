<template>
  <div class="input-section">
    <hexInput></hexInput>
    <colorInput text="r"></colorInput>
    <colorInput text="g"></colorInput>
    <colorInput text="b"></colorInput>
    <alphaInput></alphaInput>
  </div>
</template>
<script>
import hexInput from "./hexInput.vue";
import colorInput from "./colorInput.vue";
import alphaInput from "./alphaInput.vue";
export default {
  components: {
    hexInput,
    colorInput,
    alphaInput
  }
};
</script>
<style lang="less" scoped>
.input-section {
  display: flex;
  justify-content: space-between;
  padding-right: 1px;
  margin-top: 10px;
  margin-bottom: 12px;
  /deep/ .color-input {
    width: 36px;
    input {
      width: 100%;
      height: 22px;
      padding: 0 4px;
      background: #f6f7f8;
      border: 1px solid #f2f2f3;
      border-radius: 2px;
      color: #415058;
      align-self: stretch;
      line-height: 1;
      overflow: hidden;
      transition: 0.2s ease-out;
      transition-property: border, box-shadow;
      outline: none;
      &:hover {
        border-color: #1e98ea;
      }
      &:focus {
        border-color: #1e98ea;
        box-shadow: 0 0 6px 0 rgba(30, 152, 234, 0.5);
      }
    }
    span {
      display: block;
      line-height: 12px;
      margin-top: 4px;
      color: #8d9ea7;
      text-align: center;
    }
  }
}
</style>
