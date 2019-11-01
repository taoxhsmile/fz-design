<template>
  <div
    class="fz-list-vessel-preview component-container"
    :style="[styles]"
    ref="fz-list-vessel-preview"
  >
    <div class="fz-list-vessel-header">
      <!-- 分类 -->
      <widgetView
        v-if="data._classify"
        :data="data._classify"
        :canDrag="false"
        :delFn="() => (data._classify = null)"
      >
        <fzClassifyPreview :data="data._classify" />
      </widgetView>
    </div>

    <div class="fz-list-vessel-content">
      <div class="fz-list-vessel-item" :style="[itemStyle]">
        <widgetComponentContainer :childrens="data._slots" />
      </div>
      <div
        v-if="showItem(1)"
        class="fz-list-vessel-item"
        :style="[itemStyle]"
      ></div>
      <div
        v-if="showItem(2)"
        class="fz-list-vessel-item"
        :style="[itemStyle]"
      ></div>
    </div>
  </div>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
import widgetComponentContainer from "@design/components/widgetComponentContainer";
import { stylesConvert } from "@design/components/tools/stylesConvert";
import widgetView from "@design/components/widgetView";
import fzClassifyPreview from "@/views/design/components/basic/fz-classify/preview";

export default {
  name: "fz-list-vessel-preview",
  mixins: [previewMixins({ defaultStyles })],
  components: {
    widgetComponentContainer,
    widgetView,
    fzClassifyPreview
  },
  computed: {
    customFeature() {
      return this.data.customFeature;
    },
    itemStyle() {
      let {
          customFeature: {
            displayType,
            columnWidth,
            column,
            heightType,
            columnHeight
          }
        } = this,
        _styles = {},
        widths = { 1: "100%", 2: "50%", 3: "33.33%" };

      if (displayType === 1) {
        //单行
        _styles = {
          width: columnWidth,
          flex: `0 0 ${columnWidth}px`
        };
      } else {
        _styles = {
          width: widths[column],
          flex: `0 0 ${widths[column]}`
        };
      }
      if (heightType === 1) {
        _styles.height = columnHeight;
      }
      return stylesConvert({
        _styles
      });
    }
  },
  methods: {
    showItem(minColumn) {
      let {
        customFeature: { displayType, column }
      } = this;
      return displayType === 1 || (displayType === 2 && column > minColumn);
    }
  }
};
</script>
<style lang="less" scoped>
.fz-list-vessel-preview {
  padding-top: 10px;
  .fz-list-vessel-content {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    min-height: 30px;
    .fz-list-vessel-item {
      border-right: 1px solid #63ccfe;
      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
