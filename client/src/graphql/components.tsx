import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Upload: any;
};

export type BaseResponse = {
  __typename?: 'BaseResponse';
  data: Scalars['String'];
  msg: Scalars['String'];
  code: Scalars['Int'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type LoginReponse = {
  __typename?: 'LoginReponse';
  token: Scalars['String'];
  success: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<LoginReponse>;
  addUser?: Maybe<BaseResponse>;
  deleteUser?: Maybe<BaseResponse>;
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationAddUserArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  userList?: Maybe<UserListReponse>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  avatar: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
};

export type UserListReponse = {
  __typename?: 'UserListReponse';
  userList?: Maybe<Array<Maybe<User>>>;
};

export type LoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: Maybe<{ __typename?: 'LoginReponse' } & Pick<LoginReponse, 'success' | 'token'>>;
};

export type AddUserMutationVariables = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AddUserMutation = { __typename?: 'Mutation' } & {
  addUser: Maybe<{ __typename?: 'BaseResponse' } & Pick<BaseResponse, 'data' | 'msg' | 'code'>>;
};

export type DeleteUserMutationVariables = {
  email: Scalars['String'];
};

export type DeleteUserMutation = { __typename?: 'Mutation' } & {
  deleteUser: Maybe<{ __typename?: 'BaseResponse' } & Pick<BaseResponse, 'data' | 'msg' | 'code'>>;
};

export type UserQueryVariables = {};

export type UserQuery = { __typename?: 'Query' } & {
  user: Maybe<{ __typename?: 'User' } & Pick<User, '_id' | 'name' | 'email' | 'avatar' | 'date'>>;
};

export type UserListQueryVariables = {};

export type UserListQuery = { __typename?: 'Query' } & {
  userList: Maybe<
    { __typename?: 'UserListReponse' } & {
      userList: Maybe<
        Array<
          Maybe<{ __typename?: 'User' } & Pick<User, '_id' | 'name' | 'email' | 'avatar' | 'date'>>
        >
      >;
    }
  >;
};

export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      token
    }
  }
`;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const AddUserDocument = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      data
      msg
      code
    }
  }
`;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddUserMutation, AddUserMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddUserMutation, AddUserMutationVariables>(
    AddUserDocument,
    baseOptions,
  );
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = ApolloReactCommon.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email) {
      data
      msg
      code
    }
  }
`;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    baseOptions,
  );
}
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const UserDocument = gql`
  query user {
    user {
      _id
      name
      email
      avatar
      date
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>,
) {
  return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
}
export function useUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const UserListDocument = gql`
  query userList {
    userList {
      userList {
        _id
        name
        email
        avatar
        date
      }
    }
  }
`;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<UserListQuery, UserListQueryVariables>,
) {
  return ApolloReactHooks.useQuery<UserListQuery, UserListQueryVariables>(
    UserListDocument,
    baseOptions,
  );
}
export function useUserListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<UserListQuery, UserListQueryVariables>(
    UserListDocument,
    baseOptions,
  );
}
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = ApolloReactCommon.QueryResult<
  UserListQuery,
  UserListQueryVariables
>;
