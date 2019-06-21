<template>
  <div class="custom-color-list">
    <header><div>最近使用颜色</div></header>
    <ul class="custom-palette">
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(179, 0, 0, 1)"
          style="background-color: rgb(179, 0, 0);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(53, 255, 0, 1)"
          style="background-color: rgb(53, 255, 0);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(31, 149, 0, 1)"
          style="background-color: rgb(31, 149, 0);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(35, 170, 0, 1)"
          style="background-color: rgb(35, 170, 0);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(54, 255, 0, 1)"
          style="background-color: rgb(54, 255, 0);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(42, 200, 0, 1)"
          style="background-color: rgb(42, 200, 0);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(227, 255, 219, 1)"
          style="background-color: rgb(227, 255, 219);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(226, 255, 218, 1)"
          style="background-color: rgb(226, 255, 218);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(51, 255, 0, 1)"
          style="background-color: rgb(51, 255, 0);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(223, 255, 215, 1)"
          style="background-color: rgb(223, 255, 215);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(88, 164, 68, 1)"
          style="background-color: rgb(88, 164, 68);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(0, 255, 155, 1)"
          style="background-color: rgb(0, 255, 155);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(255, 0, 0, 1)"
          style="background-color: rgb(255, 0, 0);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(206, 206, 206, 1)"
          style="background-color: rgb(206, 206, 206);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(159, 255, 134, 1)"
          style="background-color: rgb(159, 255, 134);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(188, 85, 101, 1)"
          style="background-color: rgb(188, 85, 101);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(16, 16, 16, 1)"
          style="background-color: rgb(16, 16, 16);"
        ></li>
      </div>
      <div class="custom-palette-color ">
        <li
          class="custom-palette-color-li"
          data-color="rgba(187, 27, 27, 1)"
          style="background-color: rgb(187, 27, 27);"
        ></li>
      </div>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.custom-color-list {
  padding: 10px 0;
  border-top: 1px solid #dedee4;
  .custom-palette {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    .custom-palette-color {
      &:not(:nth-child(9n)) {
        margin-right: 10px;
      }
      list-style: none;
      width: 18px;
      height: 18px;
      cursor: pointer;
      margin-top: 10px;
      li {
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.12);
      }
      .custom-palette-color-li {
        height: 100%;
      }
    }
  }
}
</style>
