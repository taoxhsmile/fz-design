import $ from "jquery";
import { Enum } from "@design/components/tools/util";

//容器classname
const containerClassName = "component-container";
const previewTypes = Enum([
  "widgetPreview",
  "freeVesselPreview",
  "layoutVesselPreview"
]);

function getPreviewType({ $container }) {
  let previewType = null;
  if ($container.hasClass("widget-preview")) {
    previewType = previewTypes.widgetPreview;
  } else if ($container.hasClass("free-vessel-preview")) {
    previewType = previewTypes.freeVesselPreview;
  } else if ($container.hasClass("layout-vessel-preview")) {
    previewType = previewTypes.layoutVesselPreview;
  }
  return previewType;
}

function mouseInDom({ pageX, pageY, position, dom }) {
  return (
    pageX > position.left &&
    pageX < position.left + dom.width() &&
    pageY > position.top &&
    pageY < position.top + dom.height()
  );
}

//获取Container和WidgetView
export let createGetInsertContainerAndWidgetView = ({
  dragTarget //拖拽对象
  // isCreate = false //是否为新建
}) => {
  let result = null;
  function getInsertContainerAndWidgetView({ $container, pageX, pageY }) {
    //初始化根容器
    if ($container == null) {
      $container = $(`.${containerClassName}`).eq(0);
    }

    let previewType = getPreviewType({ $container }),
      position = $container.offset();

    //判断鼠标是否在该容器内
    if (mouseInDom({ dom: $container, pageX, pageY, position })) {
      //找到容器内部所有的子项
      let $widgetViews = null;

      if (previewType === previewTypes.widgetPreview) {
        //面板+root
        $widgetViews = $container.find("> .widget-view");
      } else if (previewType === previewTypes.freeVesselPreview) {
        //自由面板
        $widgetViews = $container.find("> .free-widget-view");
      } else if (previewType === previewTypes.layoutVesselPreview) {
        //双栏
        let $containers = $container.find(`.cell > .${containerClassName}`);
        for (let i = 0; i < $containers.length; i++) {
          result = getInsertContainerAndWidgetView({
            $container: $containers.eq(i),
            pageX,
            pageY
          });
          if (result) return result;
        }
      }

      //（面板||自由面板）容器是空的则直接返回当前容器
      if (
        previewType === previewTypes.widgetPreview ||
        previewType === previewTypes.freeVesselPreview
      ) {
        if (
          $widgetViews.length === 0 ||
          ($widgetViews.length === 1 && $widgetViews[0] === dragTarget)
        ) {
          return { $container };
        }
        //循环判断鼠标是否在widgetViews的某一个元素里面
        for (let i = 0; i < $widgetViews.length; i++) {
          let $widgetView = $widgetViews.eq(i);
          //递归
          if (
            $widgetViews[i] !== dragTarget &&
            $widgetView.find(`> .${containerClassName}`).length
          ) {
            //递归只有找到结果才返回
            result = getInsertContainerAndWidgetView({
              $container: $widgetView.find(`> .${containerClassName}`).eq(0),
              pageX,
              pageY
            });

            if (result) return result;
          }
          position = $widgetView.offset();
          //判断鼠标是否在子项里面【不能是自己】
          if (
            $widgetViews[i] !== dragTarget &&
            mouseInDom({ dom: $widgetView, pageX, pageY, position })
          ) {
            //判断鼠标在元素的偏上方还是偏下方
            return {
              $container,
              $widgetView,
              direction:
                pageY < position.top + $widgetView.height() / 2
                  ? "top"
                  : "bottom",
              index: i
            };
          }
          //如果鼠标在【放在这里】上面
          if (
            previewType === previewTypes.widgetPreview &&
            pageY < position.top
          ) {
            return {
              $container,
              $widgetView,
              direction: "top",
              index: i
            };
          }
        }
      }

      if (
        previewType === previewTypes.widgetPreview ||
        previewType === previewTypes.freeVesselPreview
      ) {
        return { $container };
      }
    }
    return null;
  }
  return getInsertContainerAndWidgetView;
};

//【放在这里】
let oInsertTempBlock = null;
export function getInsertTempBlock() {
  if (!oInsertTempBlock) {
    oInsertTempBlock = document.createElement("div");
    //创建放在这里dom元素
    oInsertTempBlock.innerHTML = "放在这里";
    oInsertTempBlock.style = `height:54px;line-height:54px;border:1px solid #F56C6C;background:#FEF0F0;font-size:16px;color:#F56C6C;text-align:center;z-index:999;position:relative;`;
  }
  return oInsertTempBlock;
}

export function setPosition({
  insertInfo,
  endX,
  endY,
  component,
  setComponentProperty
}) {
  let { $container } = insertInfo,
    { left: containerLeft, top: containerTop } = $container.offset(),
    value = {
      left: endX - containerLeft,
      top: endY - containerTop,
      position: "absolue"
    };
  //如果嵌套自由面板自动生成 高度和宽度值
  if (
    component.__type__ === "fz-free-vessel" &&
    $container[0].__vue__.data.__type__ === "fz-free-vessel"
  ) {
    value.width = $container.width() - 15;
    value.height = $container.height() - 15;
  }

  setComponentProperty({
    component,
    key: "_styles",
    value
  });
}
