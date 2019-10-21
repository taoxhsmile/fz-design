<template>
  <div class="container">
    <div class="widget-item">
      1
      <div class="widget-item">1-1</div>
    </div>
    <div class="widget-item">2</div>
    <div class="widget-item">3</div>
    <div class="widget-item">4</div>
    <div :id="videoId"></div>
  </div>
</template>
<script>
import $ from "jquery";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      videoId: "aliplayer" + (Math.random() + "").replace(/\D/g, ""),
      contentId: "a769f2ab90164836af0bcb092080ffeb",
      mediaUrl: "",
      poster: "",
      list: {}
    };
  },
  async mounted() {
    let $container = $(".container"),
      $widgetItems = $container.find("> .widget-item");

    for (let i = 0; i < $widgetItems.length; i++) {
      $widgetItems.eq(i).css({ border: "1px solid red" });
    }
  },
  created() {
    this.insertScriptTag().then(() => {
      const contentIds = [
        "a769f2ab90164836af0bcb092080ffeb",
        "984eb8b888df472bb9b47a53f91a06bf",
        "d90eb8b60c9c4134b5bf11e98806c108",
        "be3a9ec7aefb44079b789c79272628d6",
        "8f7f073ebfe64386853bc0cc01ac4de7",
        "2b1ac591320d43c8b9fe69fe21c35dd1",
        "b12d6a0297924e0881436da27a6bfa0e",
        "48bf7fd8c9554845937a566070529aa8",
        "fa991e3c18804a2ab80afe608ab68133",
        "9c009628699f4cc2b5ffc9d8e57b40d9",
        "732ad02bf67c432e9f81680ed67d53a2",
        "707ff6ac66ed4e9a96b2611b06354d18",
        "6462350766304370856ce0e39a443f24"
      ];
      const relaIds = [
        13713,
        13753,
        13761,
        13811,
        13821,
        13868,
        13872,
        13873,
        13997,
        14034,
        14081,
        14209,
        14289
      ];

      contentIds.forEach((contentId, i) => {
        this.$fetchPost(
          "https://knowledgeapi.ngmm365.com/education/common/video/getSourcePlayAuth",
          {
            contentId,
            userId: 1960003,
            relaId: relaIds[i]
          }
        ).then(({ data: res }) => {
          let { playAuth } = res.data;
          this.createPlayer({ playAuth, contentId, i });
        });
      });
    });
  },
  methods: {
    ...mapMutations({}),
    insertScriptTag() {
      return new Promise(resolve => {
        let aliplayerJsTag = document.getElementById("aliplayerJsTag");
        if (aliplayerJsTag == null) {
          aliplayerJsTag = document.createElement("script");
          aliplayerJsTag.type = "text/javascript";
          aliplayerJsTag.src =
            "//g.alicdn.com/de/prismplayer/2.7.1/aliplayer-min.js";
          aliplayerJsTag.id = "aliplayerJsTag";
          let head = document.getElementsByTagName("head")[0];
          head.appendChild(aliplayerJsTag);
        }
        if (aliplayerJsTag.loaded) {
          resolve();
        } else {
          aliplayerJsTag.addEventListener("load", () => {
            aliplayerJsTag.loaded = true;
            resolve();
          });
        }
      });
    }
    // createPlayer({ playAuth, contentId, i }) {
    //   let { videoId } = this;
    //   let player = new Aliplayer(
    //     {
    //       id: videoId,
    //       vid: contentId,
    //       playauth: playAuth,
    //       qualitySort: "asc",
    //       format: "mp4",
    //       mediaType: "video",
    //       width: "100%",
    //       height: "100%",
    //       autoplay: false,
    //       isLive: false,
    //       rePlay: false,
    //       playsinline: true,
    //       preload: false,
    //       controlBarVisibility: "click",
    //       useH5Prism: true,
    //       showBuffer: true,
    //       skinLayout: false
    //     },
    //     (player, a, b) => {
    //       player.on("sourceloaded", () => {
    //         this.list[i] = player._options.source;
    //         console.log(this.list);
    //       });
    //     }
    //   );
    // }
  }
};
</script>
<style lang="less" scoped>
.widget-item {
  min-height: 20px;
  padding: 5px;
}
</style>
