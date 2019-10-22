<template>
  <div id="screen" class="screen" style="width: 375px; height: 667px;">
    <div class="screen-title" v-if="pageData">
      <span>{{ pageData.__name__ }}</span>
      <span>100%</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      pageData: "pageDesign/pageData"
    })
  }
};
</script>
<style lang="less" scoped>
.screen {
  position: relative;
  top: -13px;
  left: -13px;
  padding: 12px;
  // padding-bottom: 34px;
  background: #fff;
  box-sizing: content-box;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  .screen-title {
    position: absolute;
    left: 50%;
    bottom: 100%;
    width: 100%;
    min-width: 160px;
    margin-bottom: 6px;
    color: #a9afb8;
    pointer-events: none;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    span {
      &:first-child {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 15px;
      }
    }
  }
}
</style>
