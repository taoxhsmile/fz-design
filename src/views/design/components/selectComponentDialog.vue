<template>
  <el-dialog
    title="选择组件"
    :modal-append-to-body="false"
    :visible.sync="dialogVisible"
  >
  </el-dialog>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      dialogVisible: "componentSelectComponentDialog"
    })
  }
};
</script>
