import axios from 'axios';
import {axiosRequest, axiosResponse} from './filter/axiosFilter'
// // 添加请求拦截器
axios.interceptors.request.use(axiosRequest, function (error) {
  return error
});
// 添加响应拦截器
axios.interceptors.response.use(axiosResponse, function (error) {
  return error
});

function axiosService() {
  return{
    postJson: function (url, param) {
      var args = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        timeout: 30000,
        validateStatus: function (status) {
          return status; // Reject only if the status code is greater than or equal to 500
        }
      }
      return axios.post(url, param, args)
    },
    getUrl: function (url, param) {
      var args = {
        params: param,
        timeout: 30000,
        validateStatus: function (status) {
          return status; // Reject only if the status code is greater than or equal to 500
        }
      }
      return axios.get(url, args)
    },
    deleteUrl: function (url, param) {
      var args = {
        params: param,
        timeout: 30000,
        validateStatus: function (status) {
          return status; // Reject only if the status code is greater than or equal to 500
        }
      }
      return axios.delete(url, args)
    }
  }
}
export default axiosService
