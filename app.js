const koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

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

// 引入路由
const users = require('./routes/api/users');

// 数据库
const db = require('./config/keys').mongoURL;

//链接数据库
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Mongodb Connected ...');
  })
  .catch(err => {
    console.log(err);
  });

// 配置路由地址
router.use('/api/users', users);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve started on ${port}`);
});
