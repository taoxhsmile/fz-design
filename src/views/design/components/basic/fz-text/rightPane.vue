<template>
  <div class="text-rightPane">
    <el-tabs stretch type="card" v-model="activeName">
      <el-tab-pane label="文本组件" name="content">
        <el-col>
          文本内容
        </el-col>
        <el-col>
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            :value="selectComponent.content"
            @input="
              val =>
                this.setSelectComponentProperty({ key: 'content', value: val })
            "
            maxlength="200"
            show-word-limit
          >
          </el-input>
        </el-col>
        <el-col> 字体样式</el-col>
        <el-col>
          <el-input-number
            :min="10"
            :value="_styles.fontSize"
            @input="
              val =>
                this.setSelectComponentProperty({
                  key: '_styles',
                  value: { fontSize: val }
                })
            "
            @change="
              val =>
                this.setSelectComponentProperty({
                  key: '_styles',
                  value: { fontSize: val }
                })
            "
          ></el-input-number>
          <el-button
            :type="_styles.fontWeight === 'bold' ? 'primary' : ''"
            @click="
              setSelectComponentProperty({
                key: '_styles',
                value: {
                  fontWeight: _styles.fontWeight === 'bold' ? null : 'bold'
                }
              })
            "
          >
            粗体
          </el-button>
          <el-button
            :type="_styles.fontStyle === 'italic' ? 'primary' : ''"
            @click="
              setSelectComponentProperty({
                key: '_styles',
                value: {
                  fontStyle: _styles.fontStyle === 'italic' ? null : 'italic'
                }
              })
            "
          >
            斜体
          </el-button>
          <el-button
            :type="_styles.textDecoration === 'underline' ? 'primary' : ''"
            @click="
              setSelectComponentProperty({
                key: '_styles',
                value: {
                  textDecoration:
                    _styles.textDecoration === 'underline' ? null : 'underline'
                }
              })
            "
          >
            下划线
          </el-button>
          <el-button
            :type="_styles.textDecoration === 'line-through' ? 'primary' : ''"
            @click="
              setSelectComponentProperty({
                key: '_styles',
                value: { textDecoration: 'line-through' }
              })
            "
          >
            删除线
          </el-button>
          <el-color-picker
            :value="_styles.color"
            @input="
              val =>
                setSelectComponentProperty({
                  key: '_styles',
                  value: { color: val }
                })
            "
          ></el-color-picker>
          <el-select
            :value="_styles.textAlign"
            @input="
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
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-tab-pane>

      <el-tab-pane label="组件样式" name="container">
        <el-col>
          组件设置
        </el-col>
        <el-col>
          <el-col>
            宽度
            <el-input-number
              :min="0"
              :value="_styles.width"
              @input="
                val =>
                  this.setSelectComponentProperty({
                    key: '_styles',
                    value: { width: val }
                  })
              "
              @change="
                val =>
                  this.setSelectComponentProperty({
                    key: '_styles',
                    value: { width: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col>
            行高
            <el-input-number
              :min="0"
              :value="_styles.lineHeight"
              @input="
                val =>
                  this.setSelectComponentProperty({
                    key: '_styles',
                    value: { lineHeight: val }
                  })
              "
              @change="
                val =>
                  this.setSelectComponentProperty({
                    key: '_styles',
                    value: { lineHeight: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col>
            左边
            <el-input-number
              :min="0"
              :value="_styles.marginLeft"
              @input="
                val =>
                  this.setSelectComponentProperty({
                    key: '_styles',
                    value: { marginLeft: val }
                  })
              "
              @change="
                val =>
                  this.setSelectComponentProperty({
                    key: '_styles',
                    value: { marginLeft: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col>
            上边
            <el-input-number
              :min="0"
              :value="_styles.marginTop"
              @input="
                val =>
                  this.setSelectComponentProperty({
                    key: '_styles',
                    value: { marginTop: val }
                  })
              "
              @change="
                val =>
                  this.setSelectComponentProperty({
                    key: '_styles',
                    value: { marginTop: val }
                  })
              "
            ></el-input-number>
          </el-col>
        </el-col>
        <el-col>
          <el-button
            :type="_customFeature.align === 'left' ? 'primary' : ''"
            @click="
              () => {
                setSelectComponentProperty({
                  key: '_customFeature',
                  value: { align: 'left' }
                });
                setSelectComponentProperty({
                  key: '_styles',
                  value: { marginLeft: 0, marginRight: 'auto' }
                });
              }
            "
          >
            居左
          </el-button>
          <el-button
            :type="_customFeature.align === 'center' ? 'primary' : ''"
            @click="
              () => {
                setSelectComponentProperty({
                  key: '_customFeature',
                  value: { align: 'center' }
                });
                setSelectComponentProperty({
                  key: '_styles',
                  value: { marginLeft: 'auto', marginRight: 'auto' }
                });
              }
            "
          >
            居中
          </el-button>
          <el-button
            :type="_customFeature.align === 'top' ? 'primary' : ''"
            @click="
              () => {
                setSelectComponentProperty({
                  key: '_customFeature',
                  value: { align: 'top' }
                });
                setSelectComponentProperty({
                  key: '_styles',
                  value: { marginLeft: 'auto', marginRight: 0 }
                });
              }
            "
          >
            居右
          </el-button>
        </el-col>
        <el-col>
          背景<el-color-picker
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
        <el-col>
          边框样式<el-select
            :value="_styles.borderStyle"
            @input="
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
          粗细<el-input-number
            :min="0"
            :value="_styles.borderWidth"
            @input="
              val =>
                this.setSelectComponentProperty({
                  key: '_styles',
                  value: { borderWidth: val }
                })
            "
            @change="
              val =>
                this.setSelectComponentProperty({
                  key: '_styles',
                  value: { borderWidth: val }
                })
            "
          ></el-input-number>
          颜色
          <el-color-picker
            :value="_styles.borderColor"
            @input="
              val =>
                setSelectComponentProperty({
                  key: '_styles',
                  value: { borderColor: val }
                })
            "
            show-alpha
          ></el-color-picker>
        </el-col>
      </el-tab-pane>

      <el-tab-pane label="交互设置" name="behavior">
        <el-col>
          交互设置
        </el-col>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeName: "content",
      defaultStyles: {
        fontSize: 12,
        textAlign: "left",
        lineHeight: 25,
        width: 375,
        backgroundColor: "rgba(0,0,0,0)",
        borderStyle: "none",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 1)"
      },
      textAlignOptions: ["left", "center", "right"],
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
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
    }),
    _styles() {
      return { ...this.defaultStyles, ...this.selectComponent._styles };
    },
    _customFeature() {
      return this.selectComponent._customFeature;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
