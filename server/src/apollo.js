import { ApolloServer, getScope } from 'apollo-server-koa';
import { typeDefs, resolvers } from './graphQL';
import UserAPI from './dataSources/userDataSource';

const initDatasource = () => {
  let datasourceMap = {
    UserAPI: new UserAPI(),
  };
  return datasourceMap;
};

const graphqlServer = new ApolloServer({
  // Schema
  typeDefs,
  // 解析器
  resolvers,
  // 数据源
  dataSources: () => initDatasource(),
  // 上下文对象
  context: ({ ctx }) => ({
    auth: ctx.req.headers['authorization'],
  }),
  // 内省
  // introspection: mode === 'develop' ? true : false,
  // 对错误信息的处理
  formatError: err => {
    return err;
  },
  // 根域缓存
  cacheControl: {
    defaultMaxAge: 60,
  },
  introspection: true,
  playground: true,
  // mock
  /*mocks: true*/
});

export default graphqlServer;
