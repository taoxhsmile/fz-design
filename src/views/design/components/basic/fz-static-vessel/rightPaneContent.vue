<template>
  <el-collapse :value="['1']">
    <el-collapse-item title="点击事件" name="1">
      <rEventClick />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rEventClick from "../common/rEventClick";
export default {
  inject: ["rightPane"],
  components: {
    rEventClick
  }
};
</script>
<style lang="less" scoped>
ul.font-style {
  display: flex;
  padding: 0px 5px;
  border-radius: 4px;
  border: 1px solid rgba(216, 220, 230, 1);
  width: 118px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 32px;
  li {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    border-radius: 4px;
    color: #909399;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active {
      background: #409eff;
      color: white;
    }
  }
}
</style>
