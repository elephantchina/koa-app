import request from '@/utils/request';
import { TableListParams, TableListItem } from './data';
import { UserListDocument } from '../../../graphql/components';

export async function queryRule(client: any, params?: TableListParams) {
  const {
    data: { userList },
  } = await client.query({
    query: UserListDocument,
    fetchPolicy: 'no-cache',
  });
  return {
    list: userList,
    pagination: {
      total: userList.length,
    },
  };
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
