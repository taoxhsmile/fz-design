const componentNames = ["text", "picture"];

//将单词第一个字母大写
export function firstLetterToUpper(name) {
  return name.replace(/^(\w)/, function(all, letter) {
    return letter.toUpperCase();
  });
}

//获取组件名称
export function getComponentName(name, type) {
  return "b" + firstLetterToUpper(name) + firstLetterToUpper(type);
}

//获取所有基础组件的指定部件
export default function getBasicComponents(type) {
  let components = {};
  componentNames.forEach(componentName => {
    let key = getComponentName(componentName, type);
    //todo
    try {
      components[key] = require(`./${componentName}/${type}`).default;
    } catch (e) {
      //e
    }
  });
  return components;
}
