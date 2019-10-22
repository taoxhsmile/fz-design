import { Message } from "element-ui";
import Vue from "vue";
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
    //当前选中的组件|页面|全局组件
    selectComponent: null,
    //当前拖拽中的组件
    dragComponent: null,
    //导航
    tabBar: {
      __type__: "fz-tab-bar",
      list: [
        {
          id: 1,
          title: "首页",
          img:
            "https://staticimg.ngmm365.com/210d689137104ff10cd2c1456b9dd418-w16_h16.png",
          activeImg:
            "https://staticimg.ngmm365.com/b12d58b65ab440f7fa7b7dab0ec1d367-w16_h16.png"
        },
        {
          id: 2,
          title: "购物车",
          img:
            "https://staticimg.ngmm365.com/e456189870c9037125d9888db42f836a-w16_h16.png",
          activeImg:
            "https://staticimg.ngmm365.com/aec64fdc5dd9d7e364bd8d1b32a41619-w16_h16.png"
        },
        {
          id: 3,
          title: "我的",
          img:
            "https://staticimg.ngmm365.com/09d2c2881807c8a5f5d4a9bb169a6eb6-w16_h16.png",
          activeImg:
            "https://staticimg.ngmm365.com/ad3379a25a4e0c27958be518ddc31cfd-w16_h16.png"
        }
      ]
    }
  },
  getters: {
    ...generateCurrencyGetters([
      "pages",
      "pagesActiveIndex",
      "hoverComponent",
      "selectComponent",
      "dragComponent",
      "tabBar"
    ]),
    //当前页面数据
    pageData({ pages, pagesActiveIndex }) {
      return pages[pagesActiveIndex] || null;
    },
    //当前页面组件
    pageComponents(state, getters) {
      return (getters.pageData && getters.pageData.components) || [];
    }
  },
  mutations: {
    ...generateCurrencyMutations([
      "hoverComponent",
      "selectComponent",
      "dragComponent"
    ]),
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

      if (state.pagesActiveIndex < 0) {
        return Message({
          type: "error",
          showClose: true,
          message: "请先选择页面"
        });
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
    }
  },
  actions: {}
};
