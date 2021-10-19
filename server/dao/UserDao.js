const DaoUtil = require('./util')
const mongoose = require('../mdbc/index');
const Schema = mongoose.Schema;

// userSchema为对应mongodb数据库中存储类型的映射变量
const userSchema = new Schema({
  name: String,
  pwd: String,
  profile: String,
  tel: String,
  email: String,
  vip: Boolean
});

const userModel = mongoose.model('userlist', userSchema);
const util = new DaoUtil(userModel)
class UserDao {

  static userLogin(options) {
    return util.query(options)
  }

  static userRegister(options) {
    return util.save(options)
  }

  static getUserlist() {
    return util.query()
  }

  userDelete(options) {
    return util.delete(options)
  }

  userUpdate(query, newVal, options) {
    return util.update(query, newVal, options)
  }
}

module.exports = UserDao
