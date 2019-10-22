import axios from "axios";
import qs from "qs";
import { getApiUrl } from "./url";

axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //配置请求头
axios.defaults.baseURL = "";

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    if (config.method === "post") {
      let auth = {
        "x-user-id": "1928232",
        "x-access-token": "4bf50f3a23d34e99b83e1fd10d806f3d",
        "x-platform": "browser",
        "x-client-token": "a32184b3-e71b-4e15-ae56-66f8b7740a22",
        "x-system-version": "10.1.1",
        "x-client-version": "2.0.1",
        "x-method-version": "1.0",
        "x-network-type": "3g"
      };
      config.data = qs.stringify({
        auth: JSON.stringify(auth),
        data: JSON.stringify(config.data)
      });
    }
    return config;
  },
  error => {
    console.log("错误的传参");
    return Promise.reject(error);
  }
);

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    // if (!res.data.success) {
    //   return Promise.resolve(res);
    // }
    return res;
  },
  () => {
    return Promise.reject("接口异常");
  }
);

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(getApiUrl(url), params)
      .then(
        ({ data }) => {
          if (data.resultCode === 200) {
            resolve(data);
          } else {
            reject(data.resultMsg);
          }
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}
////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios
      .get(getApiUrl(url), { params: param })
      .then(
        ({ data }) => {
          if (data.resultCode === 200) {
            resolve(data);
          } else {
            reject(data.resultMsg);
          }
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

export default function(Vue) {
  Vue.prototype.$axios = axios;
  Vue.prototype.$fetchPost = fetchPost;
  Vue.prototype.$fetchGet = fetchGet;
}
