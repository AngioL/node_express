const async = require('async')
const Common = require('./common')
const WishModel = require('../model/wish')
const Constant = require('../constant/constant')

// 配置导出对象

let obj = {
    getList,
    add
}

module.exports = obj

function getList(req, res) {
    // 定义一个async任务
    let tasks = {
        // 执行查询方法
        query: cb => {
            // 使用Sequelize的model的findAll方法出查询
            WishModel.findAll({
                limit: 10,
                order: [['created_at', 'DESC']]
            }).then(function(result) {
                let list = []
                result.forEach((v, i) => {
                    let obj = {
                        id: v.id,
                        name: v.name,
                        content: v.content
                    }
                    list.push(obj)
                });
                cb(null, list)
            }).catch(function(err) {
                console.log(err)
                cb(Constant.DEFAULT_ERROR)
            })
        }
    };
    // 让async自动控制流程
    async.auto(tasks, function(err, result) {
        if(err) {
            console.log(err)
        }else {
            res.render('index', {
                list: result['query']
            })
        }
    })
}

function add(req, res) {
    let tasks = {
        checkParams: cb => {
            Common.checkParams(req.body, ['name', 'content'], cb)
        },
        add: ['checkParams', (results, cb) => {
            WishModel.create({
                name: req.body.name,
                content: req.body.content
            }).then(function(result) {
                cb(null) // 插入成功处理
            }).catch(function(err) {
                console.log(err)
                cb(Constant.DEFAULT_ERROR)
            })
        }]
    }

    async.auto(tasks, function(err, result) {
        if(err) {
            console.log(err)
            let result = '失败'
            let msg = '添加失败，出现错误'
            if(err.code === 199) {
                msg = '添加失败，姓名和愿望都要填'
            }
            res.render('result', {
                result: result,
                msg: msg
            })
        }else {
            res.render('result', {
                result: '成功',
                msg: '添加成功，返回看下'
            })
        }
    })
}