import React from 'react';
import MainContainer from '../../components/MainContainer';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from '@alifd/next';
// import * as GET_USERS from './graphql/list.graphql';

const GET_USERS = gql`
  {
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

export default function UserList() {
  return (
    <MainContainer title="用户列表">
      <Query query={GET_USERS}>
        {({ loading, error, data: { userList } }) => {
          // if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const list = userList && userList.userList;
          return (
            <Table dataSource={list} loading={loading}>
              <Table.Column
                title="头像"
                dataIndex="avatar"
                cell={value => <img src={value} width="60" />}
              />
              <Table.Column title="姓名" dataIndex="name" />
              <Table.Column title="Email" dataIndex="email" />
              <Table.Column title="创建日期" dataIndex="date" />
            </Table>
          );
        }}
      </Query>
    </MainContainer>
  );
}
