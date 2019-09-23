const name = "轮播";

export default {
  __type__: "fz-carousel",
  __name__: name,
  _styles: {},
  customFeature: {
    autoplay: 1,
    delay: 3000
  },
  contents: [
    {
      _t: Date.now(),
      type: "img",
      src:
        "https://staticimg.ngmm365.com/0e11d468c43f8c3d016aed95b36a4aaf-w900_h380.jpg"
    },
    {
      _t: Date.now() + 1,
      type: "img",
      src:
        "https://staticimg.ngmm365.com/ee7c49842e2a8f161db9e0b2700f6e7e-w900_h380.jpg"
    },
    {
      _t: Date.now() + 2,
      type: "img",
      src:
        "https://staticimg.ngmm365.com/646e96557860ab4316ea839800862b0a-w900_h380.png"
    },
    {
      _t: Date.now() + 3,
      type: "img",
      src:
        "https://staticimg.ngmm365.com/0e11d468c43f8c3d016aed95b36a4aaf-w900_h380.jpg"
    },
    {
      _t: Date.now() + 4,
      type: "img",
      src:
        "https://staticimg.ngmm365.com/ee7c49842e2a8f161db9e0b2700f6e7e-w900_h380.jpg"
    },
    {
      _t: Date.now() + 5,
      type: "img",
      src:
        "https://staticimg.ngmm365.com/646e96557860ab4316ea839800862b0a-w900_h380.png"
    }
  ]
};

//组件基本信息
export const componentInfo = {
  name,
  icon: "iconlunbotu",
  kind: "basic"
};

export const defaultStyles = {};
