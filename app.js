const koa = require('koa');
// import koa from 'koa';
const Router = require('koa-router');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const passport = require('koa-passport');

// 实例化KOA
const app = new koa();
const router = new Router();

app.use(bodyParser());

//路由
router.get('/', async ctx => {
  ctx.body = {
    msg: 'hello koa interfaces!',
  };
});

// logger
app.use(async (ctx, next) => {
  await next();
	const rt = ctx.response.get('X-Response-Time');
	console.log('<------------------------------------------------------------------------------>');
	console.log(`${ctx.method} ${ctx.url} - ${rt}`);
	console.log(ctx)
	console.log('<------------------------------------------------------------------------------>');
	
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// 引入路由
const users = require('./routes/api/users');

// 数据库
const db = require('./config/keys').mongoURL;

//链接数据库
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Mongodb Connected Success...');
  })
  .catch(err => {
    console.log(err);
  });

// passport初始化
app.use(passport.initialize());
app.use(passport.session());

// 回调到config文件中passport.js
require('./config/passport')(passport);

// 配置路由地址
router.use('/api/users', users);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve started on ${port}`);
});
