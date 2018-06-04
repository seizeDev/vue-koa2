const router = require('koa-router')()
const controller = require('../controller/indexController')

module.exports = app => {
  router.get('/hello', controller.hello) // 处理进入的函数
  router.get('/getlist', controller.getlist) // 处理进入的函数
  app.use(router.routes())
}