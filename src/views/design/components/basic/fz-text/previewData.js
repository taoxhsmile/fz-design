const name = "文本";

//组件data
export default {
  __type__: "fz-text",
  __name__: name,
  _styles: {},
  customFeature: {
    align: "left",
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
};

//组件基本属性
export const componentInfo = {
  name,
  icon: "iconwenben",
  kind: "basic"
};

export const defaultStyles = {
  //字体设置
  fontSize: 12,
  textAlign: "left",
  textDecoration: "",
  color: "#101010",
  //大小
  lineHeight: 25,
  //背景颜色
  backgroundColor: "rgba(0,0,0,0)",
  //边框
  borderStyle: "none",
  borderWidth: 1,
  borderColor: "rgba(0, 0, 0, 1)",
  //位置
  marginLeft: 0,
  marginTop: 0
};
