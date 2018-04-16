/* eslint-disable import/first */
import React, { Component } from 'react';
import {Button,Layout,Steps,Icon} from 'antd';
const Step = Steps.Step;
import {Link} from 'react-router';

class Home extends Component {
    render(){
        return (
            <div>
                <h1>基于机器学习方法的文本自动分类项目-Desktop</h1>
                <Steps style={{maxWidth: '600px',marginLeft: '100px'}}>
                    <Step status="finish" title="登录" icon={<Icon type="user" />} />
                    <Step status="finish" title="导入内容" icon={<Icon type="solution" />} />
                    <Step status="process" title="自动分类" icon={<Icon type="loading" />} />
                    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                </Steps>
                <Link to="/add">跳转到添加</Link>
            </div>
        )
    }
}

export default Home;