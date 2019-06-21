import {
  hex2rgb,
  rgb2hex,
  hsv2rgb,
  rgb2hsv,
  rgb2rgbaStr,
  parseColor
} from "@/tools/color.js";

export default {
  namespaced: true,
  state: {
    themePaletteColors: [
      "transparent",
      "#ffffff",
      "#3f51b5",
      "#ff4081",
      "#e51c23",
      "#009688",
      "#259b24",
      "#8bc34a",
      "#ff9800"
    ],
    colour: {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    },
    percent: {
      h: 0,
      s: 0,
      v: 0,
      a: 0
    },
    hex: "#FFFFFF"
  },
  getters: {
    // 去#号转大写的hex
    formatedHex(state) {
      return state.hex.replace(/^#/, "").toUpperCase();
    },
    //色调
    hPercent(state) {
      return `${state.percent.h * 100}%`;
    },
    //left
    sPercent(state) {
      return `${state.percent.s * 100}%`;
    },
    //top
    vPercent(state) {
      return `${100 - state.percent.v * 100}%`;
    },
    //透明度
    aPercent(state) {
      return `${state.percent.a * 100}%`;
    },
    //右上角颜色
    baseHue(state) {
      return rgb2hex(hsv2rgb({ h: state.percent.h, s: 1, v: 1 }));
    },
    //最终组合起来的颜色
    previewColor(state) {
      let { colour, percent } = state;
      return rgb2rgbaStr({ ...colour, a: percent.a });
    },
    //去除透明度的最终颜色
    previewColorNoA(state) {
      let { colour } = state;
      return rgb2rgbaStr({ ...colour, a: 1 });
    }
  },
  mutations: {
    //处理自定义的颜色
    parseColor(state, color) {
      let { hex, alpha } = parseColor(color);
      state.colour.a = (state.percent.a = alpha) * 100;
      this.commit("componentColorPicker/setHex", hex);
    },
    //修改16进制的值
    setHex(state, hex) {
      state.hex = hex;
      //同步修改 （rbga，hsv）
      this.commit("componentColorPicker/_update", 1);
    },
    //修改rgba
    setColour(state, colour) {
      state.colour = { ...state.colour, ...colour };
      //同步修改（hsv，hex）
      this.commit("componentColorPicker/_update", 2);
    },
    //修改hsv
    setPercent(state, percent) {
      state.percent = { ...state.percent, ...percent };
      //同步修改（rbga，hex）
      this.commit("componentColorPicker/_update", 3);
    },
    _update(state, type) {
      //1、已知hex 修改rgba 修改hsv
      //2、已知colour 修改hsv 修改hex
      //3、已知hsv 修改rgba 修改hex
      // 顺序 rgba hsv hex
      if (type == 1) {
        state.colour = { ...state.colour, ...hex2rgb(state.hex) };
        state.percent = {
          ...state.percent,
          ...rgb2hsv(state.colour),
          a: state.colour.a / 100
        };
      } else if (type == 2) {
        state.percent = {
          ...state.percent,
          ...rgb2hsv(state.colour),
          a: state.colour.a / 100
        };
        state.hex = rgb2hex(state.colour);
      } else if (type == 3) {
        state.colour = {
          ...state.colour,
          ...hsv2rgb(state.percent),
          a: parseInt(state.percent.a * 100)
        };
        state.hex = rgb2hex(state.colour);
      }
    }
  },
  actions: {}
};
//todo方法简化
