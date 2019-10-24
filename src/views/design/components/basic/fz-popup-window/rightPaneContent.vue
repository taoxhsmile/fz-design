<template>
  <el-collapse :value="['1', '2', '3']">
    <el-collapse-item title="弹窗名称" name="1">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">弹窗名称</el-col>
          <el-col :span="9">
            <el-input
              resize="none"
              placeholder="请输入弹窗名称"
              :value="selectComponent.title"
              @input="
                val =>
                  setSelectComponentProperty({
                    key: 'title',
                    value: val
                  })
              "
            >
            </el-input>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="触发设置" name="2">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">触发时机</el-col>
          <el-col :span="9">
            <el-select
              :value="customFeature.autoOpenOption"
              @input="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature.autoOpenOption',
                    value: val
                  })
              "
              placeholder="请选择"
            >
              <el-option
                v-for="item in autoOpenOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="关闭设置" name="3">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">自动关闭</el-col>
          <el-col :span="9">
            <el-switch
              v-model="customFeature.autoClose"
              :active-value="0"
              :inactive-value="1"
            ></el-switch>
          </el-col>
          <el-col :span="3">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="customFeature.autoCloseTime"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature.autoCloseTime',
                    value: val
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="9">秒后关闭</el-col>
        </el-row>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  inject: ["rightPane"],
  data() {
    return {
      autoOpenOptions: [
        {
          label: "不自动弹出",
          value: 0
        },
        {
          label: "每天进入页面时",
          value: 1
        },
        {
          label: "每次进入页面时",
          value: 2
        },
        {
          label: "首次授权后弹出",
          value: 3
        }
      ]
    };
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
