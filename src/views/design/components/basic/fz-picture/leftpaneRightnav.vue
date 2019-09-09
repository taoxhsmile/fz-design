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
          d="M13 10.75V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7l2-2 2 1.5L10 7l3 3.75zM3 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm3.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
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
