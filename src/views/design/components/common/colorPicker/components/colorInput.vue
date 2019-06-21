<template>
  <label class="color-input">
    <input
      class=""
      :value="colour[text]"
      @focus="handleFocus"
      @input="handleInput"
      @keyup.enter="handleEnter"
      @blur="handleBlur"
    />
    <span>{{ text.toUpperCase() }}</span>
  </label>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import emitterMixin from "@/mixins/emitter.js";
export default {
  mixins: [emitterMixin],
  props: {
    text: {
      type: String,
      default: ""
    }
  },
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
      return value.replace(/\D/g, "").slice(0, 3);
    },
    validate(face, value) {
      if (value === "" || Number(value) > 255) {
        this._invalidFace = face;
        return false;
      } else {
        this._invalidFace = "";
        return true;
      }
    },
    handleInput(e) {
      const value = this._correctInput(e.target.value);

      e.target.value = value;

      if (value === "" || Number(value) > 255) {
        this._invalid = true;
      } else {
        this._invalid = false;
      }
    },
    handleEnter(e) {
      this._emitChange(e);
      e.target.select();
    },
    handleBlur(e) {
      this._emitChange(e);
    },
    _emitChange(e) {
      let { text, colour } = this;
      if (this._invalid) {
        e.target.value = colour[text];
      } else {
        this.setColour({
          [text]: e.target.value
        });
        this.dispatch("color-picker", "parent:updateColor");
      }
      this._invalid = false;
    }
  }
};
</script>
