<template>
  <label
    class="Input InputNumber ConfirmInputNumber small PanelInputNumber is-valid isnt-empty with-title"
    :class="[labelClass]"
  >
    <span class="title" v-if="text">{{ text }}</span>
    <input
      type="text"
      placeholder=""
      :value="value"
      @focus="handlerFocus"
      @blur="handlerBlur"
      @change="handlerChange"/>
    <div class="action" v-if="showAction">
      <button
        type="button"
        class="Button TextButton"
        tabindex="-1"
        data-action="up"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-icon triangle_up"
          viewBox="0 0 6 4"
          aria-hidden="true"
        >
          <path d="M3 0l3 4H0z"></path>
        </svg></button
      ><button
        type="button"
        class="Button TextButton"
        tabindex="-1"
        data-action="down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-icon triangle_down"
          viewBox="0 0 6 4"
          aria-hidden="true"
        >
          <path d="M3 4l3-4H0z"></path>
        </svg>
      </button></div
  ></label>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    labelClass() {
      let { isActive, value } = this;
      return {
        "is-active": isActive,
        "isnt-empty": !!value
      };
    },
    showAction() {
      let { type } = this;
      return type === "number";
    }
  },
  methods: {
    handlerFocus() {
      this.isActive = true;
    },
    handlerBlur() {
      this.isActive = false;
    },
    handlerChange(e) {
      let newVal = e.target.value;
      this.$emit("update", newVal);
    }
  }
};
</script>
<style lang="less" scoped>
.Input {
  color: #415058;
  &.small {
    height: 22px;
    font-size: 12px;
  }
  &.is-valid:not(.unstyled) {
    .title {
      color: rgb(141, 158, 167);
    }
    input {
      color: rgb(65, 80, 88);
      background-color: rgb(242, 242, 242);
      border-width: 1px;
      border-style: solid;
      border-color: rgb(232, 232, 232);
      border-image: initial;
    }
  }
  &:not(.unstyled) {
    input {
      background-color: #f6f7f8;
      border: 1px solid #f2f2f3;
      border-radius: 2px;
      caret-color: #298df8;
      transition: 0.2s ease-out;
      transition-property: background, border, box-shadow, opacity;
      &:enabled:not([readonly]):hover {
        border-color: #298df8;
      }
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;
    pointer-events: none;
    user-select: none;
    border: 1px solid transparent;
  }
  input {
    padding: 0 0.5em;
    width: 100%;
    height: 100%;
    background: none;
    border: 0;
    outline: 0;
  }
  button {
    background: none;
    border: 0;
    outline: 0;
    border-radius: 0;
    color: inherit;
    cursor: pointer;
  }
}
.InputNumber {
  position: relative;
  display: inline-block;
  min-width: 2em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  &:not(.unstyled).is-active {
    input {
      background-color: #fff;
      border-color: #298df8;
      box-shadow: 0 0 6px 0 rgba(41, 141, 248, 0.5);
    }
  }
  .title {
    margin-left: 0.5em;
    color: #8d9ea7;
  }
  input {
    padding-right: 1.5em;
    padding-left: 0.5em;
    font-family: inherit;
  }
  .action {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5em;
    height: 100%;
    text-align: center;
    opacity: 1;
    transition: all 0.2s ease-out;
    &:not(.caret) {
      opacity: 0;
    }
    svg {
      height: 4px;
      fill: currentColor;
      fill-rule: evenodd;
      path {
        fill: currentColor;
      }
    }
    button {
      display: block;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 50%;
      line-height: 0;
      color: #8d9ea7;
      transition: all 0.1s ease-out;
      &[data-action="up"] {
        svg {
          margin: 5px 0 2px;
        }
      }
      &[data-action="down"] {
        svg {
          margin: 2px 0 5px;
        }
      }
      &:hover {
        color: #5b6b73;
      }
    }
  }
  &:hover .action {
    opacity: 1;
  }
}
</style>
