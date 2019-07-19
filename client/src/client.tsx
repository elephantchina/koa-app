import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import IceNotification from '@icedesign/notification';
const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === 'PRD'
      ? 'https://jasonfan.now.sh/graphql'
      : 'http://127.0.0.1:5000/graphql',
  // credentials: 'include',
});

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: localStorage.getItem('X-CROSS-TOKEN') || null,
    },
  });

  return forward(operation).map(response => {
    return response;
  });
});

const errorLink = onError(errorObj => {
  if (errorObj && errorObj.networkError) {
    IceNotification.error({
      message: '服务器错误',
      description: '请稍后重试！',
    });
  } else if (errorObj && errorObj.graphQLErrors) {
    const status = errorObj.graphQLErrors[0].extensions.response.status;
    const msg = errorObj.graphQLErrors[0].extensions.response.body.msg;
    if (status === 401) {
      IceNotification.error({
        message: '操作失败',
        description: '未登录或者登录失效，请重新登录！',
      });
      localStorage.removeItem('X-CROSS-TOKEN');
      location.href = '/';
    } else {
      IceNotification.error({
        message: '操作失败',
        description: msg,
      });
    }
  }
});

const authLink = middlewareLink.concat(httpLink);

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
};

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'INTERFACE',
          name: 'Document',
          possibleTypes: [{ name: 'MyInterface1' }, { name: 'SomeInterface2' }],
        },
      ],
    },
  },
});

const client = new ApolloClient({
  link: errorLink.concat(authLink),
  cache: new InMemoryCache({ fragmentMatcher }),
  connectToDevTools: true,
  defaultOptions: defaultOptions,
} as any);

export default client;
