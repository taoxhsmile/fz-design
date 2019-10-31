<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="数据绑定" name="1">
      <div class="rightpane__content-wrap">
        <div v-if="customFeature.dataInfo">
          {{ customFeature.dataInfo.name }}{{ customFeature.dataInfo.api }}
        </div>
        <el-row type="flex" justify="center" align="middle">
          <el-button type="primary" @click="() => setDialogVisible(true)">
            绑定数据源
          </el-button>
        </el-row>
      </div>
    </el-collapse-item>

    <el-collapse-item v-if="customFeature.dataInfo" title="子元素" name="2">
      <div class="rightpane__content-wrap">
        <el-row
          type="flex"
          justify="center"
          align="middle"
          v-for="component in components"
          :key="component.__id__"
        >
          <el-col :span="5">{{ component.__name__ }}</el-col>
          <el-col :span="19">
            <el-select
              clearable
              :value="component.customFeature.segment"
              @change="
                val =>
                  setComponentProperty({
                    component,
                    key: 'customFeature',
                    value: { segment: val }
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
    },
    components() {
      let {
          rightPane: {
            selectComponent: { _slots }
          }
        } = this,
        result = [];

      (function getComponents(components) {
        components.forEach(component => {
          if (
            component.__type__ === "fz-text" ||
            component.__type__ === "fz-picture" ||
            component.__type__ === "fz-button"
          ) {
            result.push(component);
          } else if (
            component.__type__ === "fz-free-vessel" ||
            component.__type__ === "fz-static-vessel" ||
            component.__type__ === "fz-list-vessel"
          ) {
            getComponents(component._slots);
          } else if (component.__type__ === "fz-layout-vessel") {
            getComponents(component._leftSlots);
            getComponents(component._rightSlots);
          }
        });
      })(_slots);

      return result;
    }
  },
  methods: {
    ...mapMutations({
      setComponentProperty: "pageDesign/setComponentProperty",
      setDialogVisible: "componentBindDataSourceDialog/setDialogVisible"
    })
  },
  watch: {
    ["dataInfo.id"]: {
      immediate: true,
      handler(val, oldVal) {
        if (!val) return;
        //如果更换了api需要清空所有子元素已选择的字段
        if (val !== oldVal) {
          this.components.forEach(component => {
            this.setComponentProperty({
              component,
              key: "customFeature",
              value: { segment: "" }
            });
          });
        }
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
