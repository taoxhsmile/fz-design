import { hostConfig } from "./url";

export default function(Vue) {
  Vue.prototype.$file_upload_url = `${hostConfig.file_upload_host}/file/upload`;
}
