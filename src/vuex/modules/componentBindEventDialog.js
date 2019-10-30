import {
  generateCurrencyGetters,
  generateCurrencyMutations
} from "@/tools/vuex";

export default {
  namespaced: true,
  state: {
    dialogVisible: false,
    component: null, //当前操作的组件
    dataType: 1 //数据类型：动态|静态
  },
  getters: {
    ...generateCurrencyGetters(["dialogVisible", "component", "dataType"])
  },
  mutations: {
    ...generateCurrencyMutations(["dialogVisible", "component", "dataType"])
  },
  actions: {}
};
