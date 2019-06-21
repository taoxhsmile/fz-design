<template>
  <div class="rightpane-content">
    <div class="aside">
      <div class="header">header</div>
      <div class="arrange">arrange</div>
      <div class="main">
        <component v-if="selectComponent" :is="editView"></component>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import getBasicComponents from "./basic/index.js";
export default {
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
    }),
    editView() {
      let { selectComponent } = this;
      if (!selectComponent) {
        return null;
      }
      return getBasicComponents("editView")[
        `${selectComponent.__type__}EditView`
      ];
    }
  }
};
</script>
<style lang="less" scoped>
.rightpane-content {
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  overflow: hidden;
  .aside {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255);
    .header {
      height: 32px;
      padding-left: 10px;
      padding-right: 12px;
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      background: rgb(242, 243, 244);
      overflow: hidden;
    }
    .arrange {
      height: 32px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid rgb(235, 235, 235);
    }
    .main {
      width: 208px;
      overflow-x: hidden;
      overflow-y: auto;
      flex: 1 1 0%;
    }
    .main /deep/ .line {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      min-height: 22px;
      &:not(:last-child) {
        margin-bottom: 12px;
      }
      .side {
        flex: 0 0 90px;
      }
      .left-label {
        height: 22px;
        color: rgb(31, 41, 46);
        line-height: 22px;
      }
      .right-content {
        width: 148px;
        display: flex;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
      }
    }
    .main /deep/ .side {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
    }
    .main /deep/ .panel-body {
      width: 210px;
      color: rgb(91, 107, 115);
      padding: 12px 10px;
    }
  }
}
</style>
