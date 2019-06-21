<template>
  <div id="ruler-wrap" class="ruler-wrap">
    <!-- 横向标尺 -->
    <div class="h-container">
      <canvas
        ref="hRuler"
        class="ruler"
        :width="hRuler.width * canvasConfigs.ratio"
        :height="hRuler.height * canvasConfigs.ratio"
      ></canvas>
      <div class="lines"></div>
    </div>
    <!-- 纵向标尺 -->
    <div class="v-container">
      <canvas
        ref="vRuler"
        class="ruler"
        :width="vRuler.width * canvasConfigs.ratio"
        :height="vRuler.height * canvasConfigs.ratio"
      ></canvas>
      <div class="lines"></div>
    </div>

    <el-tooltip
      class="item"
      effect="dark"
      content="点我回原点"
      placement="top"
      size="mini"
      :tabindex="-1"
    >
      <a
        class="corner"
        :class="{
          active: translateX || translateY
        }"
        style="background-color: transparent;"
        @click.stop="goOrigin"
      ></a>
    </el-tooltip>
  </div>
</template>
<script>
import $ from "jquery";
import { EVENT_BUS_DRAWRULER } from "@/global.js";
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      hRuler: {
        width: 0,
        height: 16
      },
      vRuler: {
        width: 16,
        height: 0
      },
      canvasConfigs: {
        bgColor: "transparent",
        // borderColor: "#DADADC",
        // cornerActiveColor: "rgb(235, 86, 72, 0.6)",
        fontColor: "#8D9EA7",
        // lineColor: "#EB5648",
        longfgColor: "#BABBBC",
        ratio: 2,
        shadowColor: "#E8E8E8",
        shortfgColor: "#C8CDD0"
      }
    };
  },
  computed: {
    ...mapGetters({
      translateX: "componentArtBoard/translateX",
      translateY: "componentArtBoard/translateY"
    })
  },
  mounted() {
    this.initWindowResizeEvent();
  },
  methods: {
    ...mapMutations({
      setTranslateX: "componentArtBoard/setTranslateX",
      setTranslateY: "componentArtBoard/setTranslateY"
    }),
    initWindowResizeEvent() {
      let eventFn = () => {
        let { width } = this.$refs.hRuler.getBoundingClientRect(),
          { height } = this.$refs.vRuler.getBoundingClientRect();

        this.hRuler.width = width;
        this.vRuler.height = height;

        this.$nextTick(() => {
          this.drawRuler();
        });
      };
      //第一次自执行
      eventFn();

      $(window).on("resize", eventFn);
      this.$eventBus.$on(EVENT_BUS_DRAWRULER, eventFn);

      this.$once("hook:beforeDestory", () => {
        $(window).off("resize", eventFn);
        this.$eventBus.$off(EVENT_BUS_DRAWRULER, eventFn);
      });
    },
    drawRuler() {
      let oCanvas = document.getElementById("canvas"),
        oHRuler = this.$refs.hRuler,
        oVRuler = this.$refs.vRuler,
        { left: canvasLeft, top: canvasTop } = oCanvas.getBoundingClientRect(),
        { left: hRulerLeft } = oHRuler.getBoundingClientRect(),
        { top: vRulerTop } = oVRuler.getBoundingClientRect(),
        scale = 1;

      //横向刻度尺
      this.drawRulerH({
        canvas: oHRuler,
        start: (hRulerLeft - canvasLeft) / scale,
        scale,
        selectStart: 0,
        selectLength: 375,
        height: this.hRuler.height
      });
      //纵向刻度尺
      this.drawRulerV({
        canvas: oVRuler,
        start: (vRulerTop - canvasTop) / scale,
        scale,
        selectStart: 0,
        selectLength: 667,
        width: this.vRuler.width
      });
    },
    //画刻度尺
    drawRulerH({ canvas, start, scale, selectStart, selectLength, height }) {
      let ctx = canvas.getContext("2d");

      let { width } = canvas.getBoundingClientRect(),
        {
          bgColor,
          fontColor,
          shadowColor,
          ratio,
          longfgColor,
          shortfgColor
        } = this.canvasConfigs;

      //设置字体样式
      this._updateCanvasContext(ctx);
      //设置缩放
      ctx.scale(ratio, ratio);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      let shortStep = this._getshortStep(scale),
        shortStepScale = shortStep * scale,
        longStep = 10 * shortStep,
        longStepScale = longStep * scale,
        startShort = Math.floor(start / shortStep) * shortStep,
        startLong = Math.floor(start / longStep) * longStep,
        minShort = ((startShort - start) / shortStep) * shortStepScale,
        minLong = ((startLong - start) / longStep) * longStepScale,
        maxLong = start + Math.ceil(width / scale);

      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = shadowColor;
      //绘制灰色背景
      ctx.fillRect(
        (selectStart - start) * scale,
        0,
        selectLength * scale,
        (3 * height) / 8
      );

      ctx.fillStyle = fontColor;
      ctx.strokeStyle = longfgColor;
      //绘制长刻度和文字
      for (
        let longNumber = startLong, i = 0;
        longNumber < maxLong;
        longNumber += longStep, i++
      ) {
        let longX = minLong + i * longStepScale + 0.5;
        ctx.moveTo(longX, 0);
        ctx.save();
        ctx.translate(longX, 0.4 * height);
        ctx.scale(0.83 / ratio, 0.83 / ratio);
        ctx.fillText(longNumber, 4 * ratio, 7 * ratio);
        ctx.restore();
        ctx.lineTo(longX, (9 * height) / 16);
      }
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.strokeStyle = shortfgColor;
      //绘制短刻度
      for (
        let shortNumber = startShort, i = 0;
        shortNumber < maxLong;
        shortNumber += shortStep, i++
      ) {
        let shortX = minShort + i * shortStepScale + 0.5;
        ctx.moveTo(shortX, 0);
        if (shortNumber % longStep != 0) {
          ctx.lineTo(shortX, (1 * height) / 4);
        }
      }
      ctx.stroke();
      ctx.closePath();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    },
    drawRulerV({ canvas, start, scale, selectStart, selectLength, width }) {
      let ctx = canvas.getContext("2d");

      let { height } = canvas.getBoundingClientRect(),
        {
          bgColor,
          fontColor,
          shadowColor,
          ratio,
          longfgColor,
          shortfgColor
        } = this.canvasConfigs;

      //设置字体样式
      this._updateCanvasContext(ctx);

      ctx.scale(ratio, ratio);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      let shortStep = this._getshortStep(scale),
        shortStepScale = shortStep * scale,
        longStep = 10 * shortStep,
        longStepScale = longStep * scale,
        startShort = Math.floor(start / shortStep) * shortStep,
        startLong = Math.floor(start / longStep) * longStep,
        minShort = ((startShort - start) / shortStep) * shortStepScale,
        minLong = ((startLong - start) / longStep) * longStepScale,
        maxLong = start + Math.ceil(height / scale);

      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = shadowColor;
      ctx.fillRect(
        0,
        (selectStart - start) * scale,
        (3 * width) / 8,
        selectLength * scale
      );

      ctx.fillStyle = fontColor;
      ctx.strokeStyle = longfgColor;
      for (
        let longNumber = startLong, i = 0;
        longNumber < maxLong;
        longNumber += longStep, i++
      ) {
        let longY = minLong + i * longStepScale + 0.5;
        ctx.moveTo(0, longY);
        ctx.save();
        ctx.translate(0.4 * width, longY);
        ctx.rotate(-Math.PI / 2);
        ctx.scale(0.83 / ratio, 0.83 / ratio);
        ctx.fillText(longNumber, 4 * ratio, 7 * ratio);
        ctx.restore();
        ctx.lineTo((9 * width) / 16, longY);
      }
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.strokeStyle = shortfgColor;
      for (
        let shortNumber = startShort, i = 0;
        shortNumber < maxLong;
        shortNumber += shortStep, i++
      ) {
        let shortY = minShort + i * shortStepScale + 0.5;
        ctx.moveTo(0, shortY);
        if (shortNumber % longStep != 0) {
          ctx.lineTo((1 * width) / 4, shortY);
        }
      }
      ctx.stroke();
      ctx.closePath();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    },
    _getshortStep(scale) {
      return scale <= 0.25
        ? 40
        : scale <= 0.5
        ? 20
        : scale <= 1
        ? 10
        : scale <= 2
        ? 5
        : scale <= 4
        ? 2
        : 1;
    },
    _updateCanvasContext(ctx) {
      ctx.font =
        12 * 2 +
        'px -apple-system, "Helvetica Neue", ".SFNSText-Regular", "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif';
      ctx.lineWidth = 1;
      ctx.textBaseline = "middle";
    },
    goOrigin() {
      this.setTranslateX(0);
      this.setTranslateY(0);
    }
  }
};
</script>
<style lang="less" scoped>
.ruler-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
  font-size: 12px;
  overflow: hidden;
  .h-container,
  .v-container {
    position: absolute;
    .lines {
      pointer-events: none;
    }
  }
  .h-container {
    left: 16px;
    top: 0px;
    width: calc(100% - 16px);
    height: 17px;
  }
  .v-container {
    top: 16px;
    left: 0px;
    width: 17px;
    height: calc(100% - 16px);
  }
  .ruler {
    width: 100%;
    height: 100%;
    pointer-events: auto;
  }
  .corner {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 16px;
    height: 16px;
    pointer-events: auto;
    cursor: pointer;
    box-sizing: content-box;
    border-right: 1px solid rgb(218, 218, 220);
    border-bottom: 1px solid rgb(218, 218, 220);
    transition: all 0.2s ease-in-out 0s;
    &.active {
      background-color: rgba(235, 86, 72, 0.6) !important;
    }
  }
}
</style>
