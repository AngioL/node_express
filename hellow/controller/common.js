const async = require('async')
const Constant = require('../constant/constant')

//定一个对象
const obj = {
    checkParams
}
module.exports = obj

/* *
* 效验全局方法
* @param params 请求参数
* @param checkAll 需要验证的参数
* @param cb 回调
*/

function checkParams(params, checkAll, cb) {
    let flag = true
    checkAll.forEach(v => {
        if(!params[v]) {
            flag = false
        }
    });
    if(flag) {
        cb(null)
    }else {
        cb(Constant.LACK)
    }
}