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
      <!-- 字体 -->
      <rFont />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import rFont from "../common/rFont.vue";
import { mapMutations } from "vuex";

export default {
  inject: ["rightPane"],
  components: {
    rFont
  },
  computed: {
    selectComponent() {
      return this.rightPane.selectComponent;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
