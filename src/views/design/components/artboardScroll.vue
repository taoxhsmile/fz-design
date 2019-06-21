<template>
  <div class="artboard-scroll">
    <div data-axis="x" class="track x-track" ref="xTrack">
      <div
        ref="xHandler"
        class="handler"
        data-axis="x"
        :style="`width: 33.3333%; left: ${xLeft * 100}%;`"
        @mousedown="handleDragX"
      >
        <div class="thumb"></div>
      </div>
    </div>
    <div data-axis="y" class="track y-track" ref="yTrack">
      <div
        ref="yHandler"
        class="handler y-handler"
        data-axis="y"
        :style="`height: 33.3333%; top: ${yTop * 100}%;`"
        @mousedown="handleDragY"
      >
        <div class="thumb"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      xLeft: "componentArtBoard/xLeft",
      yTop: "componentArtBoard/yTop"
    })
  },
  methods: {
    ...mapMutations({
      setTranslateXByXLeft: "componentArtBoard/setTranslateXByXLeft",
      setTranslateYByYTop: "componentArtBoard/setTranslateYByYTop"
    }),
    handleDragX(e) {
      let { clientX: startX } = e;
      let { offsetWidth: width } = this.$refs.xTrack;
      let { offsetLeft: left } = this.$refs.xHandler;
      document.onmousemove = e => {
        let { clientX: endX } = e;
        let _left = endX - startX + left;
        if (_left < 0) {
          _left = 0;
        } else if (_left > (width * 2) / 3) {
          _left = (width * 2) / 3;
        }
        this.setTranslateXByXLeft(_left / width);
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    handleDragY(e) {
      let { clientY: startY } = e;
      let { offsetHeight: height } = this.$refs.yTrack;
      let { offsetTop: top } = this.$refs.yHandler;
      document.onmousemove = e => {
        let { clientY: endY } = e;
        let _top = endY - startY + top;
        if (_top < 0) {
          _top = 0;
        } else if (_top > (height * 2) / 3) {
          _top = (height * 2) / 3;
        }
        this.setTranslateYByYTop(_top / height);
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  }
};
</script>
<style lang="less" scoped>
.artboard-scroll {
  position: absolute;
  top: 17px;
  left: 17px;
  right: 0px;
  bottom: 0px;
  z-index: 4;
  pointer-events: none;
  .track {
    position: absolute;
    pointer-events: auto;
    background: transparent;
    .handler {
      position: absolute;
      cursor: pointer;
      .thumb {
        position: absolute;
        pointer-events: none;
        border-radius: 4px;
        transition: background 0.2s ease-in-out 0s;
      }
    }
  }
  .x-track {
    left: 0px;
    right: 11px;
    bottom: 0px;
    height: 12px;
    .handler {
      bottom: 2px;
      height: 10px;
      .thumb {
        bottom: 0px;
        width: 100%;
        height: 6px;
        background: rgb(210, 210, 216);
      }
    }
  }
  .y-track {
    top: 0px;
    bottom: 11px;
    right: 0px;
    width: 12px;
    .handler {
      right: 2px;
      width: 10px;
      .thumb {
        right: 0px;
        height: 100%;
        width: 6px;
        background: rgb(222, 222, 228);
      }
    }
  }
}
</style>
