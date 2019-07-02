import { ApolloServer } from 'apollo-server-koa';
import { typeDefs, resolvers } from '../graphQLSchema';

const graphqlServer = new ApolloServer({ typeDefs, resolvers, mocks: true });

export default graphqlServer;
