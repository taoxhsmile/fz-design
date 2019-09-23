import { mapGetters } from "vuex";
export default function(defaultStyles) {
  return {
    computed: {
      ...mapGetters({
        selectComponent: "pageDesign/selectComponent"
      }),
      _styles() {
        return { ...defaultStyles, ...this.selectComponent._styles };
      },
      customFeature() {
        return this.selectComponent.customFeature;
      }
    },
    provide() {
      return {
        rightPane: this
      };
    }
  };
}
