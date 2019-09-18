<template>
  <div class="control" v-show="data === selectComponent">
    <template v-if="resizeV">
      <div
        class="t resizable-handler"
        style="cursor: n-resize;"
        @mousedown.left.stop="doResize('t', $event)"
      ></div>
      <div
        class="b resizable-handler"
        style="cursor: s-resize;"
        @mousedown.left.stop="doResize('b', $event)"
      ></div>
    </template>

    <div
      class="r resizable-handler"
      style="cursor: e-resize;"
      @mousedown.left.stop="doResize('r', $event)"
    ></div>
    <div
      class="l resizable-handler"
      style="cursor: w-resize;"
      @mousedown.left.stop="doResize('l', $event)"
    ></div>

    <template v-if="resizeV">
      <div
        class="tr resizable-handler"
        style="cursor: ne-resize;"
        @mousedown.left.stop="doResize('tr', $event)"
      ></div>
      <div
        class="tl resizable-handler"
        style="cursor: nw-resize;"
        @mousedown.left.stop="doResize('tl', $event)"
      ></div>
      <div
        class="br resizable-handler"
        style="cursor: se-resize;"
        @mousedown.left.stop="doResize('br', $event)"
      ></div>
      <div
        class="bl resizable-handler"
        style="cursor: sw-resize;"
        @mousedown.left.stop="doResize('bl', $event)"
      ></div>
    </template>

    <template v-if="resizeV">
      <div class="t square"></div>
      <div class="b square"></div>
    </template>
    <div class="r square"></div>
    <div class="l square"></div>
    <template v-if="resizeV">
      <div class="tr square"></div>
      <div class="tl square"></div>
      <div class="br square"></div>
      <div class="bl square"></div>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import $ from "jquery";

export default {
  props: ["data"],
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
    }),
    resizeV() {
      return this.data.__type__ !== "fz-text";
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    }),
    //"tr" => {"t": true, "r": true}
    convertDirectionToObj(direction) {
      let result = {};
      direction.split("").forEach(item => {
        result[item] = true;
      });
      return result;
    },
    doResize(direction, { clientX: startX, clientY: startY }) {
      let $preview = $(`[data-cid='${this.selectComponent.__id__}']`),
        $previewWidth = $preview.width(),
        $previewHeight = $preview.height();

      direction = this.convertDirectionToObj(direction);

      let {
        _styles: { left, top }
      } = this.selectComponent;

      left = parseFloat(left) || 0;
      top = parseFloat(top) || 0;

      let bottom = top + $previewHeight,
        right = left + $previewWidth,
        nLeft = left,
        nTop = top,
        nWidth,
        nHeight;

      let mousemoveFn = ({ clientX: endX, clientY: endY }) => {
        //记录当前为拖拽中
        // this.setIsResize(true);

        // left
        if (direction.l) {
          nLeft = endX - startX + left;
        }
        if (nLeft > right - 1) nLeft = right - 1;
        // top
        if (direction.t) {
          nTop = endY - startY + top;
        }
        if (nTop > bottom - 1) nTop = bottom - 1;
        // width
        if (direction.r) {
          nWidth = endX - startX + $previewWidth;
        } else {
          nWidth = right - nLeft;
        }
        // height
        if (direction.b) {
          nHeight = endY - startY + $previewHeight;
        } else {
          nHeight = bottom - nTop;
        }

        let value = {
          left: nLeft,
          top: nTop,
          width: nWidth,
          height: nHeight
        };

        if (!this.resizeV) {
          delete value.top;
          delete value.height;
        }

        this.setSelectComponentProperty({
          key: "_styles",
          value
        });
      };
      let mouseupFn = () => {
        // this.setIsResize(false);
        $(document).off("mousemove", mousemoveFn);
        $(document).off("mouseup", mouseupFn);
      };
      $(document).on("mousemove", mousemoveFn);
      $(document).on("mouseup", mouseupFn);
    }
  }
};
</script>
<style lang="less" scoped>
.control {
  .resizable-handler {
    position: absolute;
    width: 14px;
    height: 14px;
    cursor: pointer;
    z-index: 1;
    &.t {
      margin-left: -5px;
      top: -5px;
      left: 50%;
    }
    &.b {
      margin-left: -5px;
      bottom: -5px;
      left: 50%;
    }
    &.r {
      margin-top: -5px;
      right: -5px;
      top: 50%;
    }
    &.l {
      margin-top: -5px;
      left: -5px;
      top: 50%;
    }
    &.tr {
      right: -5px;
      top: -5px;
    }
    &.tl {
      left: -5px;
      top: -5px;
    }
    &.br {
      right: -5px;
      bottom: -5px;
    }
    &.bl {
      bottom: -5px;
      left: -5px;
    }
  }
  .square {
    border-color: #f56c6c;
    position: absolute;
    width: 5px;
    height: 5px;
    background: white;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    &.t {
      left: 50%;
      margin-left: -2px;
      top: -2px;
    }
    &.b {
      left: 50%;
      margin-left: -2px;
      bottom: -2px;
    }
    &.r {
      top: 50%;
      margin-top: -2px;
      right: -2px;
    }
    &.l {
      top: 50%;
      margin-top: -2px;
      left: -2px;
    }
    &.tr {
      right: -2px;
      top: -2px;
    }
    &.tl {
      left: -2px;
      top: -2px;
    }
    &.br {
      bottom: -2px;
      right: -2px;
    }
    &.bl {
      bottom: -2px;
      left: -2px;
    }
  }
}
</style>
