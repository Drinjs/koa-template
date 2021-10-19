const path = require('path')
const fs = require('fs')

const getRoutes = function(_path) {
  const files = fs.readdirSync(_path)
  const routes = [];
  for(let i = 0, l = files.length; i < l; i++) {
    const filePath = path.join(_path, files[i])
    const route = require(filePath);
    routes.push(...route)
  }
  console.log(routes)
  return routes
}

module.exports = getRoutes
