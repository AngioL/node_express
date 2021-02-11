var Sequelize = require('sequelize') // 引入Sequelize模块
var CONFIG = require('./config')  // 引入数据库配置连接
// 实例化数据库对象
var sequelize = new Sequelize (
    // CONFIG.MYSQL.database,
    // CONFIG.MYSQL.username,
    // CONFIG.MYSQL.password,
     {
        //  host: CONFIG.MYSQL.host,
        database: 'wish',
        username: 'root',
        password: '040576',
        host: 'localhost',
        dialect: 'mysql',
        logging: CONFIG.DEBUG ? Console.log : false,  // 是否打印日志
        //配置数据库连接池
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: '+08:00'
    }
)

module.exports = sequelize