<template>
  <div class="basic-widgets-wrap">
    <ul id="basic-widgets">
      <li v-for="(widget, i) in widgets" :key="i">
        <component :is="getComponentName(widget, 'leftpane')"></component>
      </li>
    </ul>
  </div>
</template>
<script>
import getBasicComponents from "@design/components/basic/index.js";
import { getComponentName } from "@design/components/basic/index.js";
export default {
  components: {
    ...getBasicComponents("leftpane")
  },
  data() {
    return {
      widgets: ["text", "picture"]
    };
  },
  methods: {
    getComponentName
  }
};
</script>
<style lang="less" scoped>
.basic-widgets-wrap {
  position: relative;
  z-index: 11;
  flex-shrink: 0;
  width: 40px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 14px 0px;
  background: rgb(255, 255, 255);
  border-right: 1px solid rgb(222, 222, 228);
  #basic-widgets {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    li {
      width: 26px;
      height: 26px;
      margin-bottom: 24px;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      font-size: 18px;
      cursor: pointer;
      color: rgb(108, 109, 110);
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      border-image: initial;
      border-radius: 2px;
      &:hover {
        color: rgb(65, 80, 88);
        background-color: rgb(242, 242, 242);
        border-color: rgb(232, 232, 232);
      }
      &:hover /deep/ .tooltip {
        display: block;
      }
    }
  }
}
</style>
