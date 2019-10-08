<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="文本内容" name="1">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-input
            type="textarea"
            resize="none"
            placeholder="请输入文本"
            maxlength="500"
            show-word-limit
            :rows="6"
            :value="selectComponent.content"
            @input="
              val =>
                setSelectComponentProperty({
                  key: 'content',
                  value: val
                })
            "
          >
          </el-input>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="字体设置" name="2">
      <!-- 字体 -->
      <rFont />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import rFont from "../common/rFont.vue";

export default {
  inject: ["rightPane"],
  components: {
    rFont
  },
  computed: {
    selectComponent() {
      return this.rightPane.selectComponent;
    }
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
