import React, { Component } from 'react';
import MainContainer from '../../components/MainContainer';

export default class UserAddd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <MainContainer title="新增用户">新增用户</MainContainer>;
  }
}
