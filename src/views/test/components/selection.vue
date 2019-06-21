<template>
  <div>
    <component
      v-if="selectComponent"
      :is="selectComponent.__type__"
      :data="selectComponent"
    >
    </component>
  </div>
</template>
<script>
import { mapState } from "vuex";
import selection from "./selection.js";
export default {
  components: {
    ...selection
  },
  computed: {
    ...mapState({
      pageInfo: "pageDesign"
    }),
    selectComponent() {
      return this.pageInfo.selectComponent;
    }
  }
};
</script>
