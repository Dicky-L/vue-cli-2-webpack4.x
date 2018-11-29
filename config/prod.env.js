const rtEnv = require('./runtime.env')
'use strict'
console.log('rtEnv:', rtEnv)
console.log(JSON.stringify(rtEnv))
module.exports = {
  NODE_ENV: '"production"',
  BUILD_ENV: '"' + process.env.BUILD_ENV + '"',
  IS_PRODUCTION: '"' + process.env.IS_PRODUCTION + '"',
  RUNTIME_ENV: JSON.stringify(rtEnv)
}
