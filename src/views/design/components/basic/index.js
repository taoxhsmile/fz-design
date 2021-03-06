const componentNames = [
  ...["fz-text", "fz-picture", "fz-button"],
  "fz-video",
  "fz-carousel",
  "fz-dividingline",
  "fz-empty",
  "fz-tab-bar",
  "fz-advertising",
  "fz-popup-window",
  ...[
    "fz-form-vessel",
    "fz-free-vessel",
    "fz-layout-vessel",
    "fz-static-vessel",
    "fz-list-vessel"
  ],
  ...["fz-form-input", "fz-form-textarea", "fz-form-button"],
  ...["fz-classify"]
];

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
      components[componentName] = () => import(`./${componentName}/${type}`);
    } catch (e) {
      console.log(e);
    }
  });
  return components;
}

export function getPreviewData() {
  let result = {};
  componentNames.forEach(componentName => {
    //todo
    try {
      let previewData = require(`./${componentName}/previewData`);
      result[componentName] = previewData;
    } catch (e) {
      //e
    }
  });
  return result;
}

export function getPreviewDataByKind(kind) {
  let result = [];
  componentNames.forEach(componentName => {
    //todo
    try {
      let previewData = require(`./${componentName}/previewData`),
        { componentInfo } = previewData;

      if (componentInfo.kind === kind) {
        result.push(previewData);
      }
    } catch (e) {
      //e
    }
  });
  return result;
}

export function getPreviewDataByComponentName(componentName) {
  let previewData = null;
  try {
    previewData = require(`./${componentName}/previewData`);
  } catch (e) {
    //e
  }
  return previewData;
}
