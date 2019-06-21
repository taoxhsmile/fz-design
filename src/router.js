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
    },
    {
      path: "/test/index",
      name: "test-index",
      component: () => import("./views/test/index.vue")
    },
    {
      path: "/test1",
      name: "test1",
      component: () => import("./views/test1.vue")
    },
    {
      path: "/test2",
      name: "test2",
      component: () => import("./views/test2.vue")
    }
  ]
});
