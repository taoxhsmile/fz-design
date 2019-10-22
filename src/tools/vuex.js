// 获取随机数不带小数点
export function getRandomId() {
  return (Math.random() + "").replace(/\./, "");
}

//批量生成基础的Getters
export function generateCurrencyGetters(propertys) {
  return propertys.reduce((result, property) => {
    result[property] = state => {
      return state[property];
    };
    return result;
  }, {});
}

//批量生成基础的Mutations
export function generateCurrencyMutations(propertys) {
  return propertys.reduce((result, property) => {
    let key =
      "set" + property.substring(0, 1).toUpperCase() + property.substring(1);
    result[key] = (state, value) => {
      state[property] = value;
    };
    return result;
  }, {});
}

//生成新的pageData
export function generatePageData(state) {
  return {
    __id__: "page_" + getRandomId(),
    __name__: `页面${state.pages.length + 1}`,
    __type__: "page",
    components: [],
    _styles: {}
  };
}

//生成新的componentData
export function generateComponentData({ componentData, inFreeVessel }) {
  //深拷贝一份
  componentData = JSON.parse(JSON.stringify(componentData));
  componentData.__id__ = "component_" + getRandomId();
  componentData.inFreeVessel = inFreeVessel;
  return componentData;
}
