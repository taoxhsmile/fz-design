<template>
  <div>
    <bindDataSourceDialog v-if="bindDataSourceDialogVisible" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import bindDataSourceDialog from "./bindDataSourceDialog.vue";
export default {
  components: {
    bindDataSourceDialog
  },
  computed: {
    ...mapGetters({
      bindDataSourceDialogVisible: "componentBindDataSourceDialog/dialogVisible"
    })
  }
};
</script>
