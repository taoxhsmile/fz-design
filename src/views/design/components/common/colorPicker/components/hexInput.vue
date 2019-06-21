<template>
  <label class="color-input" style="width: 58px;">
    <input
      :value="hex"
      @focus="handleFocus"
      @input="handleInput"
      @keyup.enter="handleEnter"
      @blur="handleBlur"
      ref="hex"
      maxlength="6"
    />
    <span>Hex</span>
  </label>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import emitterMixin from "@/mixins/emitter.js";
export default {
  mixins: [emitterMixin],
  computed: {
    ...mapGetters({
      formatedHex: "componentColorPicker/formatedHex"
    }),
    hex() {
      return this.formatedHex;
    }
  },
  methods: {
    ...mapMutations({
      setHex: "componentColorPicker/setHex"
    }),
    //获得焦点的时候选中文本
    handleFocus(e) {
      e.target.select();
    },
    _correctInput(value) {
      return value
        .toUpperCase()
        .replace(/[^0-9A-F]/g, "")
        .slice(0, 6);
    },
    handleInput(e) {
      //阻止输入非法字符
      const value = (e.target.value = this._correctInput(e.target.value));
      //记录当前字符是否合法
      if (value.length === 3 || value.length === 6) {
        this._invalid = false;
      } else {
        this._invalid = true;
      }
    },
    _format3DigitValue(v) {
      return `${v[0]}${v[0]}${v[1]}${v[1]}${v[2]}${v[2]}`;
    },
    formatAndHandleChange() {
      let formattedValue = this.$refs.hex.value;

      if (formattedValue.length === 3) {
        formattedValue = this._format3DigitValue(formattedValue);
      }

      formattedValue.toLowerCase();

      this.setHex(formattedValue);
      this.dispatch("color-picker", "parent:updateColor");

      return formattedValue;
    },
    handleEnter(e) {
      //如果是无效字符这把文本框内容修改回原来的值
      if (this._invalid) {
        e.target.value = this.hex;
      } else {
        const formattedValue = this.formatAndHandleChange();
        this._originalValueOfInput = formattedValue;
      }
      this._invalid = false;
      e.target.select();
    },
    handleBlur(e) {
      if (this._invalid) {
        e.target.value = this.hex;
      } else {
        this.formatAndHandleChange();
      }
      this._invalid = false;
      this._originalValueOfInput = "";
    }
  }
};
</script>
