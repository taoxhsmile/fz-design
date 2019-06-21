import { $eventBus } from "@/eventBus.js";
import { EVENT_BUS_DRAWRULER } from "@/global.js";

//最大滚动可视屏幕比例
const MAX_SCROLL_RATIO = 1.2;

export default {
  namespaced: true,
  state: {
    canvas: {
      width: 375,
      height: 2000
    },
    viewport: {
      width: 0,
      height: 0
    },
    translateX: 0,
    translateY: 0
  },
  getters: {
    maxHeight(state) {
      let { canvas, viewport } = state;
      return Math.max(canvas.height, viewport.height);
    },
    translateX(state) {
      return state.translateX;
    },
    translateY(state) {
      return state.translateY;
    },
    xLeft(state) {
      let {
        translateX,
        viewport: { width }
      } = state;
      let totalWidth = width * MAX_SCROLL_RATIO;
      // totalWidth - 0.110687 / (2/3) * totalWidth - totalWidth / 2 = translateX
      return (
        ((totalWidth - (translateX + totalWidth / 2)) / totalWidth) * (2 / 3)
      );
    },
    yTop(state, getters) {
      let { translateY } = state;
      let totalHeight = getters.maxHeight * MAX_SCROLL_RATIO;
      return (
        ((totalHeight - (translateY + totalHeight / 2)) / totalHeight) * (2 / 3)
      );
    }
  },
  mutations: {
    setViewport(state, viewport) {
      state.viewport = { ...state.viewport, ...viewport };
    },
    setTranslateXByXLeft(state, xLeft) {
      let {
        viewport: { width }
      } = state;
      let totalWidth = width * MAX_SCROLL_RATIO;
      this.commit(
        "componentArtBoard/setTranslateX",
        totalWidth - (xLeft / (2 / 3)) * totalWidth - totalWidth / 2
      );
    },
    setTranslateYByYTop(state, yTop) {
      let totalHeight =
        this.getters["componentArtBoard/maxHeight"] * MAX_SCROLL_RATIO;
      this.commit(
        "componentArtBoard/setTranslateY",
        totalHeight - (yTop / (2 / 3)) * totalHeight - totalHeight / 2
      );
    },
    setTranslateX(state, translateX) {
      let {
        viewport: { width }
      } = state;
      let totalWidth = width * MAX_SCROLL_RATIO;
      if (translateX > totalWidth / 2) {
        translateX = totalWidth / 2;
      } else if (translateX < -totalWidth / 2) {
        translateX = -totalWidth / 2;
      }
      state.translateX = translateX;

      //重新绘制刻度尺
      $eventBus.$emit(EVENT_BUS_DRAWRULER);
    },
    setTranslateY(state, translateY) {
      let totalHeight =
        this.getters["componentArtBoard/maxHeight"] * MAX_SCROLL_RATIO;
      if (translateY > totalHeight / 2) {
        translateY = totalHeight / 2;
      } else if (translateY < -totalHeight / 2) {
        translateY = -totalHeight / 2;
      }
      state.translateY = translateY;

      //重新绘制刻度尺
      $eventBus.$emit(EVENT_BUS_DRAWRULER);
    }
  },
  actions: {}
};
