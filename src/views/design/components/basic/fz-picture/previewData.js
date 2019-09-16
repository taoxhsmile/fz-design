const name = "图片";

export default {
  name,
  icon: "icontupian",
  kind: "basic",
  data: {
    __type__: "fz-picture",
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
      },
      column: 3
    },
    images: [
      {
        _t: Date.now(),
        src:
          "https://staticimg.ngmm365.com/50d98b4973954fafaa9e6f05b255fdae-w900_h380.jpg"
      },
      {
        _t: Date.now() + 1,
        src:
          "https://staticimg.ngmm365.com/50d98b4973954fafaa9e6f05b255fdae-w900_h380.jpg"
      },
      {
        _t: Date.now() + 2,
        src:
          "https://staticimg.ngmm365.com/50d98b4973954fafaa9e6f05b255fdae-w900_h380.jpg"
      },
      {
        _t: Date.now() + 3,
        src:
          "https://staticimg.ngmm365.com/50d98b4973954fafaa9e6f05b255fdae-w900_h380.jpg"
      }
    ]
  }
};
export const defaultStyles = {
  width: 375,
  borderStyle: "none",
  borderWidth: 1,
  borderColor: "rgba(0, 0, 0, 1)",
  marginLeft: 0,
  marginTop: 0
};
