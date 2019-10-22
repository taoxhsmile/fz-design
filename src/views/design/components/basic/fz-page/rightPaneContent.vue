<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="页面名称" name="1">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-input
            resize="none"
            placeholder="请输入按钮内容"
            :value="selectComponent.__name__"
            @input="
              val =>
                setSelectComponentProperty({
                  key: '__name__',
                  value: val
                })
            "
          >
          </el-input>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="背景颜色" name="2">
      <rBackground />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import rBackground from "../common/rBackground.vue";

export default {
  inject: ["rightPane"],
  components: {
    rBackground
  },
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
    })
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
<style lang="less" scoped>
ul.font-style {
  display: flex;
  padding: 0px 5px;
  border-radius: 4px;
  border: 1px solid rgba(216, 220, 230, 1);
  width: 118px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 32px;
  li {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    border-radius: 4px;
    color: #909399;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active {
      background: #409eff;
      color: white;
    }
  }
}
</style>
