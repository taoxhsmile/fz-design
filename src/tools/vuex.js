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

//计算该类型组件在当前页面已经创建了几个
export function getComponentCountByType({ type, pageComponents }) {
  let count = 0;
  if (pageComponents && pageComponents.length) {
    pageComponents.forEach(({ __type__, _slots, _leftSlots, _rightSlots }) => {
      if (type === __type__) {
        count++;
      } else {
        count +=
          getComponentCountByType({
            type,
            pageComponents: _slots,
            count
          }) +
          getComponentCountByType({
            type,
            pageComponents: _leftSlots,
            count
          }) +
          getComponentCountByType({
            type,
            pageComponents: _rightSlots,
            count
          });
      }
    });
  }
  return count;
}
