<template>
  <div class="leftpane-page-library">
    <!-- 页面列表 -->
    <ul class="page-list">
      <li
        v-for="(page, i) in pages"
        :key="page.__id__"
        @click="setPagesActiveIndex(i)"
        :class="{ active: pagesActiveIndex === i }"
      >
        {{ page.__name__ }}
        <div class="right">
          <el-tooltip
            class="item"
            effect="dark"
            placement="bottom"
            :open-delay="200"
          >
            <fz-icon name="icontupian"></fz-icon>
            <template slot="content">
              <ul class="leftpane-page-library-tooltip-list">
                <li>设置</li>
                <li>收藏</li>
                <li>创建副本</li>
                <li>删除</li>
              </ul>
            </template>
          </el-tooltip>
        </div>
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
      pagesActiveIndex: "pageDesign/pagesActiveIndex"
    })
  },
  methods: {
    ...mapMutations({
      addPage: "pageDesign/addPage",
      setPagesActiveIndex: "pageDesign/setPagesActiveIndex"
    })
  }
};
</script>
<style lang="less" scoped>
.leftpane-page-library {
  ul {
    margin-bottom: 5px;
    li {
      position: relative;
      height: 48px;
      line-height: 48px;
      padding-left: 24px;
      color: #606266;
      font-size: 16px;
      cursor: pointer;
      color: #606266;
      &.active {
        background: @system-theme-color;
        color: white;
      }
      .right {
        position: absolute;
        right: 20px;
        top: 0;
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
<style lang="less">
.leftpane-page-library-tooltip-list {
  li {
    width: 100px;
    height: 28px;
    line-height: 28px;
    color: white;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: @system-theme-color;
    }
  }
}
</style>
