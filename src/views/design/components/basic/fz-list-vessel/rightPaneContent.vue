<template>
  <el-collapse :value="['1', '2', '3', '4']">
    <el-collapse-item title="组件设置" name="1">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">类型</el-col>
          <el-col :span="9">
            <el-select
              style="width:88px;"
              :value="customFeature.displayType"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { displayType: val }
                  })
              "
              placeholder="请选择"
            >
              <el-option
                v-for="item in displayTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <!-- 列宽 -->
        <el-row
          type="flex"
          justify="center"
          align="middle"
          v-if="customFeature.displayType === 1"
        >
          <el-col :span="3">列宽</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="125"
              :value="customFeature.columnWidth"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { columnWidth: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <!-- 列数 -->
        <el-row
          type="flex"
          justify="center"
          align="middle"
          v-if="customFeature.displayType === 2"
        >
          <el-col :span="3">列数</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="1"
              :max="3"
              :value="customFeature.column"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { column: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>
    </el-collapse-item>

    <el-collapse-item title="列表高度" name="2">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">
            类型
          </el-col>
          <el-col :span="9">
            <el-select
              style="width:88px;"
              :value="customFeature.heightType"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { heightType: val }
                  })
              "
              placeholder="请选择"
            >
              <el-option
                v-for="item in heightTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>

        <el-row
          type="flex"
          justify="center"
          align="middle"
          v-if="
            customFeature.heightType === 1 || customFeature.heightType === 2
          "
        >
          <el-col :span="3">每次加载条数</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="1"
              :max="3"
              :value="customFeature.pageSize"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { pageSize: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>

        <el-row
          type="flex"
          justify="center"
          align="middle"
          v-if="customFeature.heightType === 1"
        >
          <el-col :span="3">列表高度</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="20"
              :value="customFeature.columnHeight"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { columnHeight: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>

        <el-row
          type="flex"
          justify="center"
          align="middle"
          v-if="customFeature.heightType === 3"
        >
          <el-col :span="3">总条数</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="1"
              :value="customFeature.totalSize"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { totalSize: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>
    </el-collapse-item>

    <el-collapse-item title="数据绑定" name="3">
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

    <el-collapse-item v-if="customFeature.dataInfo" title="子元素" name="4">
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
      displayTypeOptions: [
        { label: "单行", value: 1 },
        { label: "多行", value: 2 }
      ],
      heightTypeOptions: [
        { label: "自定义高度", value: 1 },
        { label: "自适应高度", value: 2 },
        { label: "自定义条数", value: 3 }
      ],
      apiOutputFields: []
    };
  },
  computed: {
    customFeature() {
      return this.rightPane.customFeature;
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
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty",
      setDialogVisible: "componentBindDataSourceDialog/setDialogVisible",
      setComponentProperty: "pageDesign/setComponentProperty"
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
