/**
 * Created by Administrator on 2017/11/2 0002.
 */
var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/180313';
    Schema = mongoose.Schema;
    models = require('./models');

/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('成功啦 ' + DB_URL);
});
for (var m in models) {
    mongoose.model(m, new Schema(models[m]));
}
module.exports = {
    getModel: function (type) {
        return _getModel(type);
    }
};

var _getModel = function (type) {
    return mongoose.model(type);
};

