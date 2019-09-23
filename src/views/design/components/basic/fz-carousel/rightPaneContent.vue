<template>
  <el-collapse :value="['1', '2', '3']">
    <el-collapse-item title="上传图片" name="1">
      <ul class="clearfixed">
        <li v-for="item in contents" :key="item._t">
          <div class="img" :style="{ 'background-image': `url(${item.src})` }">
            <span class="tools"></span>
          </div>
        </li>
      </ul>
    </el-collapse-item>
    <el-collapse-item title="播放设置" name="2">
      <div class="rightpane__content-wrap">
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>自动播放</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="12">
            <el-radio
              :value="customFeature.autoplay"
              @input="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { autoplay: val }
                  })
              "
              :label="1"
              >是</el-radio
            >
          </el-col>
          <el-col :span="12">
            <el-radio
              :value="customFeature.autoplay"
              @input="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { autoplay: val }
                  })
              "
              :label="0"
              >否</el-radio
            >
          </el-col>
        </el-row>
        <el-row
          class="rightpane__title"
          type="flex"
          justify="center"
          align="middle"
        >
          <el-col>播放间隔</el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="3">
            时间
          </el-col>
          <el-col :span="9">
            <el-input-number
              style="width:88px;"
              controls-position="right"
              :min="0"
              :max="10000"
              :value="customFeature.delay"
              @change="
                val =>
                  setSelectComponentProperty({
                    key: 'customFeature',
                    value: { delay: val }
                  })
              "
            ></el-input-number>
          </el-col>
          <el-col :span="12">单位：毫秒</el-col>
        </el-row>
      </div>
    </el-collapse-item>
    <el-collapse-item title="点击事件" name="3">
      <!-- 点击事件 -->
      <rEventClick />
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapMutations } from "vuex";
import rEventClick from "../common/rEventClick";
export default {
  inject: ["rightPane"],
  components: {
    rEventClick
  },
  computed: {
    contents() {
      return this.rightPane.selectComponent.contents;
    },
    customFeature() {
      return this.rightPane.selectComponent.customFeature;
    }
  },
  methods: {
    ...mapMutations({
      setSelectComponentProperty: "pageDesign/setSelectComponentProperty"
    })
  }
};
</script>
<style lang="less" scoped>
ul {
  padding-left: 20px;
  padding-top: 24px;
  li {
    float: left;
    margin-right: 16px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 4px solid white;
    width: 90px;
    height: 90px;
    &:hover {
      border-radius: 5px;
      border: 4px solid rgba(64, 158, 255, 1);
    }
    .img {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>
