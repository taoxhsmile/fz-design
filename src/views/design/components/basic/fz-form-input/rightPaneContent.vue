<template>
  <el-collapse :value="['1']">
    <el-collapse-item title="按钮内容" name="1">
      <div class="rightpane__content-wrap">
        <el-row type="flex" justify="center" align="middle">
          <el-input
            resize="none"
            placeholder="请输入提示文本"
            :value="selectComponent.customFeature.placeholder"
            @input="
              val =>
                setSelectComponentProperty({
                  key: 'customFeature',
                  value: { placeholder: val }
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
