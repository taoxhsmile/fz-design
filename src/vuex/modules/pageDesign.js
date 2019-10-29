import { Message } from "element-ui";
import Vue from "vue";
import $ from "jquery";
import {
  generateCurrencyGetters,
  generateCurrencyMutations,
  generatePageData,
  generateComponentData,
  getComponentCountByType
} from "@/tools/vuex";
import { getPreviewDataByComponentName } from "@/views/design/components/basic/index";
import tabBarDefaultData from "@/views/design/components/basic/fz-tab-bar/previewData.js";

export default {
  namespaced: true,
  state: {
    //页面列表
    pages: [],
    //当前选中的page index
    pagesActiveIndex: -1,
    //当前hover的组件
    hoverComponent: null,
    //当前选中的组件|页面|全局组件
    selectComponent: null,
    //当前拖拽中的组件
    dragComponent: null,
    //导航
    tabBar: tabBarDefaultData,
    //当前选中的弹窗组件
    activePopupWindow: null
  },
  getters: {
    ...generateCurrencyGetters([
      "pages",
      "pagesActiveIndex",
      "hoverComponent",
      "selectComponent",
      "dragComponent",
      "tabBar",
      "activePopupWindow"
    ]),
    //当前页面数据
    pageData({ pages, pagesActiveIndex }) {
      return pages[pagesActiveIndex] || null;
    },
    //当前页面组件
    pageComponents(state, getters) {
      return (getters.pageData && getters.pageData.components) || [];
    },
    //弹窗
    selectComponentIsPopupWindow({ activePopupWindow }) {
      return !!activePopupWindow;
    }
  },
  mutations: {
    ...generateCurrencyMutations(["hoverComponent", "dragComponent"]),
    //新增页面
    addPage(state) {
      state.pages.push(generatePageData(state));
      //设置默认选中当前新增的页面
      let pageData = state.pages[state.pages.length - 1];
      this.commit("pageDesign/setSelectComponent", pageData);
    },
    //添加组件
    addComponent(
      state,
      { componentData, index, insertList, inFreeVessel = false, cb }
    ) {
      //判断是否传入list如果有就用传入的list 否则添加到root下
      insertList = insertList || this.getters["pageDesign/pageComponents"];

      //添加组件之前判断页面是否创建
      if (state.pagesActiveIndex < 0) {
        return Message({
          type: "error",
          showClose: true,
          message: "请先选择页面"
        });
      }
      //有些组件一个页面只能添加一个,需要进行判断
      try {
        let previewData = getPreviewDataByComponentName(componentData.__type__),
          {
            componentOptions: { limit }
          } = previewData;
        if (
          limit &&
          getComponentCountByType({
            type: componentData.__type__,
            pageComponents: this.getters["pageDesign/pageComponents"]
          }) >= limit
        ) {
          return Message({
            type: "error",
            showClose: true,
            message: `${componentData.__name__}组件一个页面只能有一个`
          });
        }
      } catch (e) {
        //e
      }

      //初始化组件数据
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
      state.dragComponent = state.hoverComponent = null;
      state.pagesActiveIndex = pagesActiveIndex;
      state.selectComponent = this.getters["pageDesign/pageData"];
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
      Vue.set(component, _key, value);
    },
    //设置数组子项的值
    setArrayItemValue(state, { item, key, value }) {
      Vue.set(item, key, value);
    },
    setSelectComponent(state, selectComponent) {
      state.selectComponent = selectComponent;
      //弹窗组件
      if (selectComponent && selectComponent.__type__ === "fz-popup-window") {
        if (
          state.activePopupWindow &&
          state.activePopupWindow === selectComponent
        ) {
          state.activePopupWindow = null;
        } else {
          state.activePopupWindow = selectComponent;
        }
      } else {
        state.activePopupWindow = null;
      }
    }
  },
  actions: {}
};
