const UserDao = require('../dao/UserDao')

class UserService {
  constructor() {
  }

  static login(options) {
    UserDao.userLogin(options)
  }

  static register(options) {
    UserDao.userRegister(options)
  }

  static async getUserlist(ctx, next) {
    const res = await UserDao.getUserlist()
    ctx.response.body = res
    ctx.response.status = 200
    await next()
  }

  static update(query, newVal, options) {
    UserDao.userUpdate(query, newVal, options)
  }

  static delete(options) {
    UserDao.userDelete(options)
  }
}

module.exports = UserService
