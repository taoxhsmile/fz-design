<template>
  <div>
    <component
      v-if="hoverComponent"
      :is="hoverComponent.__type__"
      :data="hoverComponent"
    ></component>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import hoverBorder from "./hoverBorder.js";
export default {
  components: {
    ...hoverBorder
  },
  computed: {
    ...mapState({
      pageInfo: "pageDesign"
    }),
    hoverComponent() {
      return this.pageInfo.hoverComponent;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponent: "pageDesign/setSelectComponent"
    }),
    setSelectComponent() {
      this.setSelectComponent(this.hoverComponent);
    }
  }
};
</script>
