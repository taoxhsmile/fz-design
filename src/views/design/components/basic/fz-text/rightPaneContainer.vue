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
              @input="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { width: val }
                  })
              "
              placeholder="宽度"
            ></el-input-number>
          </el-col>
          <el-col :span="3">行高</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_styles.lineHeight"
              @input="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { lineHeight: val }
                  })
              "
              placeholder="行高"
            ></el-input-number>
          </el-col>
        </el-row>
      </div>

      <div class="rightpane__content-wrap border">
        <el-row type="flex" justify="center" align="middle">
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
              @input="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { marginLeft: val }
                  })
              "
              placeholder="左边"
            ></el-input-number>
          </el-col>
          <el-col :span="3">上边</el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :value="_styles.marginTop"
              @input="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { marginTop: val }
                  })
              "
              placeholder="上边"
            ></el-input-number>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col class="align-btns">
            <el-button
              :type="_customFeature.align === 'left' ? 'primary' : ''"
              @click="setAlign('left')"
            >
              置左
            </el-button>
            <el-button
              :type="_customFeature.align === 'center' ? 'primary' : ''"
              @click="setAlign('center')"
            >
              居中
            </el-button>
            <el-button
              :type="_customFeature.align === 'top' ? 'primary' : ''"
              @click="setAlign('right')"
            >
              置右
            </el-button>
          </el-col>
        </el-row>
      </div>

      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col>颜色</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">背景</el-col>
          <el-col :span="9">
            <el-color-picker
              :value="_styles.backgroundColor"
              @input="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { backgroundColor: val }
                  })
              "
              show-alpha
            ></el-color-picker>
          </el-col>
          <el-col :span="12">
            <el-button type="text">设置背景图</el-button>
          </el-col>
        </el-row>
      </div>

      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col>效果</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="12">
            <el-radio v-model="radio" label="1">备选项</el-radio>
          </el-col>
          <el-col :span="12">
            <el-radio v-model="radio" label="2">备选项</el-radio>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center" align="middle">
          <el-col :span="6">模糊半径</el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6">阴影颜色</el-col>
          <el-col :span="6"></el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="6">X轴偏移</el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6">Y轴偏移</el-col>
          <el-col :span="6"></el-col>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="边框设置" name="2">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col>边框</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">样式</el-col>
          <el-col :span="9"></el-col>
          <el-col :span="3">粗细</el-col>
          <el-col :span="9"></el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">颜色</el-col>
          <el-col :span="9"></el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>

      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col>边框效果</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="12">
            <el-radio v-model="radio" label="1">备选项</el-radio>
          </el-col>
          <el-col :span="12">
            <el-radio v-model="radio" label="2">备选项</el-radio>
          </el-col>
        </el-row>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["selectComponent", "_styles", "_customFeature"],
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
    setAlign(val) {
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
