<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <!-- 大小 -->
      <rSize :type="2" />
      <!-- 位置 -->
      <rMargin :type="2" />
      <!-- 背景 -->
      <rBackground />
    </el-collapse-item>
    <el-collapse-item title="颜色设置" name="2">
      <div class="rightpane__content-wrap border">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="5">初始</el-col>
          <el-col :span="19">
            <el-color-picker
              :value="customFeature.defaultColor"
              @active-change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature.defaultColor',
                    value: val
                  })
              "
            ></el-color-picker>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="5">选中</el-col>
          <el-col :span="19">
            <el-color-picker
              :value="customFeature.activeColor"
              @active-change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature.activeColor',
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
import rSize from "../common/rSize";
import rMargin from "../common/rMargin";
import rBackground from "../common/rBackground";
import { mapMutations } from "vuex";
export default {
  inject: ["rightPane"],
  components: {
    rSize,
    rMargin,
    rBackground
  },
  computed: {
    selectComponent() {
      return this.rightPane.selectComponent;
    },
    customFeature() {
      return this.selectComponent.customFeature;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
