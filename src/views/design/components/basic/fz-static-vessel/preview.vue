<template>
  <div
    class="static-vessel-preview component-container"
    :style="[styles]"
    ref="static-vessel-preview"
  >
    <widgetComponentContainer
      style="min-height:30px;border:1px solid green;"
      :childrens="data._slots"
    />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import $ from "jquery";
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
import widgetComponentContainer from "@design/components/widgetComponentContainer";
import { stylesConvert } from "@design/components/tools/stylesConvert";

export default {
  name: "static-vessel-preview",
  mixins: [previewMixins],
  components: {
    widgetComponentContainer
  },
  data() {
    return { defaultStyles };
  },
  computed: {
    hasBorder() {
      let {
        _customFeature: { cellBorderWidth, cellBorderStyle }
      } = this.data;
      return cellBorderWidth > 0 && cellBorderStyle !== "none";
    },
    cellLeftStyle() {
      let {
        _customFeature: { centerWidth }
      } = this.data;
      return {
        flex: `${centerWidth / (100 - centerWidth)} 1 0%`
      };
    },
    cellLineStyle() {
      let {
          data: {
            _customFeature: {
              cellBorderColor,
              cellBorderStyle,
              cellBorderWidth
            }
          },
          hasBorder
        } = this,
        style = {};
      if (hasBorder) {
        style = stylesConvert({
          _styles: {
            borderLeftWidth: cellBorderWidth,
            borderLeftStyle: cellBorderStyle,
            borderLeftColor: cellBorderColor
          }
        });
      }
      return style;
    },
    cellDragStyle() {
      let {
          data: {
            _customFeature: { centerWidth, cellBorderWidth }
          },
          hasBorder
        } = this,
        style = {
          left: `${centerWidth * 0.99}%`
        };

      if (hasBorder) {
        style = {
          ...style,
          ...stylesConvert({
            _styles: {
              width: cellBorderWidth
            }
          })
        };
      }

      return style;
    }
  },
  methods: {
    ...mapMutations({
      setComponentProperty: "pageDesign/setComponentProperty"
    }),
    mousedownFn({ clientX: startX, currentTarget }) {
      let oLayoutVesselPreview = this.$refs["static-vessel-preview"],
        oldLeft = $(currentTarget).position().left,
        min = 0,
        max = $(oLayoutVesselPreview).width() * 0.99,
        nLeft = oldLeft;

      let mousemoveFn = ({ clientX: endX }) => {
          nLeft = endX - startX + oldLeft;
          if (nLeft < min) {
            nLeft = min;
          } else if (nLeft > max) {
            nLeft = max;
          }
          this.setComponentProperty({
            component: this.data,
            key: "_customFeature",
            value: {
              centerWidth: Math.round((nLeft / max) * 100)
            }
          });
        },
        mouseupFn = () => {
          $(document).off("mousemove", mousemoveFn);
          $(document).off("mouseup", mouseupFn);
        };

      $(document).on("mousemove", mousemoveFn);
      $(document).on("mouseup", mouseupFn);
    }
  }
};
</script>
<style lang="less" scoped>
.static-vessel-preview {
  position: relative;
  overflow: hidden;
  padding-top: 10px;
}
</style>
