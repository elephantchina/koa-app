import koa from 'koa';
import Router from 'koa-router';
import colors from 'colors';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';
import graphqlServer from './apollo';
import connect from './db';
import logger from './log';
import passportFun from './config/passport';
// 引入路由
import users from './routes/userRoute';

// 实例化KOA
const app = new koa();
const router = new Router();

app.use(bodyParser());

//路由
router.get('/', async ctx => {
  ctx.body = {
    msg: 'hello koa graphql!',
  };
});

// 日志
logger(app);

// 数据库
connect();

// passport初始化
app.use(passport.initialize());
app.use(passport.session());

// 回调到config文件中passport.js
passportFun(passport);

// 配置路由地址
router.use('/api/users', users);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

// 配置graphql
graphqlServer.applyMiddleware({ app });
// app.use(graphqlServer.getMiddleware());

const port = process.env.PORT || 5000;



app.listen({ port }, () => {
  console.log(
    `🚀 API ready at http://localhost:${port}${graphqlServer.graphqlPath}`.blue,
  );
});
