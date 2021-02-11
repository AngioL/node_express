// 定义对象Obj存放请求成功
const obj = {
    DEFAULT_SUCESS: {
        code: 1000,
        msg: ''
    },
    // 请求失败
    DEFAULT_ERROR: {
        code: 188,
        msg: '出现错误'
    },
    // 定义错误返回-缺少必要参数
    LACK: {
        code: 199,
        msg: '缺少必要参数'
    }
}

module.exports = obj

