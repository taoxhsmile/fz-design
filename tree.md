design/index
  -contain(工具栏、主内容)
    -toolbar
    -mainContent
      -screens
        -screenViewport
          -noZoomAreaB
          -zoomArea(transform: scale(1);)
            -canvasArea(存放组件列表previews)
              -[previews]
          -noZoomAreaF
            -selectionHandler(hover、select矩形)
              -hoverBorder
                -[hoverBorders]
              -selectBorder
                -[selectBorders]
            -selectionPoints(选中操作点)
              -[selectionPoints]
      -leftpane
        -leftpaneBasicWidgets
      -viewport
      -rightpane
        -rightpaneSideBar
        -rightpaneContent
    -fixedArea


预览（preview）
basic/text/preview(data传给common/preview)
  -basic/common/preview(统一处理拖拽、select、hover)

快捷方式（shortcut）
basic/text/leftpane(负责展示样式)
  -basic/text/shortcut(存放所有text组件的快捷方式的数据例如名称之类的数据，将textPreview的默认数据告知common/shortcut)
  -basic/common/shortcut(统一处理添加新preview功能)