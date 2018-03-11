//日志管理
const log4js=require('log4js')

log4js.configure({
    appenders: { cheese: { type: 'file', filename: './logs/logInfo.log' } },

    categories: { default: { appenders: ['cheese'], level: 'info' } }
});
levels = {
    'trace': log4js.levels.TRACE,
    'debug': log4js.levels.DEBUG,
    'info': log4js.levels.INFO,
    'warn': log4js.levels.WARN,
    'error': log4js.levels.ERROR,
    'fatal': log4js.levels.FATAL
};

exports.logger = function (name, level) {
    var logger = log4js.getLogger('cheese');
    if (level==undefined || null ==level ){
        level='info'
    }
    logger.level=levels[level]
    return logger;
};

// 配合 express 使用的方法
exports.use = function (app, level) {
    app.use(log4js.connectLogger(log4js.getLogger('logInfo'), {
        level: levels[level] || levels['debug'],
        format: ':method :url :status'
    }));
};





