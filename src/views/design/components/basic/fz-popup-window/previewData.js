const name = "弹窗";

//组件data
export default {
  __type__: "fz-popup-window",
  __name__: name,
  _styles: {
    backgroundColor: "#FFFFFF"
  },
  customFeature: {
    //蒙层背景颜色
    maskBackgroundColor: "rgba(0,0,0,0.6)",
    autoOpenOption: 0,
    autoClose: 0,
    autoCloseTime: 5
  },
  title: "弹窗",
  _slots: []
};

//组件基本属性
export const componentInfo = {
  name,
  icon: "iconanniu",
  kind: "layout"
};

export const defaultStyles = {
  //大小
  width: 260,
  height: 250
};

export const componentOptions = {
  canDragCreate: false,
  canDrag: false
};
