<template>
  <div class="canvas-wrap">
    <div class="canvas-header">
      标题
      <!-- 标题右上角的按钮 -->
      <div class="top-nav-right-section">
        <div class="ellipsis-container">
          <span
            class="top-nav-ellipsis"
            style="background-color: black;"
          ></span>
          <span
            class="top-nav-big-ellipsis top-nav-ellipsis"
            style="background-color: black;"
          ></span>
          <span
            class="top-nav-ellipsis"
            style="background-color: black;"
          ></span>
        </div>
        <div class="split-line"></div>
        <div class="circle-container">
          <div class="top-nav-circle" style="border-color: black;">
            <span class="top-nav-round" style="background-color: black;"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="canvas-content">
      <div class="canvas-scroll" :style="canvasScrollStyle">
        <div
          id="canvas"
          style="width: 375px;  background: none; height:100%;"
          @mousewheel.stop
        >
          <widgetComponentContainer
            style="min-height: 100%"
            :childrens="list"
          />
        </div>
      </div>
    </div>
    <div class="canvas-footer">
      <widgetView
        :data="tabBar"
        :canMove="false"
        :canDel="false"
        style="height:100%;"
      >
        <fzTabBarPreview />
      </widgetView>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import getScrollBarWidth from "@/tools/scrollbar";
import widgetComponentContainer from "./widgetComponentContainer";
import widgetView from "./widgetView";
import fzTabBarPreview from "@/views/design/components/basic/fz-tab-bar/preview";

const scrollbarInfo = getScrollBarWidth();

export default {
  components: {
    widgetComponentContainer,
    widgetView,
    fzTabBarPreview
  },
  data() {
    return {
      scrollbarWidth: scrollbarInfo.defaultScrollbarWidth,
      supportEditScrollbarWidth: scrollbarInfo.supportEditScrollbarWidth
    };
  },
  computed: {
    ...mapGetters({
      list: "pageDesign/pageComponents",
      tabBar: "pageDesign/tabBar"
    }),
    canvasScrollStyle() {
      let { scrollbarWidth, supportEditScrollbarWidth } = this;
      scrollbarWidth = supportEditScrollbarWidth ? 6 : scrollbarWidth;
      return {
        width: `${375 + scrollbarWidth}px`,
        height: `${567 + scrollbarWidth}px`
      };
    }
  }
};
</script>
<style lang="less" scoped>
.canvas-wrap {
  width: 377px;
  height: 669px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  padding: 1px;
  margin-left: -1px;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 1px solid #c8cdd0;
    pointer-events: none;
  }
  .canvas-header {
    font-size: 19px;
    font-family: PingFangSC-Medium, PingFangSC;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    position: relative;
    .top-nav-right-section {
      width: 87px;
      height: 32px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 16px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      position: absolute;
      right: 7px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      box-sizing: border-box;
      padding: 7px 0;
      flex-wrap: nowrap;
      .ellipsis-container {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .top-nav-ellipsis {
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background: #000;
          margin: 0 1.5px;
          &.top-nav-big-ellipsis {
            width: 6px;
            height: 6px;
          }
        }
      }
      .split-line {
        flex: 0 0 1px;
        width: 1px;
        background: #e5e5e5;
        height: 17px;
      }
      .circle-container {
        flex: 1;
        display: flex;
        justify-content: center;
        .top-nav-circle {
          width: 17px;
          height: 17px;
          border: 1px solid #000;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .top-nav-round {
            width: 6px;
            height: 6px;
            border-radius: 100%;
            background: #000;
          }
        }
      }
    }
  }
  .canvas-content {
    height: 567px;
    overflow: hidden;
  }
  .canvas-footer {
    height: 50px;
    font-size: 17px;
    text-align: center;
    box-sizing: border-box;
    border-top: 1px solid #ddd;
  }
}
.canvas-scroll {
  box-sizing: border-box;
  position: relative;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dedee4;
    border-radius: 4px;
  }
}
#canvas {
  position: relative;
  box-sizing: content-box;
  background-color: white;
  background-repeat: repeat;
  background-position: top left;
  background-size: 100% auto;
  z-index: 1;
  transform-origin: top left;
  margin: 0 auto;
}
</style>
