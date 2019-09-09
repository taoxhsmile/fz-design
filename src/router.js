import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/design",
      name: "design-index",
      component: () => import("./views/design/index.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/test.vue")
    }
  ]
});
