<template>
  <el-collapse :value="['1', '2']">
    <el-collapse-item title="按钮内容" name="1">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-input
            resize="none"
            placeholder="请输入按钮内容"
            :value="selectComponent.content"
            @input="
              val =>
                setSelectComponentProperty({
                  key: 'content',
                  value: val
                })
            "
          >
          </el-input>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="字体设置" name="2">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">颜色</el-col>
          <el-col :span="9">
            <el-color-picker
              :value="_styles.color"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { color: val }
                  })
              "
            ></el-color-picker>
          </el-col>
          <el-col :span="3">字号</el-col>
          <el-col :span="8">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="10"
              :value="_styles.fontSize"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { fontSize: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="1">px</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="12">
            <ul class="font-style">
              <li
                :class="{ active: _styles.fontWeight === 'bold' }"
                @click="
                  setSelectComponentProperty({
                    key: '_styles',
                    value: {
                      fontWeight: _styles.fontWeight === 'bold' ? null : 'bold'
                    }
                  })
                "
              >
                <fz-icon name="iconjiacu"></fz-icon>
              </li>
              <li
                :class="{ active: _styles.fontStyle === 'italic' }"
                @click="
                  setSelectComponentProperty({
                    key: '_styles',
                    value: {
                      fontStyle:
                        _styles.fontStyle === 'italic' ? null : 'italic'
                    }
                  })
                "
              >
                <fz-icon name="iconqingxie"></fz-icon>
              </li>
              <li
                :class="{
                  active: _styles.textDecoration.indexOf('underline') > -1
                }"
                @click="setMultipleValue('textDecoration', 'underline')"
              >
                <fz-icon name="iconxiahuaxian"></fz-icon>
              </li>
              <li
                :class="{
                  active: _styles.textDecoration.indexOf('line-through') > -1
                }"
                @click="setMultipleValue('textDecoration', 'line-through')"
              >
                <fz-icon name="iconshanchuxian"></fz-icon>
              </li>
            </ul>
          </el-col>
          <el-col :span="12">
            对齐方式
            <el-select
              style="width:88px;"
              :value="_styles.textAlign"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: '_styles',
                    value: { textAlign: val }
                  })
              "
              placeholder="请选择"
            >
              <el-option
                v-for="item in textAlignOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  inject: ["rightPane"],
  data() {
    return {
      textAlignOptions: [
        {
          label: "居左",
          value: "left"
        },
        {
          label: "居中",
          value: "center"
        },
        {
          label: "居右",
          value: "right"
        }
      ]
    };
  },
  computed: {
    _styles() {
      return this.rightPane._styles;
    },
    selectComponent() {
      return this.rightPane.selectComponent;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    }),
    setMultipleValue(key, val) {
      let oldVal = this._styles[key];
      if (oldVal.indexOf(val) > -1) {
        val = oldVal.replace(val, "");
      } else {
        val = `${oldVal} ${val}`;
      }
      val = val.trim().replace(/\s*/, " ");
      this.setSelectComponentProperty({
        key: "_styles",
        value: {
          [key]: val || null
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
ul.font-style {
  display: flex;
  padding: 0px 5px;
  border-radius: 4px;
  border: 1px solid rgba(216, 220, 230, 1);
  width: 118px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 32px;
  li {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    border-radius: 4px;
    color: #909399;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active {
      background: #409eff;
      color: white;
    }
  }
}
</style>
