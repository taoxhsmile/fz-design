import { mapMutations } from "vuex";

export default {
  inject: ["rightPane"],
  computed: {
    selectComponent() {
      return this.rightPane.selectComponent;
    },
    _styles() {
      return this.rightPane._styles;
    },
    _customFeature() {
      return this.rightPane._customFeature;
    },
    inFreeVessel() {
      return this.selectComponent.inFreeVessel;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
