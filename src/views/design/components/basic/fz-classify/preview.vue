<template>
  <div class="fz-classify-preview" :style="[styles]">
    <ul>
      <li
        v-for="i in 6"
        :key="i"
        :class="{ active: i === 1 }"
        :style="liStyle(i)"
      >
        分类{{ i }}
        <span :style="spanStyle"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import previewMixins from "@design/components/basic/common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-classify-preview",
  mixins: [previewMixins({ defaultStyles })],
  computed: {
    spanStyle() {
      let {
        data: {
          customFeature: { activeColor }
        }
      } = this;
      return { background: activeColor };
    }
  },
  methods: {
    liStyle(i) {
      let {
          data: {
            customFeature: { defaultColor, activeColor }
          },
          styles
        } = this,
        style = { height: styles.height, lineHeight: styles.height };

      style.color = i === 1 ? activeColor : defaultColor;
      return style;
    }
  }
};
</script>
<style lang="less" scoped>
.fz-classify-preview {
  overflow: hidden;
  ul {
    display: flex;
    align-items: center;
    font-size: 14px;
    li {
      padding: 0 10px;
      position: relative;
      span {
        display: none;
      }
      &.active {
        span {
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }
      }
    }
  }
}
</style>
