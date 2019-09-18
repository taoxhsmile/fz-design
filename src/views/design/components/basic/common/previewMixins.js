import { stylesConvert } from "@design/components/tools/stylesConvert";

export default {
  props: ["data", "list", "index"],
  computed: {
    styles() {
      let {
        defaultStyles,
        data: {
          _styles,
          _customFeature: {
            useTextShadow,
            textShadow,
            useBoxShadow,
            boxShadow
          },
          inFreeVessel
        }
      } = this;
      //文本阴影
      if (useTextShadow === 1) {
        _styles = {
          ..._styles,
          textShadow: `${textShadow.hShadow} ${textShadow.vShadow} ${
            textShadow.blur
          } ${textShadow.color}`
        };
      }
      //box阴影
      if (useBoxShadow === 1) {
        _styles = {
          ..._styles,
          boxShadow: `${boxShadow.hShadow} ${boxShadow.vShadow} ${
            boxShadow.blur
          } ${boxShadow.color}`
        };
      }

      _styles = { ...defaultStyles, ..._styles };

      //放在free-vessel
      if (inFreeVessel) {
        ["width", "marginTop", "marginLeft", "top", "left", "position"].forEach(
          key => {
            delete _styles[key];
          }
        );
      }

      return stylesConvert({
        _styles
      });
    }
  }
};
