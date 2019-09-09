<template>
  <div class="shortcut-item" @click="handleClick">
    <slot></slot>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "common-shortcut",
  props: {
    //创建组件的默认数据
    previewData: Object
  },
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
    })
  },
  methods: {
    ...mapMutations({
      addComponent: "pageDesign/addComponent"
    }),
    handleClick($event) {
      // 点击快捷方式，将新组件添加到页面中
      this._addComponent();
      this.$emit("click", $event);
    },
    _addComponent() {
      let {
        previewData: { data }
      } = this;

      let _styles = {
        ...data._styles
      };

      this.addComponent({ ...data, _styles });
    }
  }
};
</script>
