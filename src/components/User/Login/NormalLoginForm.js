import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import API from '../../../API/api';
import * as util from 'util';
const storage = require('electron-json-storage');

const FormItem = Form.Item;
const { host, userLogin } = API;
class NormalLoginForm extends React.Component {
  constructor(props){
    super(props);
  }
  async handleSubmit(e) {
    e.preventDefault();
    try {
      let values = await util.promisify(this.props.form.validateFields)();
      let res = await fetch(host+userLogin,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
      });
      if(res.ok){
          let result = await res.json();
          if(result.code === 0) {
            await util.promisify(storage.set)('access_token',{
              token: result.data.token
            });
            this.props.handleLogin();
            browserHistory.push('/user');
          }
      }
    }catch(err) {
        console.log('登陆失败');
    };
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={e=>this.handleSubmit(e)} className="login-form" style={{minHeight: '710px'}}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请确保用户名和密码正确' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
          没有账号？ <Link to="/user/register">点我注册</Link>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;