import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
// import { getAuthToken, signOut } from '@/utils/auth';
import router from 'umi/router';
import { message as Msg } from 'antd';

const authLink = setContext(async (_, { headers }) => {
  // const token = await getAuthToken();
  const token = '';
  const authorizationHeader = token
    ? { authorization: `Bearer ${token}` }
    : { authorization: `Bearer 3075159c-aeb0-49c5-bac2-dc01ef07e6a5` };

  return {
    headers: {
      ...headers,
      ...authorizationHeader,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ extensions, message, locations, path }) => {
      const status = extensions && extensions.response.status;
      const errMsg = extensions && extensions.response.body.msg;
      console.info(
        `[GraphQL error]: Status: ${status}, Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
      switch (status) {
        case 403:
          Msg.error('登录失效，请重新登录');
          // signOut();
          router.push('/');
          break;
        case 500:
          Msg.error(errMsg || '服务端错误，请稍微重试');
          // signOut();
          router.push('/');
          break;

        default:
          Msg.error(errMsg || '服务端错误，请稍微重试');
          break;
      }
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const extraLinks = [errorLink.concat(authLink)];

export const cacheOptions = {};

export const httpLinkOptions = {};

export const stateLinkOptions = {};

export const clientOptions = {};

export const providerOptions = {};

export const makeCache = undefined; // : ({ cacheOptions }) => Cache
export const makeHttpLink = undefined; // : ({ clientStateLink, remoteLink, httpLinkOptions }) => ApolloLink
export const makeClientStateLink = undefined; // : ({ resolvers, defaults, cache, typeDefs, stateLinkOptions }) => ApolloLink
export const makeLink = undefined; // : ({ clientStateLink, remoteLink, extraLinks }) => ApolloLink
export const makeClient = undefined; // : ({ link, cache, clientOptions }) => ApolloClient
export const makeProvider = undefined; // : ({ client, providerOptions }) => ReactElement (eg: ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider)
