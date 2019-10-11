<template>
  <div class="rightpane__content-wrap border">
    <el-row
      class="rightpane__title"
      type="flex"
      justify="center"
      align="middle"
    >
      <el-col>位置</el-col>
    </el-row>

    <template v-if="type !== 5">
      <el-row type="flex" justify="center" align="middle">
        <template v-if="showMarginLeft">
          <el-col :span="3">左边</el-col>
          <el-col :span="9">
            <template v-if="inFreeVessel">
              <el-input-number
                style="width:88px;"
                controls-position="right"
                :min="0"
                :value="_styles.left"
                @change="
                  val =>
                    setSelectComponentProperty({
                      key: '_styles',
                      value: { left: val }
                    })
                "
              />
            </template>
            <template v-else>
              <el-input-number
                style="width:88px;"
                controls-position="right"
                :min="0"
                :value="_styles.marginLeft"
                :disabled="customFeature.align !== 'left'"
                @change="
                  val =>
                    setSelectComponentProperty({
                      key: '_styles',
                      value: { marginLeft: val }
                    })
                "
              />
            </template>
          </el-col>
        </template>

        <template v-if="showMarginTop">
          <el-col :span="3">上边</el-col>
          <el-col :span="9">
            <template v-if="inFreeVessel">
              <el-input-number
                style="width:88px;"
                controls-position="right"
                :min="0"
                :value="_styles.top"
                @change="
                  val =>
                    setSelectComponentProperty({
                      key: '_styles',
                      value: { top: val }
                    })
                "
              />
            </template>
            <template v-else>
              <el-input-number
                style="width:88px;"
                controls-position="right"
                :min="0"
                :value="_styles.marginTop"
                @change="
                  val =>
                    setSelectComponentProperty({
                      key: '_styles',
                      value: { marginTop: val }
                    })
                "
              ></el-input-number>
            </template>
          </el-col>
        </template>

        <template v-if="type !== 0">
          <el-col :span="12"></el-col>
        </template>
      </el-row>
    </template>
    <!-- 1和2的时候不显示 -->
    <template v-if="type !== 1 && type !== 2">
      <!-- 3个按钮 -->
      <el-row type="flex" justify="center" align="middle">
        <el-col class="align-btns">
          <el-button
            :type="customFeature.align === 'left' ? 'primary' : ''"
            @click="setStylesAlign('left')"
          >
            置左
          </el-button>
          <el-button
            :type="customFeature.align === 'center' ? 'primary' : ''"
            @click="setStylesAlign('center')"
          >
            居中
          </el-button>
          <el-button
            :type="customFeature.align === 'right' ? 'primary' : ''"
            @click="setStylesAlign('right')"
          >
            置右
          </el-button>
        </el-col>
      </el-row>
    </template>
  </div>
</template>
<script>
import rMixins from "./rMixins";
import $ from "jquery";
export default {
  mixins: [rMixins],
  props: {
    type: {
      //1、只要marginLeft
      //2、只要marginTop
      //3、要marginLeft + 3个按钮
      //4、要marginTop + 3个按钮
      //5、只要3个按钮
      type: Number,
      default: 0
    }
  },
  computed: {
    showMarginLeft() {
      let { type } = this;
      return type === 1 || type === 3 || type === 0;
    },
    showMarginTop() {
      let { type } = this;
      return type === 2 || type === 4 || type === 0;
    }
  },
  methods: {
    setStylesAlign(val) {
      this.setSelectComponentProperty({
        key: "customFeature",
        value: { align: val }
      });

      if (this.inFreeVessel) {
        let left = null,
          $preview = $(`[data-cid='${this.selectComponent.__id__}']`),
          $previewWidth = $preview.width(),
          $freeVesselPreview = $preview.parents(".free-vessel-preview").eq(0),
          $freeVesselPreviewWidth = $freeVesselPreview.width();

        if (val === "left") {
          left = 0;
        } else if (val === "center") {
          left = ($freeVesselPreviewWidth - $previewWidth) / 2;
        } else if (val === "right") {
          left = $freeVesselPreviewWidth - $previewWidth;
        }
        this.setSelectComponentProperty({
          key: "_styles",
          value: {
            left
          }
        });
      } else {
        this.setSelectComponentProperty({
          key: "_styles",
          value: {
            marginLeft: val === "left" ? 0 : "auto",
            marginRight: val === "right" ? 0 : "auto"
          }
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.align-btns {
  & /deep/ .el-button {
    width: 84px;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
