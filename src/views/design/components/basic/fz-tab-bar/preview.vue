<template>
  <div class="fz-tab-bar">
    <ul>
      <li v-for="(item, i) in list" :key="item.id">
        <img
          :src="i === activeIndex ? item.selectedIconPath : item.iconPath"
          @mousedown.prevent
        />
        <p :style="pStyle(i)">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "fz-tab-bar",
  computed: {
    ...mapGetters({
      tabBar: "pageDesign/tabBar"
    }),
    list() {
      return this.tabBar.list;
    },
    activeIndex() {
      return 0;
    }
  },
  methods: {
    pStyle(i) {
      let { activeIndex, tabBar } = this;
      return {
        color: i === activeIndex ? tabBar.selectedColor : tabBar.color
      };
    }
  }
};
</script>
<style lang="less" scoped>
.fz-tab-bar {
  box-sizing: border-box;
  height: 100%;
  ul {
    display: flex;
    height: 100%;
    li {
      flex: 1;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 25px;
        height: 25px;
      }
      p {
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }
}
</style>
