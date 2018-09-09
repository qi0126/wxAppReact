import axios from 'axios';
import querystring from 'querystring';
import storage from './storage';


const URL = 'http://192.168.21.242:8880';// 海生接口服务

const imgURL = 'http://192.168.16.103:9999/';// 图片服务器地址

// 配置axios
const instance = axios.create({
  // baseURL: process.env.API_HOST,
  baseURL: URL,
  timeout: 5000,
});
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
instance.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 返回拦截器
instance.interceptors.response.use((response) => {
  // if (!response.status === 200) {
        // 请求失败
    // Toast({
    //   message: '服务器繁忙，请重试',
    //   position: 'bottom',
    // });
  // }
  // if (response.data.err_code !== 0) {
  //   if (response.data.err_code === '20002') {
            // 登录凭证失效
    //   Toast({
    //     message: '登录已过期',
    //     position: 'bottom',
    //   });
    //   storage.set('history_url', router.history.current.path);
    //   router.replace('/login');
    // } else if (response.data.err_code == 2) {
    //   Toast({
    //     message: response.data.err_msg,
    //     position: 'bottom',
    //   });
    // } else {
    //   Toast({
    //     message: response.data.err_msg,
    //     position: 'bottom',
    //   });
    // }
  // }
  return response;
}, (error) => {
  return Promise.reject(error);
});


// 封装参数
const buildURL = (url, needToken) => {
  if (!needToken) {
    return url;
  }
  const accessToken = storage.get('accessToken');
  if (!accessToken) {
    return false;
  }
  return `${url + (url.indexOf('?') >= 0 ? '&' : '?')}access_token=${accessToken}`;
};

export default {
    /**
     *  图片地址
     */

  imgURL,
    /**
     *  接口地址
     */

  URL,

    /**
     * GET请求
     *
     * @param {*} needToken 是否需要凭证
     * @param {*} url 请求地址
     * @param {*} callback  回调函数
     * @param {*} param 请求参数
     */
  get(needToken, url, params) {
    url = buildURL(url, needToken);

    if (!url) {
      return;
    }

    instance.get(url, params).then((res) => {
      return Promise.resolve(res.data);
      // if (typeof callback === 'function' && response.data.err_code === 0) {
      //   callback(response.data);
      // }
    }).catch((error) => {
      return Promise.reject(error);
    });
  },

    /**
     * POST请求
     *
     * @param {*} needToken 是否需要凭证
     * @param {*} url 请求地址
     * @param {*} params 请求参数
     */
  post(needToken, url, params) {
    url = buildURL(url, needToken);

    if (!url) {
      return;
    }

    const config = {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    };

    return instance.post(url, querystring.stringify(params), config).then((res) => {
      return Promise.resolve(res.data);
      // if (typeof callback === 'function' && response.data.err_code === 0) {
      //   callback(response.data);
      // } else if (typeof error === 'function' && response.data.err_code != 0) {
      //   error(response.data);
      // }
      // if (showToast && response.data.err_code === 0) {
        // Toast({
        //   message: typeof showToast === 'string' ? showToast : '操作成功',
        //   position: 'bottom',
        // });
      // }
    }).catch((err) => {
      return Promise.reject(err);
    });
  },

  /**
 * POST请求
 *
 * @param {*} needToken 是否需要凭证
 * @param {*} url 请求地址
 * @param {*} params 请求参数
 */
  postJson(needToken, url, params) {
    url = buildURL(url, needToken);

    if (!url) {
      return;
    }

    return instance.post(url, querystring.stringify(params)).then((res) => {
      // console.log(res);
      return Promise.resolve(res.data);
      // if (typeof callback === 'function' && response.data.err_code === 0) {
      //   callback(response.data);
      // } else if (typeof error === 'function' && response.data.err_code != 0) {
      //   error(response.data);
      // }
      // if (showToast && response.data.err_code === 0) {
      // Toast({
      //   message: typeof showToast === 'string' ? showToast : '操作成功',
      //   position: 'bottom',
      // });
      // }
    }).catch((err) => {
      // console.log(err);
      return Promise.reject(err);
    });
  },

    /**
     * 文件上传
     *
     * @param {*} needToken 是否需要凭证
     * @param {*} url 地址
     * @param {*} formData 表单数据
     * @param {*} callback 回调
     * @param {*} showToast 显示提示
     */
  upload(needToken, url, formData) {
    url = buildURL(url, needToken);

    if (!url) {
      return;
    }

    return instance.post(url, formData, {
      headers: {
        'Content-Type': 'multiple/form-data',
      },
    }).then((res) => {
      return Promise.resolve(res.data);
      // if (typeof callback === 'function' && response.data.err_code === 0) {
      //   callback(response.data);
      // }
      // if (showToast && response.data.err_code === 0) {
        // Toast({
        //   message: typeof showToast === 'string' ? showToast : '上传成功',
        //   position: 'bottom',
        // });
      // }
    }).catch((err) => {
      // Promise.reject(error);
      return Promise.reject(err);
    });
  },
}
;
