const path = require("path");
const resolve = dir => path.join(__dirname, dir);
// const assetsDir = 'static'
// posix兼容方式处理路径
// const posixJoin = _path => path.posix.join(assetsDir, _path);
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@design", resolve("src/views/design"));
  },
  pluginOptions: {
    //less 全局变量
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/styles/varibles.less")]
    }
  }
};
