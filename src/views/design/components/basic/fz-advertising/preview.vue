<template>
  <div class="fz-advertising-preview">
    <div class="content-wrap">
      <div class="title">小程序关联的公众号</div>
      <div class="content">
        <div class="_left"></div>
        <div class="_right">
          <div class="name">
            公众号名称
          </div>
          <div class="desc">
            公众号简介
          </div>
        </div>
        <button class="follow-btn">关注</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "fz-advertising-preview",
  computed: {
    ...mapGetters({
      tabBar: "pageDesign/tabBar"
    }),
    list() {
      return this.tabBar.list;
    }
  }
};
</script>
<style lang="less" scoped>
.fz-advertising-preview {
  .content-wrap {
    height: 140px;
    padding: 0 20px;
    .title {
      font-size: 14px;
      padding: 20px 0;
    }
    .content {
      position: relative;
      display: flex;
      ._left {
        flex: 0 0 60px;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        background: #ebeef5;
      }
      ._right {
        margin-left: 15px;
        flex: auto;
        min-width: 0;
        .name {
          height: 22px;
          line-height: 22px;
          color: #303133;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
        }
        .desc {
          margin-top: 4px;
          line-height: 17px;
          color: #909399;
          width: 169px;
        }
      }
      .follow-btn {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 56px;
        height: 24px;
        border-radius: 4px;
        border: 1px solid rgba(37, 167, 103, 1);
        color: #1ea462;
      }
    }
  }
}
</style>
