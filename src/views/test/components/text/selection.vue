<template>
  <div class="text-selection" :style="[data._styles]">
    <div class="rotate" style="display: block;">
      <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z"
          fill="#eb5648"
          fill-rule="nonzero"
        ></path>
      </svg>
    </div>
    <div class="t resizable-handler" style="cursor: n-resize;"></div>
    <div class="b resizable-handler" style="cursor: s-resize;"></div>
    <div class="r resizable-handler" style="cursor: e-resize;"></div>
    <div class="l resizable-handler" style="cursor: w-resize;"></div>
    <div class="tr resizable-handler" style="cursor: ne-resize;"></div>
    <div class="tl resizable-handler" style="cursor: nw-resize;"></div>
    <div class="br resizable-handler" style="cursor: se-resize;"></div>
    <div class="bl resizable-handler" style="cursor: sw-resize;"></div>
    <div class="t square"></div>
    <div class="b square"></div>
    <div class="r square"></div>
    <div class="l square"></div>
    <div class="tr square"></div>
    <div class="tl square"></div>
    <div class="br square"></div>
    <div class="bl square"></div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.text-selection {
  border: 1px solid red;
  // background: rgba(255, 0, 0, 0.3);
}

.rotate {
  position: absolute;
  left: 50%;
  top: -26px;
  width: 18px;
  height: 18px;
  margin-left: -9px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  .resizable-handler {
    position: absolute;
    width: 14px;
    height: 14px;
    cursor: pointer;
    z-index: 1;
    &.t {
      margin-left: -7px;
      top: -7px;
      left: 50%;
      cursor: n-resize;
    }
    &.b {
      margin-left: -7px;
      bottom: -7px;
      left: 50%;
      cursor: n-resize;
    }
    &.r {
      margin-top: -7px;
      right: -7px;
      top: 50%;
      cursor: n-resize;
    }
    &.l {
      margin-top: -7px;
      left: -7px;
      top: 50%;
    }
  }
}
</style>
