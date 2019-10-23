<template>
  <el-collapse :value="['1']">
    <el-collapse-item title="展示内容" name="1">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          一个页面只能有一个该组件。组件只有用户扫码进入小程序时才会出现。
        </el-row>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<style lang="less" scoped></style>
