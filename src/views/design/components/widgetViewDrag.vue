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
  getInsertTempBlock,
  setPosition
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
      setComponentProperty: "pageDesign/setComponentProperty",
      setSelectComponent: "pageDesign/setSelectComponent",
      setDragComponent: "pageDesign/setDragComponent"
    }),
    // 拖拽preview
    mousedown({ clientX: startX, clientY: startY, currentTarget }) {
      let dragTarget = currentTarget.parentNode,
        isMoving = false, //是否移动过
        insertInfo = null,
        insertIndex = this.index,
        insertList = this.list,
        insertDirection = "top",
        { left, top } = $(dragTarget).position(), //拖拽物体的初始位置
        dragTargetWidth = $(dragTarget).width(),
        dragTargetHeight = $(dragTarget).height(); //拖拽物体的初始大小

      //获取【放在这里】
      let oInsertTemp = getInsertTempBlock();

      let getInsertContainerAndWidgetView = createGetInsertContainerAndWidgetView(
        { dragTarget }
      );

      let mousemoveFn = ({ clientX: endX, clientY: endY, pageX, pageY }) => {
          if (isMoving === false) {
            isMoving = true;

            this.setDragComponent(this.data);
            //刚开始拖动的时候插入[放在这里]
            $(dragTarget)
              .css({
                position: "absolute",
                width: `${dragTargetWidth}px`,
                height: `${dragTargetHeight}px`,
                zIndex: 1000
              })
              .before(oInsertTemp);
          }

          //设置样式
          $(dragTarget).css({
            left: `${endX - startX + left}px`,
            top: `${endY - startY + top}px`
          });

          insertInfo = getInsertContainerAndWidgetView({ pageX, pageY });
          //如果insertInfo为null，保持原来的位置
          if (!insertInfo) return;
          if (!insertInfo.$widgetView) {
            //放在一个空容器里面
            insertList = insertInfo.$container[0].__vue__.childrens;
            insertInfo.$container.append(oInsertTemp);
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
        changeData = () => {
          //在原来的容器中 只是改变顺序
          if (this.list === insertList) {
            if (insertDirection === "top") {
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
              if (insertDirection === "top") {
                insertList.splice(insertIndex, 0, this.data);
              } else {
                insertList.splice(insertIndex + 1, 0, this.data);
              }
            }
            this.list.splice(this.index, 1);
          }
        },
        mouseupFn = ({ clientX: endX, clientY: endY }) => {
          //重置状态
          isMoving = false;

          this.setDragComponent(null);
          //设置选中组件
          this.setSelectComponent(this.data);
          //清空样式
          dragTarget.style = "";

          //移除【放在这里】
          if (oInsertTemp && oInsertTemp.parentNode) {
            oInsertTemp.parentNode.removeChild(oInsertTemp);
          }

          //判断是否放在free-vessel-preview中
          let inFreeVessel =
            insertInfo && insertInfo.$container.hasClass("free-vessel-preview");

          //修改数据
          changeData();

          if (inFreeVessel) {
            //设置inFreeVessel为true
            this.setComponentProperty({
              component: this.data,
              key: "inFreeVessel",
              value: true
            });
            //计算位置
            let { setComponentProperty } = this;
            setPosition({
              insertInfo,
              endX,
              endY,
              setComponentProperty,
              component: this.data
            });
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
