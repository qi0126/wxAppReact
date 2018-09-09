import fetch from 'dva/fetch';
import Axios from 'axios';

const URL = 'http://192.168.21.242:8080';// 海生接口服务


const imgURL = 'http://192.168.16.103:9999/';// 图片服务器地址

Axios.interceptors.request.use((config) => {
  const token = window.localStorage.token;
  if (token) {
    config.headers.Authorization = `token ${token}`;
    alert('aaaa');
  }
  return config;
}, (error) => {

  return Promise.reject(error);
});

Axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  // 如何在这里加入react中的路由转跳？
  return Promise.reject(error);
});


// const request = () => {
function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
// export default function request(url, options) {
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => ({ data }))
//     .catch(err => ({ err }));
// }


function ajax_post(url, data) {
  return Axios({
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    url: URL + url,
    data,
    // withCredentials:true
  });
}


// Axios公用请求方法
function ajax_get(url) {
  return Axios({
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    url: URL + url,
    withCredentials: true,
  });
}

function ajax_post_params(url, data) {
  // Axios.post((URL + url),data)
  return Axios({
    method: 'post',
    url: URL + url,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    params: data,
  });
}
function ajax_post_formdata(url, data) {
  return Axios.post((URL + url), data);
}


export default { ajax_get, ajax_post, ajax_post_params, ajax_post_formdata, imgURL };
