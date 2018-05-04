
const router = require('koa-router')()
var mongoose=require('mongoose');
var db1=require( '../models/db' );
var shuai1 =db1.getModel('lujing');
router.prefix('/')


router.get('/shuai', async ( ctx ) => {
  let st = await shuai1.find();
ctx.response.type = 'application/json';
ctx.body = st;
})

router.get('/', function (ctx, next) {
  ctx.body = 'shuaishuai'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
