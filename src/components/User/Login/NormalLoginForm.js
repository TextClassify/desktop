import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'whatwg-fetch'
import { Link } from 'react-router';
require('./login.css');
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          //post提交后台验证表单,模拟地址：https://easy-mock.com/mock/5aef1f11fa30186ca1e9973f/desktop/user/login
          fetch('http://120.24.66.93:8088/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userName: values.userName,
              password: values.password,
            })
          }).then(function(response) {
                return response.json()
              }).then(function(json) {
                if(json.code == 0){
                    console.log('parsed json', json)
                    alert(json.data+"登陆成功")
                    window.location.href="javascript:history.go(-1)";//登陆成功返回到上一页
                }else{
                    console.log('parsed json', json)
                    alert("登陆失败,服务端返回:"+json.msg)
                }
              }).catch(function(ex) {
                console.log('parsing failed', ex)
                alert("登陆失败")
              })
          // fetch get 请求方法示例
          // fetch('https://easy-mock.com/mock/5aef1f11fa30186ca1e9973f/desktop/user/login')
          //   .then(function(response) {
          //     return response.json()
          //   }).then(function(json) {
          //     console.log('parsed json', json)
          //   }).catch(function(ex) {
          //     console.log('parsing failed', ex)
          //   })
        }
      });
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form" style={{padding: 20, textAlign: 'center'}}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/RegisterForm">register now!</a>
          </FormItem>
        </Form>
      );
    }
  }
export default Form.create()(NormalLoginForm);