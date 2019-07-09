import React, { useState } from 'react';
import { Input, Checkbox, Grid, Message, Icon, Form } from '@alifd/next';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styles from './style.module.scss';

const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      success
      token
    }
  }
`;

const { Row } = Grid;
const Item = Form.Item;

export default function Index() {
  const [value, setValue] = useState({
    account: '',
    password: '',
    checkbox: false,
  });

  const formChange = value => {
    setValue(value);
  };

  const handleSubmit = (values, errors, addTodo) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    console.log('values:', values);
    addTodo({
      variables: { email: values.email, password: values.password },
    }).then(res => {
      console.log(res);
    });
    // Message.success('登录成功');
    // 登录成功后做对应的逻辑处理
  };

  return (
    <div className={`${styles.container}`}>
      <div className={styles.header}>
        <a href="#" className={styles.meta}>
          <img
            className={styles.logo}
            src={require('./images/logo.png')}
            alt="logo"
          />
          <span className={styles.title}>飞冰</span>
        </a>
        <p className={styles.desc}>飞冰让前端开发简单而友好</p>
      </div>
      <div className={styles.formContainer}>
        <h4 className={styles.formTitle}>登 录</h4>
        <Mutation mutation={USER_LOGIN}>
          {(login, { data }) => (
            <Form value={value} onChange={formChange} size="large">
              <Item required requiredMessage="必填">
                <Input
                  name="email"
                  size="large"
                  maxLength={20}
                  placeholder="账号"
                />
              </Item>
              <Item required requiredMessage="必填">
                <Input
                  name="password"
                  size="large"
                  htmlType="password"
                  placeholder="密码"
                />
              </Item>
              {/* <Item >
            <Checkbox name="checkbox" className={styles.checkbox}>记住账号</Checkbox>
          </Item> */}

              <Row className={styles.formItem}>
                <Form.Submit
                  type="primary"
                  onClick={(values, errors) =>
                    handleSubmit(values, errors, login)
                  }
                  className={styles.submitBtn}
                  validate
                >
                  登 录
                </Form.Submit>
              </Row>
            </Form>
          )}
        </Mutation>
      </div>
    </div>
  );
}
