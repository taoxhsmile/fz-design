const name = "自由面板";

export default {
  __type__: "fz-free-vessel",
  __name__: name,
  _styles: {},
  _customFeature: {
    align: "left",
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
export const basicInfo = {
  name,
  icon: "iconziyoumianban",
  kind: "layout"
};

export const defaultStyles = {
  //位置
  marginLeft: 0,
  marginTop: 0,
  //背景颜色
  backgroundColor: "rgba(0,0,0,0)",
  //大小
  width: 375,
  height: 175
};
