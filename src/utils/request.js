import axios from 'axios'
import { getToken,setToken } from './token'

const request = axios.create({
  baseURL: 'http://localhost:8888'
})
// 请求拦截器
request.interceptors.request.use(
  function (config) {
    if(getToken('tokenInfo')) {
      config.headers.Authorization = JSON.parse(getToken('tokenInfo')).tokenHead+ ' ' + JSON.parse(getToken('tokenInfo')).token || ''
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
    return response.data;
  }, function (error) {
    return Promise.reject(error)
  }
)

export default request
