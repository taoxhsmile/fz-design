const name = "多行文本";

//组件data
export default {
  __type__: "fz-form-textarea",
  __name__: name,
  _styles: {},
  customFeature: {
    align: "center",
    useBoxShadow: 0,
    boxShadow: {
      hShadow: 0,
      vShadow: 0,
      blur: 5,
      color: "rgba(0, 0, 0, 1)"
    },
    placeholder: "请输入内容"
  }
};

//组件基本属性
export const componentInfo = {
  name,
  icon: "iconanniu",
  kind: "form-ele"
};

export const defaultStyles = {
  //背景颜色
  backgroundColor: "rgba(0,0,0,0)",
  //位置
  marginTop: 0
};
