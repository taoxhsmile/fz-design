<template>
  <div class="del" v-show="data === hoverComponent" @click.stop="handleClick">
    <fz-icon name="iconshanchu-lan"></fz-icon>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  props: ["list", "index", "data"],
  computed: {
    ...mapGetters({
      hoverComponent: "pageDesign/hoverComponent"
    })
  },
  methods: {
    ...mapMutations({
      delComponent: "pageDesign/delComponent"
    }),
    handleClick() {
      let { list, index } = this;
      this.delComponent({ list, index });
    }
  }
};
</script>
<style lang="less" scoped>
.del {
  position: absolute;
  top: 0;
  right: 0;
  i {
    color: #f56c6c;
    font-size: 14px;
  }
}
</style>
