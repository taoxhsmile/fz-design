<template>
  <ul class="functional-list">
    <li
      v-for="(item, i) in librarys"
      :key="item.icon"
      :class="{ active: basicWidgetsFunctionalListActiveIndex === i }"
      @click="setBasicWidgetsFunctionalListActiveIndex(i)"
    >
      <div :class="'icon-' + item.icon"></div>
      <p>{{ item.name }}</p>
    </li>
  </ul>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      librarys: [
        { icon: "zjk", name: "组件库" },
        { icon: "tbk", name: "图标库" },
        { icon: "sck", name: "素材库" },
        { icon: "ymk", name: "页面库" }
      ]
    };
  },
  computed: {
    ...mapGetters({
      basicWidgetsFunctionalListActiveIndex:
        "componentBasicWidgetsFunctionalList/activeIndex"
    })
  },
  methods: {
    ...mapMutations({
      setBasicWidgetsFunctionalListActiveIndex:
        "componentBasicWidgetsFunctionalList/setActiveIndex"
    })
  }
};
</script>
<style lang="less" scoped>
.functional-list {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  li {
    text-align: center;
    padding: 10px 0;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    position: relative;
    cursor: pointer;
    div {
      width: 24px;
      height: 24px;
      margin: 0 auto;
      margin-bottom: 9px;
    }
    p {
      line-height: 14px;
    }
    .icon-zjk {
      background: url(../../../assets/images/icons/zjk.png) no-repeat center
        center;
      background-size: 100% 100%;
    }
    .icon-tbk {
      background: url(../../../assets/images/icons/tbk.png) no-repeat center
        center;
      background-size: 100% 100%;
    }
    .icon-sck {
      background: url(../../../assets/images/icons/sck.png) no-repeat center
        center;
      background-size: 100% 100%;
    }
    .icon-ymk {
      background: url(../../../assets/images/icons/ymk.png) no-repeat center
        center;
      background-size: 100% 100%;
    }
    &.active {
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      &::before {
        content: "";
        position: absolute;
        left: -1px;
        top: 0;
        width: 1px;
        height: 100%;
        background: white;
      }
      .icon-zjk {
        background: url(../../../assets/images/icons/zjk_active.png) no-repeat
          center center;
        background-size: 100% 100%;
      }
      .icon-tbk {
        background: url(../../../assets/images/icons/tbk_active.png) no-repeat
          center center;
        background-size: 100% 100%;
      }
      .icon-sck {
        background: url(../../../assets/images/icons/sck_active.png) no-repeat
          center center;
        background-size: 100% 100%;
      }
      .icon-ymk {
        background: url(../../../assets/images/icons/ymk_active.png) no-repeat
          center center;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
