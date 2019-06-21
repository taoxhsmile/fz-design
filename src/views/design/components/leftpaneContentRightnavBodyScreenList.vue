<template>
  <li
    id="screen_list"
    class="screen-list"
    :class="{
      active: leftPaneActiveIndex == 0
    }"
  >
    <div id="new-screen" class="new-screen">
      <a @click="addPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-icon icon"
          viewBox="0 0 14 14"
          aria-hidden="true"
        >
          <path
            d="M6.01 6L6 4h2l.01 2H10v2H8.019l.009 1.917h-2L6.018 8H4V6h2.01zM7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zm0-2A5 5 0 1 0 7 2a5 5 0 0 0 0 10z"
          ></path></svg
        ><span>添加新页面</span>
      </a>
      <!-- <div class="Tooltip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-icon icon screenIcon"
          viewBox="0 0 14 14"
          aria-hidden="true"
        >
          <path
            d="M1 8h12a1 1 0 0 0 0-2H1a1 1 0 1 0 0 2zm8-4h4a1 1 0 0 0 0-2H9a1 1 0 1 0 0 2zm-8 8a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2H1zm2-8L0 0h6L3 4z"
          ></path>
        </svg>
      </div> -->
    </div>

    <div id="screen-scroll-list" class="rn-content-body">
      <div class="container">
        <ul>
          <li
            v-for="(page, i) in pages"
            :key="page.__id__"
            @click="setPageActiveIndex(i)"
          >
            <div
              class="screen-item"
              :class="{
                active: pageActiveIndex == i
              }"
            >
              <div class="screen-name">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg-icon icon"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path
                    d="M6 1H3v9h6V5H8a2 2 0 0 1-2-2V1zm1 .487V3a1 1 0 0 0 1 1h1v-.313l-2-2.2zM3 0h3.558a1 1 0 0 1 .74.327L9.74 3.014a1 1 0 0 1 .26.673V10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1a.996.996 0 0 1 1-1z"
                  ></path>
                </svg>
                <span class="editable-span">{{ page.__name__ }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      leftPaneActiveIndex: "pageDesign/leftPaneActiveIndex",
      pages: "pageDesign/pages",
      pageActiveIndex: "pageDesign/pageActiveIndex"
    })
  },
  methods: {
    ...mapMutations({
      addPage: "pageDesign/addPage",
      setPageActiveIndex: "pageDesign/setPageActiveIndex"
    })
  }
};
</script>
<style lang="less" scoped>
.screen-list {
  .new-screen {
    height: 36px;
    margin-left: 10px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid rgb(222, 222, 228);
    a {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      color: rgb(65, 80, 88);
      cursor: pointer;
      &:hover {
        color: rgb(41, 141, 248);
      }
      .icon {
        font-size: 14px;
        margin-right: 6px;
      }
    }
    // .Tooltip {
    //   margin-left: auto;
    //   display: flex;
    //   -webkit-box-align: center;
    //   align-items: center;
    //   .screenIcon {
    //     margin-right: 14px;
    //     color: rgb(91, 107, 115);
    //     cursor: pointer;
    //   }
    // }
  }
}
.rn-content-body {
  flex: 1;
  width: calc(100% - 2px);
  overflow-x: hidden;
  overflow-y: auto;
  .container {
    position: relative;
    min-height: 100%;
    ul {
      li {
        .screen-item {
          position: relative;
          height: 32px;
          padding-left: 14px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          color: rgb(91, 107, 115);
          cursor: pointer;
          border-width: 1px;
          border-style: solid;
          border-color: transparent;
          border-image: initial;
          &:hover,
          &.hover {
            color: rgb(41, 141, 248);
            background: rgb(247, 247, 247);
          }
          &.active {
            color: rgb(41, 141, 248);
            background: rgb(242, 242, 242);
          }
          .screen-name {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            width: 100%;
            padding-right: 5px;
            .icon {
              flex-shrink: 0;
              margin-right: 4px;
            }
            span {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              &.editable-span {
                margin-right: 14px;
                width: 100%;
                height: 24px;
                line-height: 24px;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
}
</style>
