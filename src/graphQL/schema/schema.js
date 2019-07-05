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
`;

const Schema = [TypeDefs, UserSchema];

export default mergeTypes(Schema, { all: true });
