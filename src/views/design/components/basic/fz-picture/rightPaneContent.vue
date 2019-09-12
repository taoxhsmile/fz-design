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
            @change="
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
    <el-collapse-item title="字体设置" name="2"> </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["selectComponent", "_styles", "_customFeature"],
  data() {
    return {
      textAlignOptions: [
        {
          label: "居左",
          value: "left"
        },
        {
          label: "居中",
          value: "center"
        },
        {
          label: "居右",
          value: "right"
        }
      ]
    };
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    }),
    setMultipleValue(key, val) {
      let oldVal = this._styles[key];
      if (oldVal.indexOf(val) > -1) {
        val = oldVal.replace(val, "");
      } else {
        val = `${oldVal} ${val}`;
      }
      val = val.trim().replace(/\s*/, " ");
      this.setSelectComponentProperty({
        key: "_styles",
        value: {
          [key]: val || null
        }
      });
    }
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
