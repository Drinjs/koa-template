module.exports = {
  // 服务器配置
  SERVICE:{
      HOST:"",
      PORT:"3001"
  },
  // 数据库连接配置
  DATABASE:{
      HOST: 'localhost',
      USER: 'admin',
      PASSWORD: 'race0527',
      DATABASE: 'newDatabase'
  },
  // 接口地址配置
  API:{
      // 后台接口前缀
      ADMIN_INTERFACE_PREFIX: '/adminApi',
      // 移动端接口前缀
      MOBILE_INTERFACE_PREFIX:'/mobileApi'
  },
  // 路径配置
  PATH:{
      UPLOAD_PATH:"public/upload"
  },
  // 限制条件配置
  LIMIT:{
      UPLOAD_IMG_SIZE:200*1024*1024
  }
};