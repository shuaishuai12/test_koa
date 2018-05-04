const router = require('koa-router')()
var mongoose=require('mongoose');
var db1=require( '../models/db' );
var shuai1 =db1.getModel('lujing');

router.get('/getList', async ( ctx ) => {
  let st = await shuai1.find();
ctx.response.type = 'application/json';
ctx.body = st;
})



router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
