import {
  generateCurrencyGetters,
  generateCurrencyMutations
} from "@/tools/vuex";

export default {
  namespaced: true,
  state: {
    dialogVisible: false,
    dataType: 1 //数据类型：动态|静态
  },
  getters: {
    ...generateCurrencyGetters(["dialogVisible", "dataType"])
  },
  mutations: {
    ...generateCurrencyMutations(["dialogVisible", "dataType"])
  },
  actions: {}
};
