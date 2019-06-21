<template>
  <div class="hsv-picker">
    <section class="s-v-plane" @mousedown="svMousedown">
      <div class="base-hue-layer" :style="`background: ${baseHue}`"></div>
      <div class="s-layer"></div>
      <div class="v-layer"></div>
      <i class="pointer" :style="`top: ${vPercent}; left: ${sPercent};`"></i>
    </section>
    <div class="row">
      <!-- <div class="outside-color-picker-btn">
        <a class="system-color-picker-wrapper"
          ><span class="icon dora">tube</span
          ><input class="system-color-picker" type="color" value="#8a2727"
        /></a>
      </div> -->
      <div class="h-a-bands">
        <div class="h-band" @mousedown="hOraMousedown('h', $event)">
          <div class="rail">
            <span class="slider" :style="`left: ${hPercent};`"></span>
          </div>
        </div>
        <div class="a-band" @mousedown="hOraMousedown('a', $event)">
          <div
            :style="
              `width: 100%; height: 100%; background: linear-gradient(to right, transparent 0%, ${previewColorNoA} 100%);`
            "
          ></div>
          <div class="rail">
            <span class="slider" :style="`left: ${aPercent};`"></span>
          </div>
        </div>
      </div>
      <div class="preview-container">
        <div :style="`height: 100%; background:${previewColor};`"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import emitterMixin from "@/mixins/emitter.js";
export default {
  mixins: [emitterMixin],
  computed: {
    ...mapState({
      componentInfo: "componentColorPicker"
    }),
    ...mapGetters({
      hPercent: "componentColorPicker/hPercent",
      sPercent: "componentColorPicker/sPercent",
      vPercent: "componentColorPicker/vPercent",
      aPercent: "componentColorPicker/aPercent",
      baseHue: "componentColorPicker/baseHue",
      previewColor: "componentColorPicker/previewColor",
      previewColorNoA: "componentColorPicker/previewColorNoA"
    }),
    percent() {
      return this.componentInfo.percent;
    },
    colour() {
      return this.componentInfo.colour;
    }
  },
  methods: {
    ...mapMutations({
      setPercent: "componentColorPicker/setPercent"
    }),
    hOraMousedown(type, e) {
      let { clientX, currentTarget } = e;

      const deal = ({ clientX }) => {
        let { left, width } = currentTarget.getBoundingClientRect();
        this.setPercent({
          [type]: Math.min(1, Math.max(0, (clientX - left) / width))
        });
        this.dispatch("color-picker", "parent:updateColor");
      };
      deal({ clientX });

      document.onmousemove = e => {
        let { clientX } = e;
        deal({ clientX });
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    svMousedown(e) {
      let { clientX, clientY, currentTarget } = e;

      const deal = ({ clientX, clientY }) => {
        let {
          left,
          width,
          top,
          height
        } = currentTarget.getBoundingClientRect();
        this.setPercent({
          s: Math.min(1, Math.max(0, (clientX - left) / width)),
          v: Math.min(1, Math.max(0, 1 - (clientY - top) / height))
        });
        this.dispatch("color-picker", "parent:updateColor");
      };
      deal({ clientX, clientY });

      document.onmousemove = e => {
        let { clientX, clientY } = e;
        deal({ clientX, clientY });
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
.hsv-picker {
  .s-v-plane {
    position: relative;
    height: 120px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    background-clip: content-box;
    overflow: hidden;
    .base-hue-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .s-layer,
    .v-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .s-layer {
      background: linear-gradient(
        to right,
        white 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .v-layer {
      background: linear-gradient(to bottom, transparent 0%, black 100%);
    }
    .pointer {
      position: absolute;
      width: 6px;
      height: 6px;
      margin: -3px;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
      border: 1px solid white;
      border-radius: 50%;
      pointer-events: none;
    }
  }
  .row {
    display: flex;
    align-items: center;
    .outside-color-picker-btn {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      cursor: pointer;
      border: 1px solid #8d9ea7;
      border-radius: 2px;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
      display: flex;
      justify-content: center;
      align-items: center;
      .system-color-picker-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .dora {
          display: inline-block;
          width: 1em;
          font: normal normal normal 1em/1 Dora;
          font-size: inherit;
          speak: none;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
          font-feature-settings: "liga";
          text-rendering: optimizeLegibility;
          font-variant-ligatures: discretionary-ligatures;
        }
        .system-color-picker {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          cursor: pointer;
          outline: none;
        }
      }
    }
    .h-a-bands {
      flex: 1;
      margin-right: 8px;
      .a-band,
      .h-band {
        position: relative;
        height: 10px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 2px;
        cursor: pointer;
        background-clip: padding-box;
        .slider {
          position: absolute;
          top: -3px;
          width: 5px;
          height: 12px;
          margin-left: -2.5px;
          background: #f6f7f8;
          box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.34);
          border-radius: 3px;
          z-index: 2;
          pointer-events: none;
        }
      }
      .h-band {
        margin-bottom: 4px;
        background-image: linear-gradient(
          to left,
          red,
          #ff0080,
          magenta,
          #8000ff,
          blue,
          #0080ff,
          cyan,
          #00ff80,
          lime,
          #80ff00,
          yellow,
          #ff8000,
          red
        );
        .rail {
          position: absolute;
          top: 1px;
          bottom: 1px;
          left: 3.5px;
          right: 3.5px;
        }
      }
      .a-band {
        background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
          linear-gradient(-45deg, #ccc 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #ccc 75%),
          linear-gradient(-45deg, transparent 75%, #ccc 75%);
        background-size: 6px 6px;
        background-position: 0 0, 0 3px, 3px -3px, -3px 0;
        .rail {
          position: absolute;
          top: 1px;
          bottom: 1px;
          left: 3.5px;
          right: 3.5px;
        }
      }
    }
    .preview-container {
      width: 24px;
      height: 24px;
      border: 1px solid #dedede;
      border-radius: 2px;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 0),
        linear-gradient(-45deg, #ccc 25%, transparent 0),
        linear-gradient(45deg, transparent 75%, #ccc 0),
        linear-gradient(-45deg, transparent 75%, #ccc 0);
      background-size: 12px 12px;
      background-position: -1px -1px, -1px 5px, 5px -7px, -7px -1px;
    }
  }
}
</style>
