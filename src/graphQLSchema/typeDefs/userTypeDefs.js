import { gql } from 'apollo-server-koa';

// Construct a schema, using GraphQL schema language
const userTypeDefs = gql`
  # 公共出处理
  # interface MutationResponse {
  #   code: String!
  #   success: Boolean!
  #   message: String!
  # }

  # type test
  type test {
    title: String
    name: String
  }

	type User {
		id: ID!
    name: String!
    email: String!
    avatar: String!
	}
  # 用户信息
  type UserListReponse {
    code: String!
    success: Boolean!
    message: String!
    data: [User]
  }

  type Query {
    #  测试hello
    hello: String
    user: [test]
    userList: UserListReponse
  }
`;

export default userTypeDefs;
