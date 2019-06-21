<template>
  <div class="header">
    <ol class="panel-nav">
      <el-tooltip
        class="item"
        effect="dark"
        content="页面"
        placement="top"
        size="mini"
        :tabindex="-1"
      >
        <li
          :class="{
            active: leftPaneActiveIndex == 0
          }"
          @click="changeActiveIndex(0)"
        >
          <div
            class="background-cube"
            :style="`transform: translateX(${100 * leftPaneActiveIndex}%);`"
          ></div>
          <div class="nav-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="svg-icon icon"
              viewBox="0 0 14 14"
              aria-hidden="true"
            >
              <path
                d="M7.9 0L7.9 2.6C7.9 3.6 8.7 4.4 9.6 4.4L12.3 4.4 12.3 12.3C12.3 13.2 11.5 14 10.5 14L3.5 14C2.5 14 1.8 13.2 1.8 12.3L1.8 1.8C1.8 0.8 2.5 0 3.5 0L7.9 0ZM8.8 0L12.3 3.5 9.6 3.5C9.1 3.5 8.8 3.1 8.8 2.6L8.8 0Z"
              ></path>
              <rect
                x="3.5"
                y="6.1"
                width="7"
                height="1.8"
                rx="0.9"
                class="fore"
              ></rect>
              <rect
                x="3.5"
                y="9.6"
                width="7"
                height="1.8"
                rx="0.9"
                class="fore"
              ></rect>
            </svg>
          </div>
        </li>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="元素"
        placement="top"
        size="mini"
        :tabindex="-1"
      >
        <li
          :class="{
            active: leftPaneActiveIndex == 1
          }"
          @click="changeActiveIndex(1)"
        >
          <div class="nav-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="svg-icon design/layer icon"
              viewBox="0 0 14 14"
              aria-hidden="true"
            >
              <path
                d="M2.01 7.37l3.78 2.511a2.188 2.188 0 0 0 2.42 0l3.78-2.51 1.73 1.155c.14.14.28.351.28.562 0 .21-.07.42-.28.561l-5.769 3.735a1.75 1.75 0 0 1-1.902 0L.28 9.65C.14 9.51 0 9.3 0 9.088c0-.21.14-.421.28-.562L2.01 7.37z"
                class="fore"
              ></path>
              <path
                d="M.28 5.439C.14 5.299 0 5.088 0 4.877c0-.21.14-.42.35-.561l5.702-3.7A1.75 1.75 0 0 1 7.951.61l5.769 3.705c.14.14.28.35.28.561 0 .21-.14.421-.28.562L7.972 9.28a1.75 1.75 0 0 1-1.944 0L2.59 6.982.28 5.44z"
              ></path>
            </svg>
          </div>
        </li>
      </el-tooltip>
    </ol>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      leftPaneActiveIndex: "pageDesign/leftPaneActiveIndex"
    })
  },
  methods: {
    ...mapMutations({
      setLeftPaneActiveIndex: "pageDesign/setLeftPaneActiveIndex"
    }),
    changeActiveIndex(index) {
      this.setLeftPaneActiveIndex(index);
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 32px;
  padding-left: 10px;
  padding-right: 12px;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  background: rgb(242, 243, 244);
  overflow: hidden;
  .panel-nav {
    height: 26px;
    align-self: flex-end;
    background: transparent;
    display: flex;
    justify-content: center;
    & > li {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 49px;
      border-radius: 4px 4px 0px 0px;
      transition: all 0.2s ease-out 0s;
      .background-cube {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        transition: transform 0.2s ease-in-out;
      }
      .nav-icon {
        color: rgb(91, 107, 115);
        display: flex;
        position: relative;
        z-index: 1;
        transition: all 0.1s ease-in-out;
        .svg-icon {
          font-size: 14px;
          .fore {
            color: #8d9ea7;
          }
        }
      }
      &.active {
        .nav-icon {
          color: rgb(255, 97, 97);
          .svg-icon {
            .fore {
              fill: #fccccc;
            }
          }
        }
      }
      &:not(.active):hover {
        background: rgb(252, 252, 252);
      }
    }
  }
}
</style>
