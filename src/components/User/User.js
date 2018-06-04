import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }
    render(){
        return (
            <div style={{padding: 20}}>
                <h2>用户中心</h2>
                {
                    !this.state.user && (
                        <div>
                            <Button><Link to="/user/login">登陆</Link></Button>
                            <Button><Link to="/user/register">注册</Link></Button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default User;