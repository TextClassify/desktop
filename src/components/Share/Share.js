import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input, Button } from 'antd';

class Share extends Component {
    render(){
        return (
            <div style={{padding: 20}}>
                <h2>知识分享</h2>
                登录以查看来自其他用户的分享和分享你的知识！
                <Button><Link to="/user/login">登陆</Link></Button>
                <Button><Link to="/user/register">注册</Link></Button>
            </div>
        )
    }
}

export default Share;