export default {
  namespaced: true,
  state: {
    activeIndex: 3
  },
  getters: {
    ...["activeIndex"].reduce((result, property) => {
      result[property] = state => {
        return state[property];
      };
      return result;
    }, {})
  },
  mutations: {
    setActiveIndex(state, activeIndex) {
      state.activeIndex = activeIndex;
    }
  }
};
