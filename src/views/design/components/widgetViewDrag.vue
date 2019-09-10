<template>
  <div
    class="drag"
    v-show="data === hoverComponent"
    @click.stop
    @mousedown.stop="mousedown"
  ></div>
</template>
<script>
import $ from "jquery";
import { mapMutations, mapGetters } from "vuex";
import {
  createGetInsertContainerAndWidgetView,
  getInsertTempBlock
} from "@design/components/tools/drag";

export default {
  props: ["list", "index", "data"],
  computed: {
    ...mapGetters({
      hoverComponent: "pageDesign/hoverComponent"
    })
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty",
      setSelectComponent: "pageDesign/setSelectComponent",
      setDragComponent: "pageDesign/setDragComponent"
    }),
    // 拖拽preview
    mousedown({ clientX: startX, clientY: startY, currentTarget }) {
      let dragTarget = currentTarget.parentNode,
        isMove = false, //是否移动过
        insertIndex = this.index,
        insertList = this.list,
        insertInsert = "top",
        { left, top } = $(dragTarget).position(), //拖拽物体的初始位置
        { offsetWidth, offsetHeight } = dragTarget; //拖拽物体的初始大小

      //获取【放在这里】
      let oInsertTemp = getInsertTempBlock();

      let getInsertContainerAndWidgetView = createGetInsertContainerAndWidgetView(
        { dragTarget }
      );

      let mousemoveFn = ({ clientX: endX, clientY: endY, pageX, pageY }) => {
          let nLeft = endX - startX + left,
            nTop = endY - startY + top;

          if (isMove === false) {
            isMove = true;
            this.setDragComponent(this.data);
            //刚开始拖动的时候插入[放在这里]
            $(dragTarget)
              .css({
                position: "absolute",
                width: `${offsetWidth}px`,
                height: `${offsetHeight}px`,
                zIndex: 1000
              })
              .before(oInsertTemp);
          }

          //设置样式
          $(dragTarget).css({
            left: `${nLeft}px`,
            top: `${nTop}px`
          });

          let insertInfo = getInsertContainerAndWidgetView({ pageX, pageY });
          //如果insertInfo为null，保持原来的位置
          if (!insertInfo) return;
          //放在一个空容器里面
          if (!insertInfo.widgetView) {
            insertList = insertInfo.container[0].__vue__.list;
            insertInfo.container.append(oInsertTemp);
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
          //重置状态
          isMove = false;
          this.setDragComponent(null);
          //设置选中组件
          this.setSelectComponent(this.data);
          //清空样式
          dragTarget.style = "";

          //移除【放在这里】
          if (oInsertTemp && oInsertTemp.parentNode) {
            oInsertTemp.parentNode.removeChild(oInsertTemp);
          }
          //在原来的容器中 只是改变顺序
          if (this.list === insertList) {
            if (insertInsert === "top") {
              insertList.splice(insertIndex, 0, this.data);
            } else {
              insertList.splice(insertIndex + 1, 0, this.data);
            }
            if (this.index < insertIndex) {
              this.list.splice(this.index, 1);
            } else {
              this.list.splice(this.index + 1, 1);
            }
          } else {
            //移动到新的容器里面
            if (insertList.length === 0) {
              insertList.push(this.data);
            } else {
              if (insertInsert === "top") {
                insertList.splice(insertIndex, 0, this.data);
              } else {
                insertList.splice(insertIndex + 1, 0, this.data);
              }
            }
            this.list.splice(this.index, 1);
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
.drag {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 58px;
  height: 26px;
  background: url(../../../assets/images/widgetView_drag.png) no-repeat center
    center;
  background-size: 100% 100%;
  cursor: move;
}
</style>
