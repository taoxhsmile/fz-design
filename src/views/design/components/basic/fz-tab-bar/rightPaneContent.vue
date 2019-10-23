<template>
  <el-collapse :value="['1']">
    <el-collapse-item title="标签设置" name="1">
      <ul>
        <li v-for="item in selectComponent.list" :key="item.id">
          <div class="content">
            <div class="text">
              <el-input
                placeholder="请输入导航名称"
                :value="item.text"
                maxlength="5"
                @input="
                  val =>
                    setArrayItemValue({
                      item,
                      key: 'text',
                      value: val
                    })
                "
              >
              </el-input>
            </div>
            <div class="img">
              <div class="_left">
                默认图标
                <img :src="item.iconPath" />
              </div>
              <div class="_right">
                选中图标
                <img :src="item.selectedIconPath" />
              </div>
            </div>
            <div class="link">
              链接
            </div>
            <fz-icon name="iconguanbi" v-if="item.del"></fz-icon>
          </div>
        </li>
      </ul>
      <el-row type="flex" justify="center" align="middle">
        <el-button type="primary" style="width:276px;">添加标签</el-button>
      </el-row>
    </el-collapse-item>
    <el-collapse-item title="字体设置" name="1">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="2"></el-col>
          <el-col :span="7">文字颜色</el-col>
          <el-col :span="15">
            <el-color-picker
              :value="selectComponent.color"
              @active-change="
                val =>
                  setSelectComponentProperty({
                    key: 'color',
                    value: val
                  })
              "
            ></el-color-picker>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="2"></el-col>
          <el-col :span="7">选中文字颜色</el-col>
          <el-col :span="15">
            <el-color-picker
              :value="selectComponent.selectedColor"
              @active-change="
                val =>
                  setSelectComponentProperty({
                    key: 'selectedColor',
                    value: val
                  })
              "
            ></el-color-picker>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="2"></el-col>
          <el-col :span="7">背景颜色</el-col>
          <el-col :span="15">
            <el-color-picker
              :value="selectComponent.backgroundColor"
              @active-change="
                val =>
                  setSelectComponentProperty({
                    key: 'backgroundColor',
                    value: val
                  })
              "
            ></el-color-picker>
          </el-col>
        </el-row>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  inject: ["rightPane"],
  computed: {
    selectComponent() {
      return this.rightPane.selectComponent;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty",
      setArrayItemValue: "pageDesign/setArrayItemValue"
    })
  }
};
</script>
<style lang="less" scoped>
ul {
  li {
    box-sizing: border-box;
    padding: 20px 10px;
    .content {
      position: relative;
      padding: 20px 10px;
      border: 2px dashed #c0c4cc;
      border-radius: 3px;
      & > i {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        color: #97999c;
      }
    }
  }
}
</style>
