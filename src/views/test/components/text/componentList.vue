<template>
  <shortcut>
    <template slot-scope="scope"
      ><div class="componentList-item">
        <div class="componentList-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="svg-icon icon"
            viewBox="0 0 34 24"
            aria-hidden="true"
          >
            <path
              d="M24 4h-6l-.042 15h2a1 1 0 1 1 0 2H14a1 1 0 0 1 0-2h1.958L16 4h-6v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V4z"
            ></path>
          </svg>
        </div>
        <span>{{ scope.data.shorterName }}</span>
      </div>
    </template>
  </shortcut>
</template>
<script>
import shortcut from "./shortcut";
export default {
  components: {
    shortcut
  }
};
</script>

<style lang="less" scoped>
.componentList-item {
  width: 75px;
  height: 70px;
  margin-top: -1px;
  margin-left: -1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid #ebebeb;
  color: #5b6b73;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    z-index: 1;
    border-color: #79baff;
    border-width: 2px;
  }
  .componentList-item-icon {
    height: 30px;
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: currentColor;
      width: 1em;
    }
    span {
      margin-top: 6px;
      text-align: center;
      color: #5b6b73;
    }
  }
}
</style>
