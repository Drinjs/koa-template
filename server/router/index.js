const getRoutes = require('./util')
const path = require('path')
const Router = require('koa-router')
const router =  new Router()

const routes = getRoutes(path.join(__dirname, './src/'))

const setRouter = function(item) {
  const strategis =  {
    'post': function(){
      return router.post(item.router, item.service)
    },
    'get': function(){
      return router.get(item.router, item.service)
    },
    'put': function(){
      return router.put(item.router, item.service)
    },
  }
  return strategis[item.method]
}
routes.map((item) => {
  setRouter(item)()
})

module.exports = router
