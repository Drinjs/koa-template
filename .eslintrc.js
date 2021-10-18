module.exports = {
  root: true,// 标识当前配置文件为eslint的根配置文件，让其停止在父级目录中继续寻找
 
  env: { //运行环境
    node: true,
    browser: true, // 浏览器环境
  },
   
  parser: 'babel-eslint',
 
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],//规则继承
 
  parserOptions: {//解析器配置项
    "sourceType": "module",//指定JS代码来源的类型，script(script标签引入) | module（es6的 module模块），默认为script。为什么vue的会使用script呢？因为vue是通过babel-loader编译的，而babel编译后的代码就是script方式
    "ecmaVersion": 6,     // 支持的ES语法版本，默认为5
    "experimentalObjectRestSpread": true, //启用对对象的扩展
    "jsx": true,         //启用jsx语法
    "globalReturn":true,          //允许return在全局使用  
  },
  
  rules: {},//自定义规则
 
  // 定义额外的全局
  globals: {
    process: true,
  },
  plugins: [ //插件
    'vue'
  ],
  
  overrides: [
   {
   'files': ['bin/*.js', 'lib/*.js'],
   'excludedFiles': '*.test.js',
   'rules': {
    'quotes': [2, 'single']
    }
  }
 ]  //针对特定文件进行特定的eslint检测
}