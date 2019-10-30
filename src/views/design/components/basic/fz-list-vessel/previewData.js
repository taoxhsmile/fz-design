const name = "重复面板";

export default {
  __type__: "fz-list-vessel",
  __name__: name,
  _styles: {},
  customFeature: {
    displayType: 1, //单行多行
    columnWidth: 150, //列宽
    column: 1, //列数
    heightType: 1, //高度类型
    pageSize: 10, //每次加载条数
    columnHeight: 100, //列表高度
    totalSize: 4, //总条数
    dataInfo: {}
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
  //背景颜色
  backgroundColor: "rgba(0,0,0,0)"
};

export const componentOptions = {};
