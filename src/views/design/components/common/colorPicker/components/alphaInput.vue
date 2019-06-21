<template>
  <label class="color-input">
    <input
      class=""
      :value="colour.a"
      @focus="handleFocus"
      @input="handleInput"
      @blur="handleBlur"
      @keyup.enter="handleEnter"
    />
    <span>A</span>
  </label>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import emitterMixin from "@/mixins/emitter.js";
export default {
  mixins: [emitterMixin],
  computed: {
    ...mapState({
      componentInfo: "componentColorPicker"
    }),
    colour() {
      return this.componentInfo.colour;
    }
  },
  methods: {
    ...mapMutations({
      setColour: "componentColorPicker/setColour"
    }),
    handleFocus(e) {
      e.target.select();
    },
    _correctInput(value) {
      value = value.replace(/\D/g, "");
      value = value.replace(/^0*(?=[0-9])/, "");
      if (value.match(/^100/)) {
        value = value.slice(0, 3);
      } else {
        value = value.slice(0, 2);
      }
      return value;
    },
    handleInput(e) {
      //阻止输入非法字符
      e.target.value = this._correctInput(e.target.value);
    },
    handleBlur(e) {
      this._emitChange(e);
    },
    handleEnter(e) {
      this._emitChange(e);
      e.target.select();
    },
    _emitChange(e) {
      this.setColour({ a: e.target.value });
      this.dispatch("color-picker", "parent:updateColor");
    }
  }
};
</script>
