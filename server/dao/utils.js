
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

  // 修改
  update (options) {
    
  } 
}
module.exports = DaoUtil
