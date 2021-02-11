// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


var express = require('express');
var router = express.Router();

// 引入自定义的controller
const IndexController = require('../controller/index');
console.log(IndexController.getList)
/* GET home page. */
router.get('/', IndexController.getList) // 定义首页路由
router.post('/add', IndexController.add)

module.exports = router;
