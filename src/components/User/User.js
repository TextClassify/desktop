import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';
import * as util from 'util';
const storage = require('electron-json-storage');

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: this.props.userInfo
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.userInfo.name !== this.props.userInfo.name){
            this.setState({
                userInfo: nextProps.userInfo
            });
        }
    }
    async handleLogout(){
        try {
          await util.promisify(storage.remove)('access_token');
          this.props.handleLogout();
        } catch(e){
        }
    }
    render(){
        return (
            <div style={{padding: 20,minHeight: '710px'}}>
                <h2>用户中心</h2>
                {
                    !this.state.userInfo.isLogin && (
                        <div>
                            <Button><Link to="/user/login">登陆</Link></Button>
                            <Button><Link to="/user/register">注册</Link></Button>
                        </div>
                    )
                }
                {
                    this.state.userInfo.isLogin && (
                        <div>
                            用户名：{this.state.userInfo.name}
                            <Button onClick={()=>this.handleLogout()}>注销</Button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default User;