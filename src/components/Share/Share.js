import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input, Button } from 'antd';

class Share extends Component {
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
    render(){
        return (
            <div style={{padding: 20,minHeight: '710px'}}>
                <h2>知识分享</h2>
                {
                    !this.state.userInfo.isLogin && (
                        <div>
                            登录以查看来自其他用户的分享和分享你的知识！
                            <Button><Link to="/user/login">登陆</Link></Button>
                            <Button><Link to="/user/register">注册</Link></Button>
                        </div>
                    )
                }
                {
                    this.state.userInfo.isLogin && (
                        <div>用户名：{this.state.userInfo.name}</div>
                    )
                }
            </div>
        )
    }
}

export default Share;