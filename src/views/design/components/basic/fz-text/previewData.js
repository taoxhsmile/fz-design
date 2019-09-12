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

export const defaultStyles = {
  fontSize: 12,
  textAlign: "left",
  lineHeight: 25,
  width: 375,
  backgroundColor: "rgba(0,0,0,0)",
  borderStyle: "none",
  borderWidth: 1,
  borderColor: "rgba(0, 0, 0, 1)",
  color: "#101010",
  textDecoration: "",
  textShadow: "rgb(245, 53, 48) 1px 1px 5px",
  marginLeft: 0,
  marginTop: 0
};
