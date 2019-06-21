<template>
  <leftpaneRightnav :data="data">
    <template slot="svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="svg-icon icon icon"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          d="M7 12V4H4.333L3 6H2V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3h-1l-1.333-2H9v8l2 1v1H5v-1l2-1z"
        ></path>
      </svg>
    </template>
    <template slot="name">
      {{ data.__name__ }}
    </template>
  </leftpaneRightnav>
</template>
<script>
import leftpaneRightnav from "../common/leftpaneRightnav.vue";
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    leftpaneRightnav
  }
};
</script>
