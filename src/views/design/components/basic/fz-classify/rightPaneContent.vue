<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="数据绑定" name="1">
      <div class="rightpane__content-wrap">
        <div v-if="dataInfo">{{ dataInfo.name }}{{ dataInfo.api }}</div>
        <el-row type="flex" justify="center" align="middle">
          <el-button type="primary" @click="() => setDialogVisible(true)">
            绑定数据源
          </el-button>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="使用字段" name="2" v-if="dataInfo">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="5">前端</el-col>
          <el-col :span="19">
            <el-select
              clearable
              :value="customFeature.frontUsefield"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature.frontUsefield',
                    value: val
                  })
              "
              placeholder="请选择相应字段"
            >
              <el-option
                v-for="item in apiOutputFields"
                :key="item.field"
                :label="item.name"
                :value="item.field"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="5">接口</el-col>
          <el-col :span="19">
            <el-select
              clearable
              :value="customFeature.apiUsefield"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature.apiUsefield',
                    value: val
                  })
              "
              placeholder="请选择相应字段"
            >
              <el-option
                v-for="item in apiOutputFields"
                :key="item.field"
                :label="item.name"
                :value="item.field"
              >
              </el-option>
            </el-select>
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
  data() {
    return {
      apiOutputFields: []
    };
  },
  computed: {
    selectComponent() {
      return this.rightPane.selectComponent;
    },
    customFeature() {
      return this.selectComponent.customFeature;
    },
    dataInfo() {
      return this.customFeature.dataInfo;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty",
      setDialogVisible: "componentBindDataSourceDialog/setDialogVisible"
    })
  },
  watch: {
    ["dataInfo.id"]: {
      immediate: true,
      handler(val) {
        if (!val) return;
        //调用接口获取api最新的输出字段
        this.$fetchGet("/mock/api/detail", { id: this.dataInfo.id }).then(
          ({ data }) => {
            this.apiOutputFields = data.output;
          }
        );
      }
    }
  }
};
</script>
