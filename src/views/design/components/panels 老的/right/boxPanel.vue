<template>
  <subPanel title="外观">
    <div class="box-panel">
      <section class="panel-body">
        <div class="line">
          <label class="left-label background-label">填充</label>
          <div class="right-content">
            <div class="side">
              <colorButton
                :color="styles.background.color"
                @update="updateHandler('background.color', $event)"
              ></colorButton>
            </div>
            <div class="side"></div>
            <div class="side"></div>
          </div>
        </div>
        <div class="line">
          <label class="left-label">描边</label>
          <div class="right-content">
            <div class="side">
              <colorButton
                :color="styles.border.color"
                @update="updateHandler('border.color', $event)"
              ></colorButton>
            </div>
            <div class="side">
              <bInput
                type="number"
                :value="styles.border.style"
                @update="updateHandler(`border.style`, $event)"
              />
            </div>
            <div class="side">
              <bInput
                type="number"
                :value="styles.border.width"
                @update="updateHandler(`border.width`, $event)"
              />
            </div>
          </div>
        </div>
        <div class="line">
          <label class="left-label">圆角</label>
          <div class="right-content">
            <div class="side">
              <colorButton
                :color="styles.border.color"
                @update="updateHandler('border.color', $event)"
              ></colorButton>
            </div>
            <div class="side">
              <bInput
                type="number"
                :value="styles.border.style"
                @update="updateHandler(`border.style`, $event)"
              />
            </div>
            <div class="side">
              <bInput
                type="number"
                :value="styles.border.width"
                @update="updateHandler(`border.width`, $event)"
              />
            </div>
            <div class="side">
              <bInput
                type="number"
                :value="styles.border.width"
                @update="updateHandler(`border.width`, $event)"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </subPanel>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import subPanel from "./components/subPanel.vue";
import colorButton from "./components/colorButton.vue";
import bInput from "@design/components/common/input/index.vue";
export default {
  components: {
    subPanel,
    colorButton,
    bInput
  },
  data() {
    return {
      defaultStyle: {
        background: {
          color: "#FFFFFF"
        },
        border: {
          width: 0,
          style: "solid",
          color: "#FFFFFF"
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
.box-panel {
}
</style>
