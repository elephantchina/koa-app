import { gql } from 'apollo-server-koa';
import { mergeTypes } from 'merge-graphql-schemas';

import UserSchema from './userSchema';

// Construct a schema, using GraphQL schema language
const TypeDefs = gql`
  type Query {
    #  测试hello
    hello: String
    userList: UserListReponse
  }

  type Mutation {
    login(email: String!, password: String!): LoginReponse
    addUser(name: String!, email: String!, password: String!): BaseResponse
  }
`;

const Schema = [TypeDefs, UserSchema];

export default mergeTypes(Schema, { all: true });
