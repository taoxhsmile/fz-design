const componentNames = ["fz-text", "fz-picture"];

//将单词第一个字母大写
export function firstLetterToUpper(name) {
  return name.replace(/^(\w)/, function(all, letter) {
    return letter.toUpperCase();
  });
}

//获取所有基础组件的指定部件
export default function getComponents(type) {
  let components = {};
  componentNames.forEach(componentName => {
    //todo
    try {
      components[componentName] = require(`./${componentName}/${type}`).default;
    } catch (e) {
      //e
    }
  });
  return components;
}

export function getPreviewDataByKind(kind) {
  let result = [];
  componentNames.forEach(componentName => {
    //todo
    try {
      let previewData = require(`./${componentName}/previewData`).default;
      if (previewData.kind === kind) {
        result.push(previewData);
      }
    } catch (e) {
      //e
    }
  });
  return result;
}
