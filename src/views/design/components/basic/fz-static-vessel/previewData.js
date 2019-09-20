const name = "面板";

export default {
  __type__: "fz-static-vessel",
  __name__: name,
  _styles: {},
  _customFeature: {
    //位置
    align: "left",
    //阴影
    useBoxShadow: 0,
    boxShadow: {
      hShadow: 0,
      vShadow: 0,
      blur: 5,
      color: "rgba(0, 0, 0, 1)"
    }
  },
  _slots: []
};

//组件基本信息
export const componentInfo = {
  name,
  icon: "iconmianban",
  kind: "layout"
};

export const defaultStyles = {
  //位置
  marginLeft: 0,
  marginTop: 0,
  //背景颜色
  backgroundColor: "rgba(0,0,0,0)"
};
