import {
  generateCurrencyGetters,
  generateCurrencyMutations
} from "@/tools/vuex";

export default {
  namespaced: true,
  state: {
    activeIndex: 0
  },
  getters: {
    ...generateCurrencyGetters(["activeIndex"])
  },
  mutations: {
    ...generateCurrencyMutations(["activeIndex"])
  }
};
