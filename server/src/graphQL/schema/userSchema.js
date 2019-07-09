import { gql } from 'apollo-server-koa';

const UserSchema = gql`

  type User {
    """
    用户ID
    """
    _id: String!
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
  type UserListReponse {
    userList: [User]
  }

	# 用户登录成功信息
	type LoginReponse {
    token: String!
		success: String!
  }
`;

export default UserSchema;
