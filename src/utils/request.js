import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8888'
})
// 请求拦截器
request.interceptors.request.use(
  function (config) {
    if(window.localStorage.getItem('tokenInfo')) {
      config.headers.Authorization = window.localStorage.getItem('tokenInfo').tokenInfo?.tokenHead + ' ' + window.localStorage.getItem('tokenInfo').tokenInfo?.token
    }
    return config
  },
  function (error) {
    return Promise.reject(error);
  }
)
// 响应拦截器
request.interceptors.response.use(
  function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error)
  }
)

export default request
