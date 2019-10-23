<template>
  <el-collapse :value="['1']">
    <el-collapse-item title="视频地址" name="1">
      <div class="rightpane__content-wrap">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>使用来源</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-input
            resize="none"
            placeholder="请输入视频地址"
            :value="src"
            @input="
              val =>
                setSelectComponentProperty({
                  key: 'src',
                  value: val
                })
            "
          >
          </el-input>
        </el-row>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  inject: ["rightPane"],
  computed: {
    src() {
      return this.rightPane.selectComponent.src;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
