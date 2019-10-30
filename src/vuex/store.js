import Vue from "vue";
import Vuex from "vuex";
import pageDesign from "./modules/pageDesign.js";
import componentLeftToolbarFunctionalList from "./modules/componentLeftToolbarFunctionalList.js";
import componentColorPanel from "./modules/componentColorPanel.js";
import componentColorPicker from "./modules/componentColorPicker.js";
import componentArtBoard from "./modules/componentArtBoard.js";
import componentBindEventDialog from "./modules/componentBindEventDialog.js";
import componentSelectComponentDialog from "./modules/componentSelectComponentDialog.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    //页面数据
    pageDesign,
    //组件数据
    componentLeftToolbarFunctionalList,
    componentColorPanel,
    componentColorPicker,
    componentArtBoard,
    componentBindEventDialog,
    componentSelectComponentDialog
  }
});
