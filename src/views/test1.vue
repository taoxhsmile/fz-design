<template>
  <div class="screen-viewport">
    <div class="no-zoom-area">no-zoom-area1</div>
    <div class="zoom-area">
      <div class="canvas">canvas</div>
    </div>
    <div class="no-zoom-area">no-zoom-area2</div>
  </div>
</template>
<style lang="less" scoped>
#design {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}
#new-design {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
}
._1jgVEujVzHdnTVPQwo5Hm0 {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #5b6b73;
  font-size: 12px;
}
.main-content {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
#screens {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease-in-out;
}
.screen-viewport {
  width: 375px;
  height: 667px;
  min-width: 375px;
  min-height: 667px;
  transform: matrix(1, 0, 0, 1, 71, 31);
  position: relative;
  .no-zoom-area {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    &:first-child {
    }
    &:last-child {
      background: red;
    }
  }
  .zoom-area {
    transform: scale(1);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center center;
    .canvas {
      width: 375px;
      height: 667px;
      background: none;
      position: relative;
      box-sizing: content-box;
      overflow: visible;
      z-index: 1;
      transform-origin: top left;
      &::after {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border: 1px solid #c8cdd0;
      }
    }
  }
}
</style>
