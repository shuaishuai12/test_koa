/**
 * Created by Administrator on 2018/5/4 0004.
 */
const router = require('koa-router')();
const index = require('./index');
const users = require('./users');
const test = require('./test');
/*const files = require('./files');*/

router.use('/shuai', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
router.use('/test', test.routes(), test.allowedMethods());
/*router.use('/files', files.routes(), files.allowedMethods());*/

module.exports = router;
