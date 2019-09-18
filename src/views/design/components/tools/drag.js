import $ from "jquery";

//容器classname
const containerClassName = "component-container";
//获取Container和WidgetView
export let createGetInsertContainerAndWidgetView = ({
  dragTarget, //拖拽对象
  isCreate = false //是否为新建
}) => {
  function getInsertContainerAndWidgetView({ $container, pageX, pageY }) {
    //初始化根容器
    if ($container == null) {
      $container = $(`.${containerClassName}`).eq(0);
    }

    let isFreeVessel = $container.hasClass("free-vessel-preview"),
      position = $container.offset();

    //判断鼠标是否在该容器内
    if (
      pageX > position.left &&
      pageX < position.left + $container.width() &&
      pageY > position.top &&
      pageY < position.top + $container.height()
    ) {
      //找到容器内部所有的子项
      let $widgetViews = null;

      if (isFreeVessel) {
        $widgetViews = $container.find("> .free-widget-view");
      } else {
        $widgetViews = $container.find("> .widget-view");
      }

      //容器是空的则直接返回当前容器
      if ($widgetViews.length === 0) {
        return { $container };
      }
      //拖拽并且容器只有一个子项并且是当前拖拽的子项直接返回当前容器
      if (
        isCreate === false &&
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
          let result = getInsertContainerAndWidgetView({
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
          pageX > position.left &&
          pageX < position.left + $widgetView.width() &&
          pageY > position.top &&
          pageY < position.top + $widgetView.height()
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
        if (pageY < position.top) {
          return {
            $container,
            $widgetView,
            direction: "top",
            index: i
          };
        }
      }
      return { $container };
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
    oInsertTempBlock.style = `height:54px;line-height:54px;border:1px solid #F56C6C;background:#FEF0F0;font-size:16px;color:#F56C6C;text-align:center;`;
  }
  return oInsertTempBlock;
}
