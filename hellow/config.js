// 默认dev配置
const config = {
    DEBUG: true,
    // MySQL数据库连接配置
    MYSQL: {
        host: 'localhost',
        database: 'wish',
        username: 'root',
        password: '040576'
    }
};

if(process.env.NODE_ENV === 'production') {
    // 生产环境MySQL数据库配置
    config.MYSQL = {
        host: 'aaa.mysql.rds.aliyuncs.com',
        database: 'aaa',
        username: 'aaa',
        password: 'aaa'
    }
}