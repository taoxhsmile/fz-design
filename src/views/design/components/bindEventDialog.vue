<template>
  <el-dialog
    title="绑定数据"
    :modal-append-to-body="false"
    :visible.sync="dialogVisible"
  >
    <!-- 动态|静态 -->
    <el-card shadow="never">
      <div slot="header">
        数据类型
      </div>
      <el-row>
        <el-radio :value="dataType" @input="val => setDataType(val)" :label="1">
          动态
        </el-radio>
        <el-radio :value="dataType" @input="val => setDataType(val)" :label="2">
          静态
        </el-radio>
      </el-row>
    </el-card>
    <template v-if="dataType === 1">
      <el-card shadow="never">
        <div slot="header">
          列表
        </div>
        <ul class="api-list">
          <li
            v-for="(item, i) in apiList"
            :key="i"
            @click="activeApiIndex = i"
            :class="{ active: activeApiIndex === i }"
          >
            {{ item.name }} {{ item.url }}
          </li>
        </ul>
      </el-card>
      <div v-if="activeApi">
        <el-card shadow="never">
          <div slot="header">
            详情
          </div>
          <div>{{ activeApi.desc }}</div>
        </el-card>
        <el-card shadow="never">
          <div slot="header">
            入参
          </div>
          <div v-for="(value, key) in activeApi.input" :key="key">
            {{ key }}【{{ value.name }}】
            <el-button type="primary" @click="showSelectComponentDialog">
              选择组件
            </el-button>
          </div>
        </el-card>
        <el-card shadow="never">
          <div slot="header">
            出参
          </div>
          <div v-for="(value, key) in activeApi.output" :key="key">
            {{ key }}【{{ value.name }}】
            <el-button type="primary">选择组件</el-button>
          </div>
        </el-card>
      </div>
    </template>
    <el-row v-if="dataType === 2"> </el-row>
  </el-dialog>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      apiList: [],
      activeApiIndex: null
    };
  },
  computed: {
    ...mapGetters({
      dialogVisible: "componentBindEventDialog/dialogVisible",
      dataType: "componentBindEventDialog/dataType"
    }),
    activeApi() {
      let { activeApiIndex, apiList } = this;
      return activeApiIndex >= 0 ? apiList[activeApiIndex] : null;
    }
  },
  created() {
    this.loadApiList();
  },
  methods: {
    ...mapMutations({
      setDataType: "componentBindEventDialog/setDataType"
    }),
    loadApiList() {
      this.$fetchGet("/mock/api/list").then(({ data }) => {
        this.apiList = data;
      });
    },
    showSelectComponentDialog() {}
  }
};
</script>
<style lang="less" scoped>
.api-list {
  li {
    border: 1px solid #ddd;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &.active {
      background-color: #409eff;
      color: white;
    }
  }
}
</style>
