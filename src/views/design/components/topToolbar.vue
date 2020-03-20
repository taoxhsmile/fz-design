<template>
  <div id="toolbar">
    <div class="toolbar-left">
      <div class="title">
        <h1>象征</h1>
      </div>
    </div>
    <div class="toolbar-center">
      <ul>
        <li class="add">
          <fz-icon name="iconyemianfangda"></fz-icon>
        </li>
        <li class="scale">100%</li>
        <li class="reduce">
          <fz-icon name="iconyemiansuoxiao"></fz-icon>
        </li>
      </ul>
    </div>
    <div class="toolbar-right">
      <ul>
        <li>
          <fz-icon name="iconshezhi"></fz-icon>
          <p>设置</p>
        </li>
        <li>
          <fz-icon name="iconyulan"></fz-icon>
          <p>预览</p>
        </li>
        <li>
          <fz-icon name="iconbaocun"></fz-icon>
          <p>保存</p>
        </li>
        <li>
          <fz-icon name="iconfabu"></fz-icon>
          <p>发布</p>
        </li>
      </ul>
      <div class="zhanghao-wrap">
        <div class="zhanghao"></div>
        <p>账号</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
#toolbar {
  position: relative;
  height: 70px;
  box-shadow: rgba(39, 54, 78, 0.12) 1px 0px 6px 0px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  z-index: 107;
  background: rgb(255, 255, 255);
  display: flex;
}
.toolbar-left {
  flex: 0 0 370px;
  .title {
    display: flex;
    align-items: center;
    h1 {
      font-size: 16px;
      color: #606266;
      margin-left: 41px;
      font-family: PingFangSC;
      font-weight: 500;
      line-height: 20px;
      color: @system-theme-color;
    }
  }
}
.toolbar-center {
  flex: auto;
  ul {
    display: flex;
    align-items: center;
    li {
      &.add {
        width: 24px;
      }
      &.scale {
        width: 66px;
        text-align: center;
      }
      &.reduce {
        width: 24px;
      }
      i {
        font-size: 22px;
        color: #dbdfe6;
        display: block;
        height: 24px;
        line-height: 24px;
      }
    }
  }
}
.toolbar-right {
  flex: 0 0 425px;
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    li {
      width: 56px;
      height: 47px;
      text-align: center;
      &.zhanghao {
        flex: auto;
      }
    }
  }
  i {
    font-size: 22px;
    color: #c0c4cc;
    display: block;
    height: 24px;
    line-height: 24px;
  }
  p {
    color: #303133;
    font-size: 14px;
    line-height: 18px;
    margin-top: 5px;
  }
  .zhanghao-wrap {
    flex: auto;
    text-align: center;
    .zhanghao {
      margin: 0 auto;
      width: 22px;
      height: 22px;
      background: url(../../../assets/images/icons/zhanghao_active.png)
        no-repeat center center;
      background-size: 100% 100%;
    }
  }
}
</style>
