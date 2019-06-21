<template>
  <subPanel title="图片">
    <div class="box-panel">
      <section class="panel-body">
        <div class="line">
          <label class="left-label background-label">图片</label>
          <div class="right-content">
            <div class="side">
              <bInput
                type="string"
                :value="props.src"
                @update="updateHandler('src', $event)"
              />
            </div>
            <div class="side"></div>
            <div class="side"></div>
          </div>
        </div>
      </section>
    </div>
  </subPanel>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import subPanel from "./components/subPanel.vue";
import bInput from "@design/components/common/input/index.vue";
export default {
  components: {
    subPanel,
    bInput
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
    }),
    props() {
      let { selectComponent } = this;
      return selectComponent._props;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    }),
    updateHandler(property, value) {
      this.setSelectComponentProperty("_props", {
        [property]: value
      });
    }
  }
};
</script>
<style lang="less" scoped>
.box-panel {
}
</style>
