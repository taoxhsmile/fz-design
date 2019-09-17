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
  getInsertTempBlock
} from "@design/components/tools/drag";

export default {
  props: ["basicPreviewData"],
  methods: {
    ...mapMutations({
      addComponent: "pageDesign/addComponent",
      setSelectComponent: "pageDesign/setSelectComponent",
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
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
          if (!dragTarget.parentNode) {
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
                textAlign: "center"
              })
              .appendTo(document.body);
          }
          //设置样式
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
              selectComponent = null;

            //放在一个空容器里面
            if (insertList.length === 0 || !insertDirection) {
              this.addComponent({
                componentData: basicPreviewData.default,
                insertList,
                inFreeVessel
              });
              selectComponent = insertList[insertList.length - 1];
            } else {
              if (insertDirection === "top") {
                this.addComponent({
                  componentData: basicPreviewData.default,
                  index: insertIndex,
                  insertList,
                  inFreeVessel
                });
                selectComponent = insertList[insertIndex];
              } else {
                this.addComponent({
                  componentData: basicPreviewData.default,
                  index: insertIndex + 1,
                  insertList,
                  inFreeVessel
                });
                selectComponent = insertList[insertIndex + 1];
              }
            }

            this.setSelectComponent(selectComponent);

            //计算位置
            if (inFreeVessel) {
              let {
                left: containerLeft,
                top: containerTop
              } = insertInfo.$container.offset();

              console.log("selectComponent=", selectComponent);

              this.setSelectComponentProperty({
                key: "_styles",
                value: {
                  left: endX - containerLeft,
                  top: endY - containerTop,
                  position: "absolue"
                }
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
