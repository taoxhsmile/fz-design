<template>
  <div class="sub-panel" :class="{ collapse: !isOpen }">
    <div class="header" @click="handleClick">
      <p class="title">{{ title }}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="svg-icon icon"
        viewBox="0 0 12 12"
        aria-hidden="true"
      >
        <path
          d="M6 6.82l2.494-2.555a.867.867 0 0 1 1.248 0 .919.919 0 0 1 0 1.277L6.624 8.735a.867.867 0 0 1-1.248 0L2.258 5.542a.919.919 0 0 1 0-1.277.867.867 0 0 1 1.248 0L6 6.819z"
        ></path>
      </svg>
    </div>
    <div class="content" :style="[contentStyle]">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // 记录组件渲染完毕用于处理收起缩放需要用的height属性
      isMounted: false,
      // 是否展开状态
      isOpen: true,
      // 内容高度
      contentHeight: 0
    };
  },
  computed: {
    contentStyle() {
      let { isOpen, contentHeight, isMounted } = this;
      // 只有当元素插入到页面之后才计算高度属性
      if (isMounted) {
        return {
          height: (!isOpen ? 0 : contentHeight) + "px"
        };
      } else {
        return {};
      }
    }
  },
  mounted() {
    // 计算内容高度
    this.setContentHeight();
    this.isMounted = true;
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    },
    setContentHeight() {
      this.contentHeight = this.$slots.default[0].elm.offsetHeight;
    }
  }
};
</script>
<style lang="less" scoped>
.sub-panel {
  width: 210px;
  &.collapse {
    .header {
      .icon {
        transform: rotate(0deg);
      }
    }
  }
  .header {
    height: 30px;
    font-weight: 500;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    cursor: pointer;
    padding: 0px 10px;
    border-top: 1px solid rgb(219, 219, 219);
    transition: all 0.2s ease-in-out 0s;
    .title {
      color: rgb(65, 80, 88);
    }
    .icon {
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: rgb(141, 158, 167);
      transform: rotate(180deg);
      transition: transform 0.2s ease-in-out 0s;
    }
  }
  .content {
    overflow: hidden;
    transition: height 200ms ease-in-out 0s;
  }
}
</style>
