const Koa = require('koa')
const logger = require('koa-logger');
const app = new Koa()
const ignoreAssets = require('./middleware/index')
const config = require('./config/index')
const koaJson = require('koa-json');    // get提交数据的中间件
const bodyParser = require('koa-bodyparser'); // post提交数据中间件
const koaBody = require('koa-body');   // 文件上传
// const router =  require('./router')
const cors = require('koa-cors')

const Router = require('koa-router')
const router =  new Router()
const UserService = require('./service/UserService.js')
router.get('/merryApi/userlist', UserService.getUserlist)
// const proxy = require('koa-server-http-proxy');

app.use(bodyParser());
app.use(koaJson());
app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 2*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}))

app.use(ignoreAssets(logger()))

// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(router.routes());

app.use(cors())
// 开启代理
// const proxyTable = {
//     '/shsApi': {
//         target: 'http://xxxxxxx:8081',
//         pathRewrite: { '^/shsApi': 'shsApi/' },
//         changeOrigin: true
//     },
// };
// Object.keys(proxyTable).forEach((context) => {
//     var options = proxyTable[context];
//     app.use(proxy(context, options))
// });
let port = config.SERVICE.PORT

app.listen(port, function () {
  console.log(`应用已经启动，http://localhost:${port}`);
})