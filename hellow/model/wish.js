const Sequelize = require('sequelize');
const db = require('../db')

//定义model

const Wish = db.define('Wish', {
    // 主键;
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    // 许愿姓名
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    // 许愿内容
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    underscored: true,   // 是否支持驼峰
    tableName: 'wish'  // 数据库名
});

module.exports = Wish