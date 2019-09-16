<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="组件设置" name="1">
      <div class="rightpane__content-wrap border">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>大小</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">宽度</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_styles.width"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { width: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="3">高度</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_styles.height"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { height: val }
                  })
              "
            ></el-input-number>
          </el-col>
        </el-row>
      </div>

      <div class="rightpane__content-wrap border">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>位置</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">左边</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_styles.marginLeft"
              :disabled="_customFeature.align !== 'left'"
              @change="setMarginLeft"
            ></el-input-number>
          </el-col>
          <el-col :span="3">上边</el-col>
          <el-col :span="9">
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
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col class="align-btns">
            <el-button
              :type="_customFeature.align === 'left' ? 'primary' : ''"
              @click="setStylesAlign('left')"
            >
              置左
            </el-button>
            <el-button
              :type="_customFeature.align === 'center' ? 'primary' : ''"
              @click="setStylesAlign('center')"
            >
              居中
            </el-button>
            <el-button
              :type="_customFeature.align === 'right' ? 'primary' : ''"
              @click="setStylesAlign('right')"
            >
              置右
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="边框设置" name="2">
      <!-- <div class="rightpane__content-wrap border">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>样式</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">圆角</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_customFeature.borderRadius"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_customFeature',
                    value: { borderRadius: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12">
            <el-button type="text">圆形</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle"> </el-row>
      </div> -->
      <div class="rightpane__content-wrap border">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>边框</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">样式</el-col>
          <el-col :span="9">
            <el-select
              style="width:88px;"
              :value="_styles.borderStyle"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { borderStyle: val }
                  })
              "
              placeholder="请选择"
            >
              <el-option
                v-for="item in borderStyleOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">粗细</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_styles.borderWidth"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { borderWidth: val }
                  })
              "
            ></el-input-number>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">颜色</el-col>
          <el-col :span="9">
            <el-color-picker
              :value="_styles.borderColor"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { borderColor: val }
                  })
              "
              show-alpha
            ></el-color-picker>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>
      <boxShadow :_customFeature="_customFeature"></boxShadow>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import boxShadow from "../common/boxShadow";
export default {
  props: ["selectComponent", "_styles", "_customFeature"],
  components: {
    boxShadow
  },
  data() {
    return {
      borderStyleOptions: [
        {
          label: "无",
          value: "none"
        },
        {
          label: "实线",
          value: "solid"
        },
        {
          label: "点线",
          value: "dotted"
        },
        {
          label: "虚线",
          value: "dashed"
        }
      ]
    };
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    }),
    setStylesAlign(val) {
      this.setSelectComponentProperty({
        key: "_customFeature",
        value: { align: val }
      });
      this.setSelectComponentProperty({
        key: "_styles",
        value: {
          marginLeft: val === "left" ? 0 : "auto",
          marginRight: val === "right" ? 0 : "auto"
        }
      });
    },
    setMarginLeft(val) {
      this.setSelectComponentProperty({
        key: "_styles",
        value: { marginLeft: val }
      });
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
