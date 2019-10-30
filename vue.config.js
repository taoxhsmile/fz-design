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
  },
  devServer: {
    port: 9001,
    proxy: {
      "/api": {
        target: "http://localhost:9001",
        bypass: function(req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          } else {
            const name = req.path
              .split("/mock/")[1]
              .split("/")
              .join("_");
            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          }
        }
      }
    }
  }
};
