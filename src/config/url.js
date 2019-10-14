const map = {
  //公共配置
  base: {
    file_upload_host: "http://localhost:9000",
    default_base_host: "http://localhost:9000"
  },
  //线上环境配置
  pro: {
    //每个模块对应的base_url
    base_url_map: {}
  },
  //预发环境（beta）
  beta: {
    //每个模块对应的base_url
    base_url_map: {}
  },
  //254测试环境
  test: {
    base_url_map: {}
  },
  //本地开发环境
  local: {}
};

export let hostConfig = {
  ...map.base,
  ...map[process.env.VUE_APP_API_ENV || "beta"]
};

export function getApiUrl(url) {
  // 如果路径已http,https开头的，则不作处理。
  if (url && url.indexOf("http") === 0) {
    return url;
  }

  const { base_url_map, default_base_host } = hostConfig;

  let match = false;
  let match_base_url = "";
  for (let key in base_url_map) {
    if (url.indexOf(key) === 0) {
      match = true;
      let size = base_url_map[key].length;
      match_base_url = base_url_map[key][Math.floor(Math.random() * size)];
      break;
    }
  }
  return match ? match_base_url + url : default_base_host + url;
}
