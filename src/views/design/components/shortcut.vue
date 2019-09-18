<template>
  <div class="shortcut" @click.stop="_addComponent" @mousedown.stop="mousedown">
    <slot></slot>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import $ from "jquery";
import {
  createGetInsertContainerAndWidgetView,
  getInsertTempBlock,
  setPosition
} from "@design/components/tools/drag";

export default {
  props: ["basicPreviewData"],
  methods: {
    ...mapMutations({
      addComponent: "pageDesign/addComponent",
      setSelectComponent: "pageDesign/setSelectComponent",
      setComponentProperty: "pageDesign/setComponentProperty"
    }),
    //点击添加组件
    _addComponent() {
      this.addComponent({ componentData: this.basicPreviewData.default });
    },
    mousedown({ currentTarget }) {
      let dragTarget = $("<div></div>").append(
          $(currentTarget)
            .find(".icon")
            .clone()
        )[0],
        isMoving = false, //是否移动过
        insertInfo = null,
        insertIndex = null,
        insertList = null,
        insertDirection = null,
        dragTargetWidth = 82,
        dragTargetHeight = 52;
      //获取【放在这里】
      let oInsertTemp = getInsertTempBlock();

      let getInsertContainerAndWidgetView = createGetInsertContainerAndWidgetView(
        { dragTarget, isCreate: true }
      );

      let mousemoveFn = ({ pageX, pageY }) => {
          //第一次移动把clone出来的dragTarget放到body里面
          if (isMoving === false) {
            isMoving = true;
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
          }
          //设置拖拽元素的样式
          $(dragTarget).css({
            left: `${pageX - dragTargetWidth / 2}px`,
            top: `${pageY - dragTargetHeight / 1.5}px`
          });

          insertInfo = getInsertContainerAndWidgetView({ pageX, pageY });

          if (!insertInfo) {
            //移除【放在这里】
            if (oInsertTemp && oInsertTemp.parentNode) {
              oInsertTemp.parentNode.removeChild(oInsertTemp);
            }
            insertList = insertIndex = insertDirection = null;
            return;
          }

          if (!insertInfo.$widgetView) {
            //放在一个空容器里面
            insertInfo.$container.append(oInsertTemp);
            insertList = insertInfo.$container[0].__vue__.childrens;
            insertIndex = insertDirection = null;
          } else {
            insertList = insertInfo.$widgetView[0].__vue__.list;
            insertIndex = insertInfo.$widgetView[0].__vue__.index;
            insertDirection = insertInfo.direction;

            if (insertDirection === "top") {
              insertInfo.$widgetView.before(oInsertTemp);
            } else {
              insertInfo.$widgetView.after(oInsertTemp);
            }
          }
        },
        mouseupFn = ({ clientX: endX, clientY: endY }) => {
          let { basicPreviewData } = this;

          isMoving = false;

          //清空样式
          dragTarget.style = "";

          //移除放在这里
          if (oInsertTemp && oInsertTemp.parentNode) {
            oInsertTemp.parentNode.removeChild(oInsertTemp);
          }
          //移除clone的dragTarget
          if (dragTarget.parentNode) {
            dragTarget.parentNode.removeChild(dragTarget);
          }

          if (insertList) {
            //判断是否放在free-vessel-preview中
            let inFreeVessel = insertInfo.$container.hasClass(
                "free-vessel-preview"
              ),
              component = null;

            //放在一个空容器里面
            if (insertList.length === 0 || !insertDirection) {
              this.addComponent({
                componentData: basicPreviewData.default,
                insertList,
                inFreeVessel
              });
              component = insertList[insertList.length - 1];
            } else {
              if (insertDirection === "top") {
                this.addComponent({
                  componentData: basicPreviewData.default,
                  index: insertIndex,
                  insertList,
                  inFreeVessel
                });
                component = insertList[insertIndex];
              } else {
                this.addComponent({
                  componentData: basicPreviewData.default,
                  index: insertIndex + 1,
                  insertList,
                  inFreeVessel
                });
                component = insertList[insertIndex + 1];
              }
            }

            this.setSelectComponent(component);

            //如果放在自由面板里面要计算位置
            if (inFreeVessel) {
              //计算位置
              let { setComponentProperty } = this;
              setPosition({
                insertInfo,
                endX,
                endY,
                setComponentProperty,
                component
              });
            }
          }

          //移除事件
          $(document).off("mousemove", mousemoveFn);
          $(document).off("mouseup", mouseupFn);
        };

      $(document).on("mousemove", mousemoveFn);
      $(document).on("mouseup", mouseupFn);
    }
  }
};
</script>
<style lang="less" scoped>
.shortcut {
  cursor: pointer;
}
</style>
