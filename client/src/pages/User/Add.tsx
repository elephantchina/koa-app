import React, { Component } from 'react';
import { Form, Input, Field, Message } from '@alifd/next';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import MainContainer from '../../components/MainContainer';

interface Props {
  history: any;
}

const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      data
      msg
      code
    }
  }
`;

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
};

@withRouter
export default class UserAddd extends Component<Props> {
  field = new Field(this);
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (values, errors, field, addUser) => {
    const { history } = this.props;
    if (!errors) {
      console.log('Get form value:', values);
      addUser({
        variables: {
          name: values.name,
          email: values.email,
          password: values.passwd,
        },
      }).then(res => {
        Message.success('新增用户成功！');
        history.push('/people/list');
      });
    }
  };

  checkPass(rule, value, callback) {
    const { validate } = this.field;
    if (value) {
      validate(['rePasswd']);
    }
    callback();
  }

  checkPass2(rule, value, callback) {
    const { getValue } = this.field;
    if (value && value != getValue('passwd')) {
      return callback('两次密码不一致!');
    } else {
      return callback();
    }
  }

  render() {
    return (
      <MainContainer title="新增用户">
        <Mutation mutation={ADD_USER}>
          {addUser => (
            <Form
              style={{ width: '60%' }}
              {...formItemLayout}
              field={this.field}
            >
              <FormItem
                label="昵称:"
                required
                requiredMessage="请输入昵称"
                hasFeedback
                minLength={2}
                maxLength={40}
                minmaxLengthMessage="昵称长度为2-20个字符"
              >
                <Input name="name" placeholder="请输入昵称" />
              </FormItem>
              <FormItem
                label="邮 箱:"
                required
                requiredMessage="请输入邮箱"
                hasFeedback
                format="email"
                formatMessage="请输入正确的邮箱格式"
              >
                <Input name="email" placeholder="请输入邮箱" />
              </FormItem>
              <FormItem
                label="密 码:"
                required
                hasFeedback
                minLength={6}
                maxLength={18}
                minmaxLengthMessage="密码长度为6-20个字符"
                requiredMessage="请输入密码"
                pattern={/^[a-z0-9]+$/i}
                patternMessage="只能由数字和英文组成"
                validator={this.checkPass.bind(this)}
              >
                <Input
                  htmlType="password"
                  name="passwd"
                  placeholder="请输入密码"
                />
              </FormItem>
              <FormItem
                label="确认密码:"
                required
                hasFeedback
                requiredMessage="请确认密码"
                validator={this.checkPass2.bind(this)}
              >
                <Input
                  htmlType="password"
                  name="rePasswd"
                  placeholder="请确认密码"
                />
              </FormItem>
              <FormItem label=" ">
                <Form.Submit
                  onClick={(value, errors, field) =>
                    this.handleSubmit(value, errors, field, addUser)
                  }
                  validate
                  type="primary"
                >
                  确 定
                </Form.Submit>
              </FormItem>
            </Form>
          )}
        </Mutation>
      </MainContainer>
    );
  }
}
