import { gql } from 'apollo-server-koa';

const UserSchema = gql`
  interface MutationResponse {
    """
    状态码 1 成功
    """
    code: String!
    """
    提示语
    """
    msg: String!
  }

  type User {
    """
    用户ID
    """
    id: ID!
    """
    用户名称
    """
    name: String!
    """
    邮箱
    """
    email: String!
    """
    头像
    """
    avatar: String!
  }
  # 用户信息
  type UserListReponse implements MutationResponse {
    code: String!
    msg: String!
    data: [User]
  }
`;

export default UserSchema;
