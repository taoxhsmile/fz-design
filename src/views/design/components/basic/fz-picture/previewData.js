const name = "图片";

export default {
  __type__: "fz-picture",
  __name__: name,
  _styles: {},
  customFeature: {
    align: "left",
    useBoxShadow: 0,
    boxShadow: {
      hShadow: 0,
      vShadow: 0,
      blur: 5,
      color: "rgba(0, 0, 0, 1)"
    },
    column: 3
  },
  image: {
    src:
      "https://staticimg.ngmm365.com/238fd2911a54e949ad0201507c47c60f-w900_h380.jpg?x-oss-process=image/resize,w_750/format,jpg/interlace,1/quality,Q_60/sharpen,90",
    link: ""
  }
};

//组件基本信息
export const componentInfo = {
  name,
  icon: "icontupian",
  kind: "basic"
};

export const defaultStyles = {
  //位置
  marginLeft: 0,
  marginTop: 0,
  //边框
  borderStyle: "none",
  borderWidth: 1,
  borderColor: "rgba(0, 0, 0, 1)"
};
