const path = require("path");
const resolve = dir => path.join(__dirname, dir);
// const assetsDir = 'static'
// posix兼容方式处理路径
// const posixJoin = _path => path.posix.join(assetsDir, _path);
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@design", resolve("src/views/design"));
  }
};
