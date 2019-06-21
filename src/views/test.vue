<template>
  <div class="contain">
    <div class="column left">
      <ul>
        <draggable v-model="list" :move="onMove" group="list">
          <li v-for="item in list" :key="item.order">{{ item.name }}</li>
          <button slot="footer">Add</button>
        </draggable>
      </ul>
    </div>
    <div class="column center">
      <ul>
        <draggable v-model="list2" :move="onMove" group="list">
          <li v-for="item in list2" :key="item.order">{{ item.name }}</li>
          <button slot="header">update</button>
        </draggable>
      </ul>
    </div>
    <div class="column right">
      <pre>{{ list1String }}</pre>
    </div>
    <div class="column right">
      <pre>{{ list2String }}</pre>
    </div>
  </div>
</template>
<script>
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      list2: message.map((name, index) => {
        return { name, order: index + 1 + "-1", fixed: false };
      })
    };
  },
  computed: {
    list1String() {
      return JSON.stringify(this.list, null, 2);
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2);
    }
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      console.log(relatedContext, draggedContext);
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  }
};
</script>

<style lang="less" scoped>
.contain {
  display: flex;
  div.column {
    border: 1px solid black;
    min-height: 500px;
  }
  .left {
    flex: 0 0 300px;
  }
  .center {
    flex: 0 0 300px;
  }
  .right {
    flex: 0 0 300px;
  }
  ul {
    border: 1px solid red;
    min-height: 100px;
    li {
      border: 1px solid black;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>
