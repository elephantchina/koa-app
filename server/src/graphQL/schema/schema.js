import { gql } from 'apollo-server-koa';
import { mergeTypes } from 'merge-graphql-schemas';

import UserSchema from './userSchema';

// Construct a schema, using GraphQL schema language
const TypeDefs = gql`
  type Query {
    hello: String
		"""
		用户列表
		"""
    userList: UserListReponse
		"""
		单个用户
		"""
    user: User
  }

  type Mutation {
		"""
		用户登录
		"""
    login(email: String!, password: String!): LoginReponse
		"""
		新增用户
		"""
    addUser(name: String!, email: String!, password: String!): BaseResponse
		"""
		删除用户
		"""
		deleteUser(email: String!): BaseResponse
  }
`;

const Schema = [TypeDefs, UserSchema];

export default mergeTypes(Schema, { all: true });
