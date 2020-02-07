import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {

  // 封装 jsonp
  static jsonp(options) {
    return new Promise((resolve, reject) => { // 返回一个 promise 实例
      JsonP(options.url, {
        param: 'callback'
      }, function (err, response) {
        if (response.status == 'success') {
          resolve(response);
        } else {
          reject(response.messsage);
        }
      })
    })
  }

  // 封装 axios
  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) { // 判断接口是否需要 loading
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block';
    }
    let baseApi = '';
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        // baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          // loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }
        if (response.status === 200) { // HTTP 请求成功
          let res = response.data;
          if (res.code === 0) { // 业务请求成功
            resolve(res);
          } else {
            Modal.error({
              title: "提示",
              content: res.msg
            })
          }
        } else {
          reject(response.data); // HTTP 请求失败
        }
      })
    });
  }
}