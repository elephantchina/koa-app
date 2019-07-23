import React from 'react';
import MainContainer from '../../components/MainContainer';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import { Table, Loading, Message } from '@alifd/next';
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

const DELETE_USER = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email) {
      data
      msg
      code
    }
  }
`;

export default function UserList() {
  const handleDelete = (email: string, deleteUser: any, refetch: any) => {
    deleteUser({
      variables: {
        email,
      },
    }).then(res => {
      Message.success('删除用户成功！');
      refetch();
    });
  };

  const redenTime = (value: string) => {
    return moment(value).format(`YYYY-MM-DD HH:MM:ss`);
  };

  const renderStr = (value, index, record, refetch) => {
    return (
      <Mutation mutation={DELETE_USER}>
        {deleteUser => (
          <a
            href="javascript:;"
            onClick={() => handleDelete(record.email, deleteUser, refetch)}
          >
            删除
          </a>
        )}
      </Mutation>
    );
  };
  return (
    <MainContainer title="用户列表">
      <Query query={GET_USERS}>
        {({ loading, error, data: { userList }, refetch }: any) => {
          // if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const list = userList && userList.userList;
          return (
            <Table
              dataSource={list}
              loading={loading}
              loadingComponent={props => (
                <Loading
                  size="medium"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            >
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
              <Table.Column
                title="操作"
                align="center"
                cell={(value: any, index: any, record: any) =>
                  renderStr(value, index, record, refetch)
                }
              />
            </Table>
          );
        }}
      </Query>
    </MainContainer>
  );
}
