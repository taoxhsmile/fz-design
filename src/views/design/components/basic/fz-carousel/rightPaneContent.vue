<template>
  <el-collapse :value="['1', '2', '3']">
    <el-collapse-item title="上传图片" name="1">
      <ul class="img-list">
        <li v-for="item in contents" :key="item._t">
          <div class="content">
            <div class="_left">
              <div
                class="img"
                :style="{ 'background-image': `url(${item.src})` }"
              >
                <span class="tools"></span>
              </div>
            </div>
            <div class="_right">
              <div class="title-wrap">
                图片名称
              </div>
              <div class="link-wrap">
                页面路径
                <fz-icon name="iconguanbi"></fz-icon>
              </div>
              <el-button type="primary" plain>点击事件</el-button>
            </div>
            <fz-icon name="iconguanbi"></fz-icon>
          </div>
        </li>
      </ul>
      <div class="add-btn-wrap">
        <el-button type="primary">
          添加图片
        </el-button>
      </div>
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
  li {
    box-sizing: border-box;
    padding: 20px 10px;
    .content {
      position: relative;
      padding: 20px 10px;
      border: 2px dashed #c0c4cc;
      border-radius: 3px;
      display: flex;
      & > ._left {
        flex: 0 0 90px;
        width: 90px;
      }
      & > ._right {
        flex: auto;
        min-width: 0;
        margin-left: 18px;
        .title-wrap {
          border: 1px solid #eef0f3;
          border-radius: 4px;
        }
        .link-wrap {
          border: 1px solid #409eff;
          border-radius: 4px;
          position: relative;
          & > i {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -50%);
            color: #9ecdff;
            font-size: 14px;
          }
        }
      }
      & > i {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        color: #97999c;
      }
    }
    .img {
      width: 90px;
      height: 90px;
      border-radius: 3px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  }
}
.add-btn-wrap {
  padding: 20px 0;
  & /deep/ .el-button {
    width: 276px;
    height: 40px;
    display: block;
    margin: 0 auto;
  }
}
</style>
