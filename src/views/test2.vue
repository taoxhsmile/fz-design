<template>
  <section>
    <div class="edit" contenteditable="true">
      <p>123</p>
    </div>
    {{ url }}
    <img :src="url" v-if="url" />
  </section>
</template>
<script>
export default {
  data() {
    return {
      url: null
    };
  },
  mounted() {
    let _this = this;

    document.addEventListener("paste", function(e) {
      let { clipboardData } = e,
        { type } = clipboardData.items[0];

      if (type.match(/image/)) {
        var blob = clipboardData.items[0].getAsFile();
        var file = new FileReader(blob);
        file.onloadend = function(e) {
          _this.url = e.target.result;
          console.log("image", e.target.result);
        };
        file.readAsDataURL(blob);
      }
    });
  },
  methods: {
    handlePaste(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="less" scoped>
section {
  border: 1px solid #ccc;
  margin: 10px auto;
  width: 400px;
  height: 400px;
  .edit {
    outline: none;
  }
}
</style>
