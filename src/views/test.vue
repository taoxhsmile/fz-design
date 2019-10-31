<template>
  <div class="test">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>代码草稿列表</span>
      </div>
      <el-table :data="dmcglb_data" style="width: 100%">
        <el-table-column prop="draft_id" label="ID"></el-table-column>
        <el-table-column prop="user_desc" label="描述"></el-table-column>
        <el-table-column prop="user_version" label="版本"></el-table-column>
        <el-table-column prop="create_time" label="创建时间"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="addtotemplate(scope.row)"
              >添加到模版库</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>代码模版列表</span>
      </div>
      <el-table :data="dmmblb_data" style="width: 100%">
        <el-table-column prop="template_id" label="ID"></el-table-column>
        <el-table-column prop="user_desc" label="描述"></el-table-column>
        <el-table-column prop="user_version" label="版本"></el-table-column>
        <el-table-column prop="create_time" label="创建时间"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="deleteTemplate(scope.row)"
              >删除模版</el-button
            >
            <el-button type="text" size="small" @click="commitCode(scope.row)"
              >上传代码</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>页面列表</span>
      </div>
      {{ page_data }}
    </el-card>
    <el-card class="box-card">
      <img v-if="qrcodeUrl" :src="qrcodeUrl" />
    </el-card>

    <el-button type="primary" @click="qsq">去授权</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dmcglb_data: [],
      dmmblb_data: [],
      page_data: [],
      qrcodeUrl: ""
    };
  },
  created() {
    //代码草稿列表
    this.dmcglb();
    //代码模版列表
    this.dmmblb();
    //页面列表
    this.getPage();
    //获取体验版二维码
    this.getQrcode();

    this.$fetchGet("/mock/api/detail", { id: "10001" })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    dmcglb() {
      this.$fetchGet(
        "/ThirdPartyDocking/Wechat/Agent/MiniProgram/GetTemplateDraftList"
      )
        .then(({ data }) => {
          this.dmcglb_data = data.draft_list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    dmmblb() {
      this.$fetchGet(
        "/ThirdPartyDocking/Wechat/Agent/MiniProgram/GetTemplateList"
      ).then(({ data }) => {
        this.dmmblb_data = data.template_list;
      });
    },
    qsq() {
      this.$fetchPost(
        "/ThirdPartyDocking/Wechat/ThirdPartyAccredit/PreAuthInfo",
        {
          redirectURI: "http://third.xzintl.com/success",
          authType: 2
        }
      ).then(({ data: { AuthURI } }) => {
        console.log(AuthURI);
        window.open(
          "https://mp.weixin.qq.com/cgi-bin/componentloginpage?component_appid=wx52e6a157b436d353&pre_auth_code=preauthcode@@@ilmVN2xw0L1p1MipNFxMN-XCczUp_gSlMvJCKIwH8XZKaH9xpgi1Ybw2IDJLgalP&redirect_uri=http://third.xzintl.com/test1",
          "_blank"
        );
      });
    },
    //添加到代码库
    addtotemplate({ draft_id: draftID }) {
      this.$fetchPost(
        "/ThirdPartyDocking/Wechat/Agent/MiniProgram/AddtoTemplate",
        {
          draftID
        }
      )
        .then(() => {
          this.$message({
            message: "操作成功",
            type: "success"
          });
          //添加成功重新还在模版列表
          this.dmmblb();
        })
        .catch(err => {
          this.$message({
            message: err,
            type: "error"
          });
        });
    },
    //删除模版
    deleteTemplate({ template_id: templateID }) {
      this.$alert(`确认删除模版[${templateID}]吗？`, "提示", {
        confirmButtonText: "确定",
        callback: action => {
          if (action === "confirm") {
            this.$fetchPost(
              "/ThirdPartyDocking/Wechat/Agent/MiniProgram/DeleteTemplate",
              {
                templateID
              }
            )
              .then(() => {
                this.$message({
                  message: "操作成功",
                  type: "success"
                });
                //删除成功重新还在模版列表
                this.dmmblb();
              })
              .catch(err => {
                this.$message({
                  message: err,
                  type: "error"
                });
              });
          }
        }
      });
    },
    //上传代码
    commitCode({
      user_version: userVersion,
      user_desc: userDesc,
      template_id: templateID
    }) {
      this.$fetchPost(
        "/ThirdPartyDocking/Wechat/Agent/MiniProgram/CommitCode",
        {
          templateID,
          authAppID: "wxd9810d17839549cb",
          extJSON: JSON.stringify({
            extAppid: "wxd9810d17839549cb",
            ext: {
              name: "wechat",
              appId: "wxd9810d17839549cb",
              test: "123"
            },
            window: {
              backgroundTextStyle: "light",
              navigationBarBackgroundColor: "#fff",
              navigationBarTitleText: "Demo",
              navigationBarTextStyle: "black"
            },
            networkTimeout: {
              request: 10000,
              downloadFile: 10000
            },
            tabBar: {
              list: [
                {
                  pagePath: "pages/index/index",
                  text: "首页",
                  iconPath:
                    "https://staticimg.ngmm365.com/210d689137104ff10cd2c1456b9dd418-w16_h16.png"
                },
                {
                  pagePath: "pages/test/test",
                  text: "测试",
                  iconPath:
                    "https://staticimg.ngmm365.com/e456189870c9037125d9888db42f836a-w16_h16.png"
                }
              ]
            }
          }),
          userVersion,
          userDesc
        }
      ).then(() => {
        this.$message({
          message: "操作成功",
          type: "success"
        });
      });
    },
    //获取页面列表
    getPage() {
      this.$fetchPost(
        "/ThirdPartyDocking/Wechat/Agent/MiniProgram/GetCodePageList",
        {
          authAppID: "wxd9810d17839549cb"
        }
      ).then(({ data }) => {
        this.page_data = data.page_list;
      });
    },
    getQrcode() {
      this.$fetchPost(
        "/ThirdPartyDocking/Wechat/Agent/MiniProgram/GetQrcode",
        {
          authAppID: "wxd9810d17839549cb"
        },
        {
          responseType: "blob"
        }
      ).then(res => {
        this.qrcodeUrl = URL.createObjectURL(res);
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
