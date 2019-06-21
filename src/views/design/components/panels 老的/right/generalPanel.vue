<template>
  <section class="general-panel panel-body">
    <div class="line position-line">
      <div class="side">
        <bInput
          text="X"
          type="number"
          :value="styles.left"
          @update="updateHandler('left', $event)"
        />
      </div>
      <div class="side">
        <bInput
          text="Y"
          type="number"
          :value="styles.top"
          @update="updateHandler('top', $event)"
        />
      </div>
    </div>
    <div class="line position-line">
      <div class="side">
        <bInput
          text="宽"
          type="number"
          :value="styles.width"
          @update="updateHandler('width', $event)"
        />
      </div>
      <div class="side">
        <bInput
          text="高"
          type="number"
          :value="styles.height"
          @update="updateHandler('height', $event)"
        />
      </div>
    </div>
    <div class="line position-line">
      <div class="side">
        <bInput
          text="位"
          type="string"
          :value="styles.position"
          @update="updateHandler('position', $event)"
        />
      </div>
      <div class="side"></div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import bInput from "@design/components/common/input/index.vue";
export default {
  components: {
    bInput
  },
  data() {
    return {
      defaultStyle: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      }
    };
  },
  computed: {
    ...mapGetters({
      selectComponent: "pageDesign/selectComponent"
    }),
    styles() {
      let { defaultStyle, selectComponent } = this;
      return Object.assign({}, defaultStyle, selectComponent._styles);
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    }),
    updateHandler(property, value) {
      this.setSelectComponentProperty("_styles", {
        [property]: value
      });
    }
  }
};
</script>

<style lang="less" scoped>
.general-panel {
  width: 210px;
  color: rgb(91, 107, 115);
  padding: 12px 10px;
  .position-line {
    /deep/ input {
      padding-left: 24px !important;
    }
  }
}
</style>
