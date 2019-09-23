import { Message } from "element-ui";
import $ from "jquery";
import {
  generateCurrencyGetters,
  generateCurrencyMutations,
  generatePageData,
  generateComponentData
} from "@/tools/vuex";

export default {
  namespaced: true,
  state: {
    //页面列表
    pages: [],
    //当前选中的page index
    pagesActiveIndex: -1,
    //当前hover的组件
    hoverComponent: null,
    //当前选中的组件
    selectComponent: null,
    //当前拖拽中的组件
    dragComponent: null
  },
  getters: {
    ...generateCurrencyGetters([
      "pages",
      "pagesActiveIndex",
      "hoverComponent",
      "selectComponent",
      "dragComponent"
    ]),
    //当前页面数据
    pageData({ pages, pagesActiveIndex }) {
      return pages[pagesActiveIndex] || {};
    },
    //当前页面组件
    pageComponents(state, getters) {
      return getters.pageData.components || [];
    }
  },
  mutations: {
    ...generateCurrencyMutations([
      "pageData",
      "hoverComponent",
      "selectComponent",
      "dragComponent"
    ]),
    //新增页面
    addPage(state) {
      state.pages.push(generatePageData(state));
    },
    //添加组件
    addComponent(
      state,
      { componentData, index, insertList, inFreeVessel = false, cb }
    ) {
      //判断是否传入list如果有就用传入的list 否则添加到root下
      insertList = insertList || this.getters["pageDesign/pageComponents"];

      if (state.pagesActiveIndex < 0) {
        return Message({
          type: "error",
          showClose: true,
          message: "请先选择页面"
        });
      }

      componentData = generateComponentData({ componentData, inFreeVessel });

      //判断是添加还是插入
      if (index != null && index >= 0) {
        insertList.splice(index, 0, componentData);
      } else {
        insertList.push(componentData);
      }

      //执行回调
      cb && cb({ componentData });
    },
    //删除指定组件
    delComponent(state, { list, index }) {
      //如果删除的组件是当前选中的组件则清空selectComponent字段
      if (list[index] === state.selectComponent) {
        state.selectComponent = null;
      }
      list.splice(index, 1);
    },
    setPagesActiveIndex(state, pagesActiveIndex) {
      //切换页面的时候需要把页面上所有组件的状态清空
      state.dragComponent = state.hoverComponent = state.selectComponent = null;
      state.pagesActiveIndex = pagesActiveIndex;
    },
    // 设置选中组件的数据 传入 key和value
    setSelectComponentProperty({ selectComponent }, { key, value }) {
      this.commit("pageDesign/setComponentProperty", {
        component: selectComponent,
        key,
        value
      });
    },
    // 更新复杂的属性
    setComponentProperty(state, { component, key, value }) {
      component = component || state.selectComponent;

      let oldValue = component;
      key = key.split(".");
      key.forEach(k => {
        oldValue = oldValue[k];
      });

      if ($.isPlainObject(value)) {
        value = { ...oldValue, ...value };
        Object.keys(value).forEach(key => {
          if (value[key] == null) delete value[key];
        });
      }

      let _key = key.pop();
      key.forEach(k => {
        component = component[k];
      });
      component[_key] = value;
    }
  },
  actions: {}
};
