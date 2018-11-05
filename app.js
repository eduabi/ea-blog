let express = require('express');
let utils = require('./public/common-utils')

const _serverConfig = Object.freeze({
    port: 8081
})

let app = express();
app.get('/',(req,res,next)=>{
    res.send('<h1>hello web</h1>')
})
app.listen(_serverConfig.port)
utils._log('Express服务已开启：http://localhost:'+_serverConfig.port,'warn')