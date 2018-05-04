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



router.get('/www', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!111'
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
