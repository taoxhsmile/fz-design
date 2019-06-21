<template>
  <subPanel title="文本">
    <div class="font-panel">
      <section class="panel-body">
        <div class="line">
          <label class="left-label background-label">颜色</label>
          <div class="right-content">
            <div class="side">
              <colorButton
                :color="styles.color"
                @update="updateHandler('color', $event)"
              ></colorButton>
            </div>
            <div class="side">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
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
import colorButton from "./components/colorButton.vue";
export default {
  components: {
    subPanel,
    colorButton
  },
  data() {
    return {
      defaultStyle: {},
      value: "",
      options: [
        {
          label: "粗体"
        }
      ]
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
