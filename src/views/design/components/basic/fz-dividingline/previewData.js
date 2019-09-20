const name = "分割线";

export default {
  __type__: "fz-dividingline",
  __name__: name,
  _styles: {},
  _customFeature: {
    align: "left",
    //边框
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 1)"
  }
};

//组件基本信息
export const componentInfo = {
  name,
  icon: "iconfengexian",
  kind: "layout"
};

export const defaultStyles = {
  //位置
  marginLeft: 0,
  marginTop: 0
};
