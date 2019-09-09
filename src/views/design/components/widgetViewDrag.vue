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
        containerClassName = "component-container",
        isMove = false, //是否移动过
        insertIndex = this.index,
        insertList = this.list,
        insertInsert = "top",
        { left, top } = $(dragTarget).position(),
        { offsetWidth, offsetHeight } = dragTarget;

      let oDiv = document.createElement("div");
      //创建放在这里dom元素
      oDiv.innerHTML = "放在这里";
      oDiv.style = `height:54px;line-height:54px;border:1px solid #F56C6C;background:#FEF0F0;font-size:16px;color:#F56C6C;text-align:center`;

      this.setDragComponent(this.data);

      let mousemoveFn = ({ clientX: endX, clientY: endY, pageX, pageY }) => {
          let nLeft = endX - startX + left,
            nTop = endY - startY + top;

          //获取Container和WidgetView
          let getInsertContainerAndWidgetView = container => {
            if (container == null) {
              container = $(`.${containerClassName}`);
            }
            let position = container.offset();
            //判断鼠标是否在该容器内
            if (
              pageX > position.left &&
              pageX < position.left + container.width() &&
              pageY > position.top &&
              pageY < position.top + container.height()
            ) {
              //找到容器内部所有的子项
              let widgetViews = container.find(".widget-view");
              //如果容器是空的或者容器只有一个元素并且是正在拖动的元素直接返回当前容器
              if (
                widgetViews.length === 0 ||
                (widgetViews.length === 1 && widgetViews[0] !== dragTarget)
              ) {
                return { container };
              }
              //循环判断鼠标是否在widgetViews的某一个元素里面
              for (let i = 0; i < widgetViews.length; i++) {
                let widgetView = widgetViews.eq(i);
                //递归
                if (widgetView.find(`.${containerClassName}`).length) {
                  return getInsertContainerAndWidgetView(
                    widgetView.find(`.${containerClassName}`)
                  );
                }
                position = widgetView.offset();
                //判断鼠标是否在子项里面【不能是自己】
                if (
                  widgetViews[i] !== dragTarget &&
                  pageX > position.left &&
                  pageX < position.left + widgetView.width() &&
                  pageY > position.top &&
                  pageY < position.top + widgetView.height()
                ) {
                  //判断鼠标在元素的偏上方还是偏下方
                  return {
                    container,
                    widgetView,
                    insert:
                      pageY < position.top + widgetView.height() / 2
                        ? "top"
                        : "bottom",
                    index: i
                  };
                }
              }
              //如果鼠标在【放在这里】上面也return null
            }
            return null;
          };
          //设置样式
          $(dragTarget).css({
            left: `${nLeft}px`,
            top: `${nTop}px`,
            position: "absolute",
            width: `${offsetWidth}px`,
            height: `${offsetHeight}px`,
            zIndex: 1000
          });
          //刚开始拖动的时候创建[放在这里]
          if (isMove === false) {
            $(dragTarget).before(oDiv);
            isMove = true;
          } else {
            let insertInfo = getInsertContainerAndWidgetView();
            if (!insertInfo) return;
            //移动到新的容器里面
            if (!insertInfo.widgetView) {
              insertInfo.container.append(oDiv);
            } else {
              insertList = insertInfo.widgetView[0].__vue__.list;
              insertIndex = insertInfo.widgetView[0].__vue__.index;
              insertInsert = insertInfo.insert;

              if (insertInfo.insert === "top") {
                insertInfo.widgetView.before(oDiv);
              } else {
                insertInfo.widgetView.after(oDiv);
              }
            }
          }
        },
        mouseupFn = () => {
          this.setDragComponent(null);
          //设置选中组件
          this.setSelectComponent(this.data);
          //清空样式
          dragTarget.style = "";

          isMove = false;

          //移除放在这里
          if (oDiv && oDiv.parentNode) {
            oDiv.parentNode.removeChild(oDiv);
          }
          //在原来的容器中 只是改变顺序
          if (this.list === insertList) {
            if (insertInsert === "top") {
              if (this.index < insertIndex) {
                insertList.splice(insertIndex, 0, this.data);
                this.list.splice(this.index, 1);
              } else {
                insertList.splice(insertIndex, 0, this.data);
                this.list.splice(this.index + 1, 1);
              }
            } else {
              if (this.index < insertIndex) {
                insertList.splice(insertIndex + 1, 0, this.data);
                this.list.splice(this.index, 1);
              } else {
                insertList.splice(insertIndex + 1, 0, this.data);
                this.list.splice(this.index + 1, 1);
              }
            }
          } else {
            //移动到新的容器里面
            if (insertInsert === "top") {
              insertList.splice(insertIndex, 0, this.data);
            } else {
              insertList.splice(insertIndex + 1, 0, this.data);
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
