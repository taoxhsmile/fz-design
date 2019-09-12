const name = "文本";

export default {
  name,
  icon: "iconwenben",
  kind: "basic",
  data: {
    __type__: "fz-text",
    __name__: name,
    _styles: {},
    _customFeature: {
      align: "center",
      useTextShadow: 0,
      textShadow: {
        hShadow: 0,
        vShadow: 0,
        blur: 5,
        color: "rgba(0, 0, 0, 1)"
      },
      useBoxShadow: 0,
      boxShadow: {
        hShadow: 0,
        vShadow: 0,
        blur: 5,
        color: "rgba(0, 0, 0, 1)"
      }
    },
    content: "我是文本"
  }
};
