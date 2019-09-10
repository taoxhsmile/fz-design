<template>
  <div class="shortcut" @click.stop="_addComponent" @mousedown="mousedown">
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
      setSelectComponent: "pageDesign/setSelectComponent"
    }),
    _addComponent() {
      let {
        basicPreviewData: { data }
      } = this;
      this.addComponent({ componentData: data });
    },
    mousedown({ currentTarget }) {
      let dragTarget = $(currentTarget).clone()[0],
        insertIndex = null,
        insertList = null,
        insertInsert = null,
        { offsetWidth, offsetHeight } = currentTarget;

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
                width: `${offsetWidth}px`,
                height: `${offsetHeight}px`,
                zIndex: 1000,
                background: "white",
                borderRadius: "10px",
                border: "1px solid #ccc",
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
              })
              .appendTo(document.body);
          }
          //设置样式
          $(dragTarget).css({
            left: `${pageX - offsetWidth / 2}px`,
            top: `${pageY - offsetHeight / 2}px`
          });

          let insertInfo = getInsertContainerAndWidgetView({ pageX, pageY });

          if (!insertInfo) {
            //移除【放在这里】
            if (oInsertTemp && oInsertTemp.parentNode) {
              oInsertTemp.parentNode.removeChild(oInsertTemp);
            }
            insertList = insertIndex = insertInsert = null;
            return;
          }
          //放在一个空容器里面
          if (!insertInfo.widgetView) {
            insertInfo.container.append(oInsertTemp);
            insertList = insertInfo.container[0].__vue__.list;
          } else {
            insertList = insertInfo.widgetView[0].__vue__.list;
            insertIndex = insertInfo.widgetView[0].__vue__.index;
            insertInsert = insertInfo.insert;

            if (insertInfo.insert === "top") {
              insertInfo.widgetView.before(oInsertTemp);
            } else {
              insertInfo.widgetView.after(oInsertTemp);
            }
          }
        },
        mouseupFn = () => {
          let {
            basicPreviewData: { data }
          } = this;

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
            //放在一个空容器里面
            if (insertList.length === 0) {
              this.addComponent({ componentData: data });
              this.setSelectComponent(insertList[0]);
            } else {
              if (insertInsert === "top") {
                this.addComponent({ componentData: data, index: insertIndex });
                this.setSelectComponent(insertList[insertIndex]);
              } else {
                this.addComponent({
                  componentData: data,
                  index: insertIndex + 1
                });
                this.setSelectComponent(insertList[insertIndex + 1]);
              }
            }
          }

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
