const { resolve } = require("path");

class DaoUtil {
  constructor (model) {
    this.model = model;
  }
  // 查询 
  query (options={}) {
    return new Promise((resolve, reject) => {
      this.model.find(options, (err, res) => {
        if(err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }
  // 保存
  save (options) {
     const m = new this.model(options)
     return new Promise((resolve, reject)=> {
       m.save((err, res) => {
         if (err) {
           reject(err)
         }
         resolve(res)
       })
     })
     
  }
  // 删除
  delete (options) {
    const m = new this.model(options)
    return new Promise((resolve, reject)=> { 
      m.remove((err, res)=> {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }

  // 修改 http://www.mongoosejs.net/docs/api.html#update_update
  update (query, newVal, options={}) {
    this.model.update(query, newVal, options, (err, res) => {
      if(err) {
        reject(err)
      }
      resolve(res)
    })
  } 
}
module.exports = DaoUtil
