import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";
//注册eventBus
import eventBus from "./eventBus.js";
import { registerComponents } from "@/components/index.js";

//注册全局组件
registerComponents(Vue);

Vue.use(eventBus);

Vue.use(ElementUI, { size: "small", zIndex: 3000 });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
