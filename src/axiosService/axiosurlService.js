import axiosService from './axiosService'
export default {
  hellouserService: function (param) { // 获取hello
    return axiosService().getUrl('/dispatch/backstage/process/queryList', param)
  },
  getlistService: function (param) { // 获取hello
    return axiosService().getUrl('/getlist', param)
  },
}
