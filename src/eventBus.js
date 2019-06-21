export let $eventBus = null;

export default function(Vue) {
  Vue.prototype.$eventBus = $eventBus = new Vue();
}
