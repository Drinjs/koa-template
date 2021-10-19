
const UserService = require('../../service/UserService.js')
const config = require('../../config/index')
const merry = config.api.merry

const routes = [
  {
    method: 'post',
    router: `${merry}/login`,
    service: UserService.login
  },
  {
    method: 'post',
    router: `${merry}/register`,
    service: UserService.register
  },
  {
    method: 'get',
    router: `${merry}/userlist`,
    service: UserService.getUserlist
  }
]

module.exports = routes;
