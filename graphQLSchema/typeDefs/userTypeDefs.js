import { gql } from 'apollo-server-koa';

// Construct a schema, using GraphQL schema language
const userTypeDefs = gql`
  # type user
  type test {
    title: String
    name: String
  }

  # 用户信息
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String!
  }

  type Query {
    #  测试hello
    hello: String
    user: [test]
		userList: [User]
  }
`;

export default userTypeDefs;
