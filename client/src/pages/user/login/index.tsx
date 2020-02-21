// import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Checkbox } from 'antd';
import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { Dispatch, AnyAction } from 'redux';
// import { Link } from 'umi';
import router from 'umi/router';
import { connect } from 'dva';
import { StateType } from '@/models/login';
import { LoginParamsType } from '@/services/login';
import { ConnectState } from '@/models/connect';
import { setAuthority } from '@/utils/authority';
import LoginFrom from './components/Login';
import { LoginDocument } from '../../../graphql/components';

import styles from './style.less';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginFrom;
interface LoginProps {
  dispatch: Dispatch<AnyAction>;
  userLogin: StateType;
  submitting?: boolean;
}

// const LoginMessage: React.FC<{
//   content: string;
// }> = ({ content }) => (
//   <Alert
//     style={{
//       marginBottom: 24,
//     }}
//     message={content}
//     type="error"
//     showIcon
//   />
// );

const Login: React.FC<LoginProps> = props => {
  // const { submitting } = props;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState<string>('account');

  const [logon, { loading }] = useMutation(LoginDocument);

  const handleSubmit = (values: LoginParamsType) => {
    console.log(values);
    logon({
      variables: {
        email: values.userName,
        password: values.password,
      },
    })
      .then(({ data: { login } }: any) => {
        setAuthority('admin', login.token);
        router.push('/');
      })
      .catch(err => {
        console.error(err);
      });
    // const { dispatch } = props;
    // dispatch({
    //   type: 'login/login',
    //   payload: { ...values, type },
    // });
  };
  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="账户密码登录">
          <UserName
            name="userName"
            placeholder="请输入用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
              {
                type: 'email',
                message: '请输入正确的邮箱地址',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
              {
                min: 6,
                message: '密码最少6位字符',
              },
              {
                max: 15,
                message: '密码最大15位字符',
              },
            ]}
          />
        </Tab>
        {/* <Tab key="mobile" tab="手机号登录">
          {status === 'error' && loginType === 'mobile' && !submitting && (
            <LoginMessage content="验证码错误" />
          )}
          <Mobile
            name="mobile"
            placeholder="手机号"
            rules={[
              {
                required: true,
                message: '请输入手机号！',
              },
              {
                pattern: /^1\d{10}$/,
                message: '手机号格式错误！',
              },
            ]}
          />
          <Captcha
            name="captcha"
            placeholder="验证码"
            countDown={120}
            getCaptchaButtonText=""
            getCaptchaSecondText="秒"
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
          />
        </Tab> */}
        <div>
          <Checkbox checked={autoLogin} onChange={e => setAutoLogin(e.target.checked)}>
            自动登录
          </Checkbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
        <Submit loading={loading}>登录</Submit>
        {/* <div className={styles.other}>
          其他登录方式
          <AlipayCircleOutlined className={styles.icon} />
          <TaobaoCircleOutlined className={styles.icon} />
          <WeiboCircleOutlined className={styles.icon} />
          <Link className={styles.register} to="/user/register">
            注册账户
          </Link>
        </div> */}
      </LoginFrom>
    </div>
  );
};

export default connect(({ login, loading }: ConnectState) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
