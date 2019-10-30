import {
  generateCurrencyGetters,
  generateCurrencyMutations
} from "@/tools/vuex";

export default {
  namespaced: true,
  state: {
    dialogVisible: true
  },
  getters: {
    ...generateCurrencyGetters(["dialogVisible"])
  },
  mutations: {
    ...generateCurrencyMutations(["dialogVisible"])
  },
  actions: {}
};
