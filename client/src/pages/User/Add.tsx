import React, { Component } from 'react';
import { Form, Input, Checkbox } from '@alifd/next';
import MainContainer from '../../components/MainContainer';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
};

export default class UserAddd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = values => {
    console.log('Get form value:', values);
  };

  render() {
    return (
      <MainContainer title="新增用户">
        <Form style={{ width: '60%' }} {...formItemLayout}>
          <FormItem label="邮 箱:">
            <Input name="basePass" placeholder="请输入邮箱" />
          </FormItem>
          <FormItem label="密 码:">
            <Input
              htmlType="password"
              name="basePass"
              placeholder="请输入密码"
            />
          </FormItem>
          <FormItem label="确认密码:">
            <Input
              htmlType="password"
              name="conrPass"
              placeholder="请确认密码"
            />
          </FormItem>
          <FormItem label=" ">
            <Form.Submit onClick={this.handleSubmit} type="primary">确 定</Form.Submit>
          </FormItem>
        </Form>
      </MainContainer>
    );
  }
}
