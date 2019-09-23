const name = "双栏";

export default {
  __type__: "fz-layout-vessel",
  __name__: name,
  _styles: {},
  customFeature: {
    centerWidth: 50,
    cellBorderColor: "rgb(102, 102, 102)",
    cellBorderStyle: "none",
    cellBorderWidth: 1
  },
  _leftSlots: [],
  _rightSlots: []
};

//组件基本信息
export const componentInfo = {
  name,
  icon: "iconshuanglan",
  kind: "layout"
};

export const defaultStyles = {
  //位置
  marginTop: 0,
  //背景颜色
  backgroundColor: "rgba(0,0,0,0)"
};
