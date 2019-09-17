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
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
