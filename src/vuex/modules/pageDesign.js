import { Message } from "element-ui";
import $ from "jquery";

// 获取随机数不带小数点
function getRandomId() {
  return (Math.random() + "").replace(/\./, "");
}

export default {
  namespaced: true,
  state: {
    //页面列表
    pages: [],
    //当前选中的page index
    pageActiveIndex: -1,
    //当前hover的组件
    hoverComponent: null,
    //选中的组件todo：会存在多个
    selectComponent: null,
    //是否在拖拽
    dragComponent: null,
    //左侧面板当前活动pane的index 0: screens 1:component
    leftPaneActiveIndex: 0
  },
  getters: {
    ...[
      "pages",
      "pageActiveIndex",
      "hoverComponent",
      "selectComponent",
      "dragComponent",
      "leftPaneActiveIndex"
    ].reduce((result, property) => {
      result[property] = state => {
        return state[property];
      };
      return result;
    }, {}),
    //当前页面数据
    pageData(state) {
      return state.pages[state.pageActiveIndex] || {};
    },
    //当前页面组件
    pageComponents(state, getters) {
      return getters.pageData._components || [];
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
    addComponent(state, { componentData, index, insertList }) {
      insertList = insertList || this.getters["pageDesign/pageComponents"];

      if (state.pageActiveIndex < 0) {
        return Message({
          type: "error",
          showClose: true,
          message: "请先选择页面"
        });
      }
      //深拷贝一份
      componentData = JSON.parse(JSON.stringify(componentData));
      componentData.__id__ = "component" + getRandomId();

      if (index >= 0) {
        insertList.splice(index, 0, componentData);
      } else {
        insertList.push(componentData);
      }
    },
    //删除指定组件
    delComponent(state, { list, index }) {
      if (list[index] === state.selectComponent) {
        state.selectComponent = null;
      }
      list.splice(index, 1);
    },
    setPageActiveIndex(state, pageActiveIndex) {
      //切换页面的时候需要把页面上所有组件的状态清空
      state.dragComponent = state.hoverComponent = state.selectComponent = null;
      state.pageActiveIndex = pageActiveIndex;
    },
    //更新整个pageData
    setPageData(state, pageData) {
      state.pageData = pageData;
    },
    //设置当前鼠标移动到的组件
    setHoverComponent(state, hoverComponent) {
      state.hoverComponent = hoverComponent;
    },
    setSelectComponent(state, selectComponent) {
      state.selectComponent = selectComponent;
    },
    // 设置选中组件的数据 传入 key和value
    setSelectComponentProperty({ selectComponent }, { key, value }) {
      let oldValue = selectComponent;
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
        selectComponent = selectComponent[k];
      });
      selectComponent[_key] = value;
    },
    setDragComponent(state, dragComponent) {
      state.dragComponent = dragComponent;
    },
    //设置左侧面板聚焦的tab
    setLeftPaneActiveIndex(state, leftPaneActiveIndex) {
      state.leftPaneActiveIndex = leftPaneActiveIndex;
    }
  },
  actions: {}
};
