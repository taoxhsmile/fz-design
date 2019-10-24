import $ from "jquery";
import { Enum } from "@design/components/tools/util";

//容器classname
const containerClassName = "component-container";
//容器的类型枚举
const previewTypes = Enum([
  "widgetPreview",
  "freeVesselPreview",
  "layoutVesselPreview",
  "staticVesselPreview",
  "popupWindowPreview"
]);

function getPreviewType({ $container }) {
  let previewType = null;
  if ($container.hasClass("fz-widget-preview")) {
    previewType = previewTypes.widgetPreview;
  } else if ($container.hasClass("fz-free-vessel-preview")) {
    previewType = previewTypes.freeVesselPreview;
  } else if ($container.hasClass("fz-layout-vessel-preview")) {
    previewType = previewTypes.layoutVesselPreview;
  } else if ($container.hasClass("fz-static-vessel-preview")) {
    previewType = previewTypes.staticVesselPreview;
  } else if ($container.hasClass("fz-popup-window-preview")) {
    previewType = previewTypes.popupWindowPreview;
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
export let generateGetInsertContainerAndWidgetViewFn = ({
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

      if (previewType === previewTypes.layoutVesselPreview) {
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
      } else if (previewType === previewTypes.staticVesselPreview) {
        //面板
        let $containers = $container.find(`.${containerClassName}`);
        for (let i = 0; i < $containers.length; i++) {
          result = getInsertContainerAndWidgetView({
            $container: $containers.eq(i),
            pageX,
            pageY
          });
          if (result) return result;
        }
      } else if (previewType === previewTypes.widgetPreview) {
        //面板+root
        $widgetViews = $container.find("> .widget-view");
      } else if (previewType === previewTypes.freeVesselPreview) {
        //自由面板
        $widgetViews = $container.find("> .free-widget-view");
      } else if (previewType === previewTypes.popupWindowPreview) {
        //自由面板
        $widgetViews = $container.find("> .widget-view");
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
    oInsertTempBlock.style = `height:54px;line-height:54px;border:1px solid #F56C6C;background:#FEF0F0;font-size:16px;color:#F56C6C;text-align:center;position:relative;`;
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

//拖拽
export function drag({
  dragTarget,
  pageX,
  pageY,
  insertIndex,
  insertList,
  insertDirection,
  basicPreviewData, // 需要创建的组件数据
  dragTargetWidth,
  dragTargetHeight, //拖拽物体的初始大小
  componentList,
  componentIndex,
  componentData,
  isCreate = false //是否创建一个组件
}) {
  let isMoving = false, //是否移动过
    insertInfo = null,
    oldLeft,
    oldTop, //拖拽物体的初始位置
    zoomAreaLeft,
    zoomAreaTop, //获取transform元素的left、top计算position:fixed 的left、top
    layerX,
    layerY; //鼠标距离拖拽物体左上角的位置

  //初始化拖拽参数
  if (!isCreate) {
    let dragTargetOffset = $(dragTarget).offset(),
      zoomAreaOffset = $(".zoom-area").offset();

    oldLeft = dragTargetOffset.left;
    oldTop = dragTargetOffset.top;

    zoomAreaLeft = zoomAreaOffset.left;
    zoomAreaTop = zoomAreaOffset.top;

    dragTargetWidth = $(dragTarget).width();
    dragTargetHeight = $(dragTarget).height();

    layerX = pageX - oldLeft;
    layerY = pageY - oldTop;
  }

  //获取【放在这里】
  let oInsertTemp = getInsertTempBlock();
  //获取getInsertContainerAndWidgetView函数
  let getInsertContainerAndWidgetView = generateGetInsertContainerAndWidgetViewFn(
    { dragTarget, isCreate }
  );

  let mousemoveFn = ({ pageX, pageY }) => {
      if (isMoving === false) {
        isMoving = true;

        if (isCreate) {
          //插入拖拽元素
          $(dragTarget)
            .css({
              position: "absolute",
              width: `${dragTargetWidth}px`,
              height: `${dragTargetHeight}px`,
              lineHeight: `${dragTargetHeight}px`,
              zIndex: 1000,
              background: "white",
              borderRadius: "5px",
              border: "1px solid #F2F3F7",
              textAlign: "center",
              color: "##696A6F"
            })
            .appendTo(document.body);
        } else {
          this.setDragComponent(componentData);
          //刚开始拖动的时候插入[放在这里]
          $(dragTarget)
            .css({
              position: "fixed",
              width: `${dragTargetWidth}px`,
              height: `${dragTargetHeight}px`,
              zIndex: 1000
            })
            .before(oInsertTemp);
        }
      }

      let nLeft, nTop;

      if (isCreate) {
        nLeft = pageX - dragTargetWidth / 2;
        nTop = pageY - dragTargetHeight / 1.5;
      } else {
        nLeft = pageX - zoomAreaLeft - layerX;
        nTop = pageY - zoomAreaTop - layerY;
      }

      //设置拖拽物体的位置
      $(dragTarget).css({
        left: `${nLeft}px`,
        top: `${nTop}px`
      });

      //获取插入信息
      insertInfo = getInsertContainerAndWidgetView({ pageX, pageY });
      //如果不存在插入信息
      if (!insertInfo) {
        if (isCreate) {
          //移除【放在这里】
          if (oInsertTemp && oInsertTemp.parentNode) {
            oInsertTemp.parentNode.removeChild(oInsertTemp);
          }
          //清除数据
          insertList = insertIndex = insertDirection = null;
        }
        return;
      }

      if (!insertInfo.$widgetView) {
        //放在一个空容器里面 || 容器的末尾
        insertList = insertInfo.$container[0].__vue__.childrens;
        insertIndex = insertDirection = null;
        insertInfo.$container.append(oInsertTemp);
      } else {
        insertList = insertInfo.$widgetView[0].__vue__.list;
        insertIndex = insertInfo.$widgetView[0].__vue__.index;
        insertDirection = insertInfo.direction;
        if (insertDirection === "top") {
          insertInfo.$widgetView.before(oInsertTemp);
        } else if (insertDirection === "bottom") {
          insertInfo.$widgetView.after(oInsertTemp);
        } else {
          //暂时没有这种情况
        }
      }
    },
    changeDataAndReturnComponent = ({ inFreeVessel }) => {
      let component;
      if (isCreate) {
        if (insertList) {
          //存在insertList的时候才添加新的组件
          this.addComponent({
            componentData: basicPreviewData.default,
            index:
              insertDirection === "top"
                ? insertIndex
                : insertDirection === "bottom"
                ? insertIndex + 1
                : null,
            insertList,
            inFreeVessel,
            cb: ({ componentData }) => {
              component = componentData;
            }
          });
        }
      } else {
        component = componentData;
        //在原来的容器中 只是改变顺序
        if (componentList === insertList) {
          if (insertDirection === "top") {
            insertList.splice(insertIndex, 0, component);
          } else if (insertDirection === "bottom") {
            insertList.splice(insertIndex + 1, 0, component);
          } else {
            //拖动到容器末尾
            insertList.push(component);
          }
          if (componentIndex < insertIndex || insertIndex == null) {
            //元素从上面拖到下面
            componentList.splice(componentIndex, 1);
          } else {
            componentList.splice(componentIndex + 1, 1);
          }
        } else {
          //移动到新的容器里面
          if (insertList.length === 0 || insertIndex == null) {
            insertList.push(component);
          } else {
            if (insertDirection === "top") {
              insertList.splice(insertIndex, 0, component);
            } else if (insertDirection === "bottom") {
              insertList.splice(insertIndex + 1, 0, component);
            }
          }
          //在原来的数组里面移除 该组件
          componentList.splice(componentIndex, 1);
        }
      }
      return component;
    },
    mouseupFn = ({ clientX: endX, clientY: endY }) => {
      //判断是否放在free-vessel-preview中
      let inFreeVessel =
          insertInfo &&
          insertInfo.$container.hasClass("fz-free-vessel-preview"),
        component = null;

      //重置状态
      isMoving = false;

      //移除【放在这里】
      if (oInsertTemp && oInsertTemp.parentNode) {
        oInsertTemp.parentNode.removeChild(oInsertTemp);
      }

      if (isCreate) {
        //移除clone的dragTarget
        if (dragTarget && dragTarget.parentNode) {
          dragTarget.parentNode.removeChild(dragTarget);
        }
      }

      //修改数据
      component = changeDataAndReturnComponent({ inFreeVessel });

      //设置选中组件
      this.setSelectComponent(component);

      if (!isCreate) {
        this.setDragComponent(null);
        //清空样式
        dragTarget.style = "";
      }

      if (inFreeVessel) {
        if (!isCreate) {
          //设置组件的inFreeVessel属性为true
          this.setComponentProperty({
            component,
            key: "inFreeVessel",
            value: true
          });
        }
        //计算元素拖拽到自由面板放置的位置
        setPosition({
          insertInfo,
          endX,
          endY,
          setComponentProperty: this.setComponentProperty,
          component
        });
      }
      //移除事件
      $(document).off("mousemove", mousemoveFn);
      $(document).off("mouseup", mouseupFn);
    };

  $(document).on("mousemove", mousemoveFn);
  $(document).on("mouseup", mouseupFn);
}
