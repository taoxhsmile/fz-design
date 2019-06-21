<template>
  <div
    class="rn-list-item"
    :class="{
      hover: data === hoverComponent
    }"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <slot name="svg"></slot>
    <span class="editable-span editable-name">
      <slot name="name"></slot>
    </span>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "comm-leftpaneRightnav",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent",
      hoverComponent: "pageDesign/hoverComponent"
    })
  },
  methods: {
    ...mapMutations({
      setEchoComponent: "pageDesign/setEchoComponent"
    }),
    mouseover() {
      this.setEchoComponent(this.data);
    },
    mouseout() {
      this.setEchoComponent(null);
    }
  }
};
</script>
<style lang="less" scoped>
.rn-list-item {
  position: relative;
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  color: rgb(91, 107, 115);
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  &.hover {
    color: rgb(41, 141, 248);
    .icon {
      color: inherit;
    }
  }
  .icon {
    margin-right: 5px;
    width: 16px;
    height: 16px;
    font-size: 16px;
    color: rgb(65, 80, 88);
  }
  span {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }
  .editable-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1 1 0%;
  }
  .editable-span {
    margin-right: 14px;
    width: 100%;
    height: 24px;
    line-height: 22px;
    overflow: hidden;
  }
  .expander {
    height: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 15px;
    margin-top: 1px;
    margin-left: -12px;
    text-align: center;
    color: rgb(200, 205, 208);
  }
}
</style>
