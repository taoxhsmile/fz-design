const name = "按钮";

//组件data
export default {
  __type__: "fz-button",
  __name__: name,
  _styles: {},
  _customFeature: {
    align: "center",
    useBoxShadow: 0,
    boxShadow: {
      hShadow: 0,
      vShadow: 0,
      blur: 5,
      color: "rgba(0, 0, 0, 1)"
    }
  },
  content: "按钮"
};

//组件基本属性
export const componentInfo = {
  name,
  icon: "iconanniu",
  kind: "basic"
};

export const defaultStyles = {
  //字体设置
  fontSize: 12,
  textAlign: "center",
  textDecoration: "",
  color: "#FFFFFF",
  //大小
  width: 120,
  height: 35,
  //背景颜色
  backgroundColor: "rgba(64,158,255,1)",
  //边框
  borderStyle: "none",
  borderWidth: 1,
  borderColor: "rgba(0, 0, 0, 1)",
  //位置
  marginTop: 0
};
