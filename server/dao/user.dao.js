const DaoUtil = require('./utils')
const mongoose = require('../mdbc/index')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

// userSchema为对应mongodb数据库中存储类型的映射变量
const userSchema = new Schema({
  userId: ObjectId,
  userName: String,
  userPassword: String,
  userAvatarurl: String,
  userProfile: String,
  tel: String,
  email: String,
  vip: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

const userModel = mongoose.model('user', userSchema);

class userDao {
  constructor() {
    this.model = new DaoUtil(userModel)
  }

  query(options) {
    this.query(options)
  }
}

module.exports = userDao
