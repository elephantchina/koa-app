import { ApolloServer, getScope } from 'apollo-server-koa';
import { typeDefs, resolvers } from './graphQLSchema';

const graphqlServer = new ApolloServer({
  typeDefs,
	resolvers,
	// 上下文
  context: ({ req }) => ({
    authScope: req,
	}),
	// 根域缓存
  cacheControl: {
    defaultMaxAge: 60,
	},
	// mock
  /*mocks: true*/
});

export default graphqlServer;
