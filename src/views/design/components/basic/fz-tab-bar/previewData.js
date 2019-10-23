const name = "底部导航";

//组件data
export default {
  __type__: "fz-tab-bar",
  __name__: name,
  _styles: {},
  customFeature: {},
  list: [
    {
      id: 1,
      text: "首页",
      iconPath:
        "https://staticimg.ngmm365.com/210d689137104ff10cd2c1456b9dd418-w16_h16.png",
      selectedIconPath:
        "https://staticimg.ngmm365.com/b12d58b65ab440f7fa7b7dab0ec1d367-w16_h16.png",
      del: false
    },
    {
      id: 2,
      text: "购物车",
      iconPath:
        "https://staticimg.ngmm365.com/e456189870c9037125d9888db42f836a-w16_h16.png",
      selectedIconPath:
        "https://staticimg.ngmm365.com/aec64fdc5dd9d7e364bd8d1b32a41619-w16_h16.png",
      del: false
    },
    {
      id: 3,
      text: "我的",
      iconPath:
        "https://staticimg.ngmm365.com/09d2c2881807c8a5f5d4a9bb169a6eb6-w16_h16.png",
      selectedIconPath:
        "https://staticimg.ngmm365.com/ad3379a25a4e0c27958be518ddc31cfd-w16_h16.png",
      del: false
    }
  ],
  color: "#222222",
  selectedColor: "#ff0000",
  backgroundColor: "#ffffff"
};

//组件基本属性
export const componentInfo = {
  name,
  icon: "iconwenben",
  kind: "global"
};

export const defaultStyles = {};
