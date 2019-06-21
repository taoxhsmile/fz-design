<template>
  <div class="shadow-panel">
    <section class="panel-body">
      <div class="input-wrap input-color">
        <colorButton
          :color="styles[type].color"
          @update="updateHandler(`${type}.color`, $event)"
        ></colorButton>
        <div class="title">颜色</div>
      </div>
      <div class="input-wrap">
        <bInput
          type="number"
          :value="styles[type].hShadow"
          @update="updateHandler(`${type}.hShadow`, $event)"
        />
        <div class="title">X</div>
      </div>
      <div class="input-wrap">
        <bInput
          type="number"
          :value="styles[type].vShadow"
          @update="updateHandler(`${type}.vShadow`, $event)"
        />
        <div class="title">Y</div>
      </div>
      <div class="input-wrap">
        <bInput
          type="number"
          :value="styles[type].blur"
          @update="updateHandler(`${type}.blur`, $event)"
        />
        <div class="title">模糊</div>
      </div>
      <div class="input-wrap" v-if="type === 'boxShadow'">
        <bInput
          type="number"
          :value="styles[type].spread"
          @update="updateHandler(`${type}.spread`, $event)"
        />
        <div class="title">扩散</div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import bInput from "@design/components/common/input/index.vue";
import colorButton from "./colorButton.vue";
export default {
  components: {
    bInput,
    colorButton
  },
  props: {
    type: {
      type: String,
      validator: value => {
        return ["textShadow", "boxShadow"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    let { type } = this;
    return {
      defaultStyle: {
        [type]: {
          color: "rgba(170, 170, 170, 1)",
          hShadow: 0,
          vShadow: 0,
          blur: 0,
          spread: 0
        }
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
      let {
        selectComponent: { _styles },
        defaultStyle
      } = this;

      property = property.split(".");

      let key = property[0];

      let temp = {};
      if (!(temp = _styles[key])) {
        temp = { ...defaultStyle[key] };
      }

      temp[property[1]] = value;

      this.setSelectComponentProperty("_styles", {
        [key]: temp
      });
    }
  }
};
</script>
<style lang="less" scoped>
.shadow-panel {
  .panel-body {
    & > div {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 6px;
      }
      .title {
        margin-top: 10px;
        color: #8d9ea7;
        font-size: 12px;
        text-align: center;
        line-height: 1;
      }
    }
    .input-wrap {
      width: 34px;
    }
    .input-color {
      width: 30px;
    }
  }
  .panel-body /deep/ input {
    padding-right: 0.5em !important;
  }
}
</style>
