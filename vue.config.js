// var path = require('path');

const devProxy = ['/pc', '/weixin', '/api']; // 代理
var proEnv = require('./config/pro.env'); // 生产环境
var uatEnv = require('./config/uat.env'); // 测试环境
var devEnv = require('./config/dev.env'); // 本地环境
const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
if (env === 'production') { // 生产环境
    target = proEnv.hosturl;
} else if (env === 'test') { // 测试环境
    target = uatEnv.hosturl;
} else { // 本地环境
    target = devEnv.hosturl;
}
// 生成代理配置对象
let proxyObj = {};
devProxy.forEach((value) => {
    proxyObj[value] = {
        target: target,
        changeOrigin: true,
        ws: true, // 是否启用websockets
        pathRewrite: {
            [`^${value}`]: value
        }
    };
});
// console.log('vue.config');
module.exports = {
    // baseUrl  type:{string} default:'/' 
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.
    baseUrl: process.env.NODE_ENV === 'production' ? '/front/boss/' : '/',
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    // outputDir: 'dist',
    assetsDir: "assets",
    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: true,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    devServer: {
        port: 8085, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // 设置代理
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理        
        proxy: proxyObj
    }
}