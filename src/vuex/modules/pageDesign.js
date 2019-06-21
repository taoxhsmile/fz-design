import Vue from "vue";
import { Message } from "element-ui";

// 获取随机数不带小数点
function getRandomId() {
  return (Math.random() + "").replace(/\./, "");
}

export default {
  namespaced: true,
  state: {
    pages: [],
    //当前选中的page index
    pageActiveIndex: -1,
    //当前hover的组件
    hoverComponent: null,
    //左侧组件列表hover的组件
    echoComponent: null,
    //选中的组件todo：会存在多个
    selectComponent: null,
    //是否在拖拽
    isDrag: false,
    //是否在缩放
    isResize: false,
    //hover+echo-layer+selec styles
    fixAreaStyles: {
      hoverBorder: {},
      echoLayer: {},
      selectBorder: {}
      // left: 0,
      // top: 0,
      // width: 0,
      // height: 0,
      // borderRadius: 0
    },
    //左侧面板当前活动pane的index 0: screens 1:component
    leftPaneActiveIndex: 0
  },
  getters: {
    pages(state) {
      return state.pages;
    },
    pageActiveIndex(state) {
      return state.pageActiveIndex;
    },
    //当前页面数据
    pageData(state) {
      return state.pages[state.pageActiveIndex] || {};
    },
    //当前页面组件
    pageComponents(state, getters) {
      return getters.pageData._components || [];
    },
    hoverComponent(state) {
      return state.hoverComponent;
    },
    echoComponent(state) {
      return state.echoComponent;
    },
    selectComponent(state) {
      return state.selectComponent;
    },
    isDrag(state) {
      return state.isDrag;
    },
    isResize(state) {
      return state.isResize;
    },
    fixAreaStyles(state) {
      return state.fixAreaStyles;
    },
    leftPaneActiveIndex(state) {
      return state.leftPaneActiveIndex;
    }
  },
  mutations: {
    //新增页面
    addPage(state) {
      state.pages.push({
        __id__: "page" + getRandomId(),
        __name__: `页面${state.pages.length + 1}`,
        _components: []
      });
    },
    //添加组件
    addComponent(state, componentData) {
      if (state.pageActiveIndex < 0) {
        return Message({
          type: "error",
          showClose: true,
          message: "请先选择页面"
        });
      }

      componentData = JSON.parse(JSON.stringify(componentData));
      componentData.__id__ = "component" + getRandomId();

      // 如果当前选中的是布局组件则直接往布局组件内部添加组件
      if (
        state.selectComponent &&
        ["bLayout", "bDuplicate"].indexOf(state.selectComponent.__type__) > -1
      ) {
        if (!state.selectComponent._slots) {
          Vue.set(state.selectComponent, "_slots", [componentData]);
        } else {
          state.selectComponent._slots.push(componentData);
        }
      } else {
        this.getters["pageDesign/pageComponents"].push(componentData);
      }
    },
    setPageActiveIndex(state, pageActiveIndex) {
      //切换页面的时候需要把页面上所有组件的状态清空
      state.hoverComponent = state.echoComponent = state.selectComponent = null;
      state.isDrag = state.isResize = false;

      state.pageActiveIndex = pageActiveIndex;
    },
    //更新整个pageData
    setPageData(state, pageData) {
      state.pageData = pageData;
    },
    //设置当前鼠标移动到的组件
    setHoverComponent(state, hoverComponent) {
      //拖拽 || 缩放 || 已经选中
      if (
        state.isDrag ||
        state.isResize ||
        (hoverComponent && state.selectComponent === hoverComponent)
      )
        return;

      state.hoverComponent = hoverComponent;
    },
    setEchoComponent(state, echoComponent) {
      state.echoComponent = echoComponent;
    },
    setSelectComponent(state, selectComponent) {
      state.selectComponent = selectComponent;
    },
    // 设置选中组件的数据 传入 key和value
    setSelectComponentProperty({ selectComponent }, { key, value }) {
      if (Object.prototype.toString.call(value) === "[object Object]") {
        selectComponent[key] = { ...selectComponent[value], ...value };
      } else {
        selectComponent[key] = value;
      }
    },
    setIsDrag(state, isDrag) {
      state.isDrag = isDrag;
    },
    setIsResize(state, isResize) {
      state.isResize = isResize;
    },
    setFixAreaStyles(state, { type, fixAreaStyles }) {
      state.fixAreaStyles[type] = {
        ...JSON.parse(JSON.stringify(fixAreaStyles))
      };
    },
    //设置左侧面板聚焦的tab
    setLeftPaneActiveIndex(state, leftPaneActiveIndex) {
      state.leftPaneActiveIndex = leftPaneActiveIndex;
    }
  },
  actions: {}
};
