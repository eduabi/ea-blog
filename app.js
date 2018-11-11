let express = require('express');
let swig = require('swig');
let mongoose = require('mongoose');
let utils = require('./utils/common-utils');
let history = require('connect-history-api-fallback');
let path = require('path')


const _serverConfig = Object.freeze({
    port: 8081
})

let app = express();
//开启服务端history模式，加载单页应用路由
app.use(history({
    verbose: true,
    index: '/tinyBlog' //服务端路由重定向
}));
//设置静态文件托管
app.use('/wyblog', express.static(path.join(__dirname,'/public/dist')))
app.engine('html', swig.renderFile);
app.set('views', './public/dist');
app.set('view engine', 'html');
swig.setDefaults({
    cache: false
})
//模块划分
app.use('/admin', require('./routers/admin'))
app.use('/api', require('./routers/api'))
app.use('/', require('./routers/main'))
mongoose.connect('mongodb://localhost:27018/wyblogdb', (err) => {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('');
        utils._log('数据库连接成功', 'warn')
        app.listen(_serverConfig.port)
        utils._log('Express服务已开启：http://localhost:' + _serverConfig.port, 'warn')
    }
})