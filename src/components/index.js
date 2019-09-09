/*
 * 全局注册的组件
 */
let components = [
  {
    prefix: "fz-",
    path: "fz",
    list: ["icon"]
  }
];

function registerComponents(Vue) {
  components.forEach(({ list, path, prefix }) => {
    if (list && list.length) {
      list.forEach(name => {
        try {
          Vue.component(
            prefix + name,
            require("@/components/" + path + "/" + name + ".vue").default
          );
        } catch (e) {
          console.log("registerComponents:", e);
        }
      });
    }
  });
}

export default registerComponents;
export { registerComponents };
