import React from 'react';
import MainContainer from '../../components/MainContainer';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from '@alifd/next';
import moment from 'moment';
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
const redenTime = (value: string) => {
  return moment(value).format(`YYYY-MM-DD HH:MM:ss`);
};

export default function UserList() {
  return (
    <MainContainer title="用户列表">
      <Query query={GET_USERS}>
        {({ loading, error, data: { userList } }: any) => {
          // if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const list = userList && userList.userList;
          return (
            <Table dataSource={list} loading={loading}>
              <Table.Column
                title="头像"
                align="center"
                dataIndex="avatar"
                cell={value => (
                  <img
                    src={value}
                    width="35"
                    style={{ borderRadius: '20px' }}
                  />
                )}
              />
              <Table.Column title="姓名" align="center" dataIndex="name" />
              <Table.Column title="Email" align="center" dataIndex="email" />
              <Table.Column
                title="创建日期"
                align="center"
                dataIndex="date"
                cell={redenTime}
              />
            </Table>
          );
        }}
      </Query>
    </MainContainer>
  );
}
