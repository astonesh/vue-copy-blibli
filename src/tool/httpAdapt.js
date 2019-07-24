import axios from 'axios';
import router from '../router';

const downloadUrl = url => {
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  iframe.onload = function () {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}
// 超时时间
// axios.defaults.timeout = 10000;
// 允许axios携带cookie
axios.defaults.withCredentials = true;
// http请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
})
// http响应拦截器
axios.interceptors.response.use(response => {
  if (response.headers && (response.headers['content-type'] === 'application/x-msdownload' || response.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
    downloadUrl(response.request.responseURL);
  }
  return response;
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
    case 400:
      error.message = '请求错误';
      break;
    case 401:
      error.message = '未授权，请登录';
      router.replace({
          path: '/login'
      })
      window.localStorage.removeItem('isLogin');
      window.localStorage.removeItem('username');
      window.localStorage.removeItem('userId');
      window.sessionStorage.removeItem('hasRead');
      break;
    case 403:
      error.message = '拒绝访问';
      break;
    case 404:
      error.message = `请求地址出错: ${error.response.config.url}`;
      break;
    case 408:
      error.message = '请求超时';
      break;
    case 500:
      error.message = '服务器内部错误';
      break;
    case 501:
      error.message = '服务未实现';
      break;
    case 502:
      error.message = '网关错误';
      break;
    case 503:
      error.message = '服务不可用';
      break;
    case 504:
      error.message = '网关超时';
      router.replace({
          path: '/login'
      })
      window.localStorage.removeItem('isLogin');
      break;
    case 505:
      error.message = 'HTTP版本不受支持';
      break;
    }
  }
  return Promise.reject(error.response.data);
})
export default {
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post: (url, data, headers) => {
    return new Promise((resolve, reject) => {
      axios.post(url, data, headers)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
    })
  },
  delete: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.delete(url, {
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        })
    })
  },
  patch: (url, data) => {
    return new Promise((resolve, reject) => {
      axios.patch(url, data, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
    })
  },
  put: (url, data) => {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
    })
  },
  mock: (data) => {
    return new Promise((resolve, reject) => {
      // axios.post(url, data, headers)
      //   .then(response => {
      //     resolve(response.data);
      //   }, err => {
      //     reject(err);
      //   })
      resolve(data);
    })
  }
};
