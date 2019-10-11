<template>
  <div class="fz-tab-bar">
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.img" @mousedown.prevent />
        <p>{{ item.title }}</p>
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
