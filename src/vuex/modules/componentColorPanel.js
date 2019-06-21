export default {
  namespaced: true,
  state: {
    //选择完颜色之后的回调
    callback: () => {},
    //颜色选择框的位置
    left: 0,
    top: 0,
    position: {
      left: 0,
      top: 0
    },
    //控制是否显示
    show: false,
    //初始默认颜色
    color: "#FFFFFF"
  },
  getters: {},
  mutations: {
    //初始化
    showColorPanel(state, { boundingClientRect, color, callback }) {
      let { left, top } = boundingClientRect;
      state.position = { ...state.position, left: left - 270, top: top - 130 };
      state.show = true;
      state.color = color;
      state.callback = callback;
    },
    //处理拖拽
    setPosition(state, position) {
      state.position = { ...state.position, ...position };
    },
    //控制隐藏
    setShow(state, show) {
      state.show = show;
    }
  },
  actions: {}
};
