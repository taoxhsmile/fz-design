<template>
  <div class="text-editView">
    <el-tabs v-model="activeName">
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
      </el-tab-pane>
      <el-tab-pane label="组件样式" name="container">组件样式</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
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
