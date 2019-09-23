<template>
  <div class="fz-carousel-preview" :style="styles">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in contents" :key="item._t">
        <template v-if="item.type === 'img'">
          <img :src="item.src" />
        </template>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import previewMixins from "../common/previewMixins";
import { defaultStyles } from "./previewData";
export default {
  name: "fz-carousel-preview",
  mixins: [previewMixins({ defaultStyles })],
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    contents() {
      return this.data.contents;
    },
    customFeature() {
      return this.data.customFeature;
    },
    swiperOption() {
      let {
        customFeature: { delay }
      } = this;

      return {
        autoplay: {
          delay
        },
        pagination: {
          el: ".swiper-pagination"
        }
      };
    }
  }
};
</script>
<style lang="less" scoped>
.fz-carousel-preview {
  img {
    display: block;
    width: 100%;
  }
}
</style>
