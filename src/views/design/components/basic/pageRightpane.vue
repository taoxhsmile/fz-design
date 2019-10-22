<template>
  <div class="rightPane-item">
    <el-tabs v-model="activeName">
      <el-tab-pane label="页面设置" name="content">
        <el-collapse :value="['1', '2']">
          <el-collapse-item title="页面名称" name="1">
            <div class="rightpane__content-wrap">
              <el-row type="flex" justify="center" align="middle">
                <el-input
                  resize="none"
                  placeholder="请输入按钮内容"
                  :value="selectComponent.__name__"
                  @input="
                    val =>
                      setSelectComponentProperty({
                        key: '__name__',
                        value: val
                      })
                  "
                >
                </el-input>
              </el-row>
            </div>
          </el-collapse-item>
          <el-collapse-item title="背景颜色" name="2">
            <rBackground />
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import rightPaneMixins from "./common/rightPaneMixins";
import rBackground from "./common/rBackground.vue";
export default {
  mixins: [
    rightPaneMixins({
      //背景颜色
      backgroundColor: "rgba(0,0,0,0)"
    })
  ],
  components: {
    rBackground
  },
  data() {
    return {
      activeName: "content"
    };
  },
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
    })
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
