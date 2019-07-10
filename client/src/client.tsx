import ApolloClient from 'apollo-boost';
import IceNotification from '@icedesign/notification';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:5000/graphql',
  headers: {
    Authorization: localStorage.getItem('X-CROSS-TOKEN'),
  },
  onError: errorObj => {
    // console.log(errorObj);
    if (errorObj && errorObj.networkError) {
      IceNotification.error({
        message: '服务器错误',
        description: '请稍后重试！',
      });
    } else if (errorObj && errorObj.graphQLErrors) {
      const msg = errorObj.graphQLErrors[0].extensions.response.body.msg;
      IceNotification.error({
        message: '操作失败',
        description: msg,
      });
    }
  },
});

export default client;
