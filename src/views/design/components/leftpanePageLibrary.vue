<template>
  <div class="leftpane-page-library">
    <!-- 页面列表 -->
    <ul class="page-list">
      <li
        v-for="(page, i) in pages"
        :key="page.__id__"
        @click="setPageActiveIndex(i)"
      >
        {{ page.__name__ }}
        <dl class="tools">
          <dd>
            <fz-icon name="iconbianji"></fz-icon>
          </dd>
          <dd>
            <fz-icon name="iconshoucang"></fz-icon>
          </dd>
          <dd>
            <fz-icon name="iconfuzhi"></fz-icon>
          </dd>
          <dd>
            <fz-icon name="iconshanchu"></fz-icon>
          </dd>
        </dl>
      </li>
    </ul>
    <button class="addpage-btn" @click="addPage">添加页面</button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      leftPaneActiveIndex: "pageDesign/leftPaneActiveIndex",
      pages: "pageDesign/pages",
      pageActiveIndex: "pageDesign/pageActiveIndex"
    })
  },
  methods: {
    ...mapMutations({
      addPage: "pageDesign/addPage",
      setPageActiveIndex: "pageDesign/setPageActiveIndex"
    })
  }
};
</script>
<style lang="less" scoped>
.leftpane-page-library {
  ul {
    margin-bottom: 5px;
    li {
      &:hover {
        background: #f8f8f8;
      }
      position: relative;
      height: 48px;
      line-height: 48px;
      padding-left: 24px;
      color: #606266;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        dl {
          display: flex;
        }
      }
      dl {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
        display: none;
        dd {
          padding: 0 10px;
          color: #909399;
          &:hover {
            color: #2b8cff;
          }
        }
      }
    }
  }
  .addpage-btn {
    width: 276px;
    height: 40px;
    border: 1px solid #2b8cff;
    font-size: 16px;
    padding: 0;
    margin: 0 auto;
    display: block;
    color: #2b8cff;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    background: none;
  }
}
</style>
