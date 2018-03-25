import React, { Component } from 'react';
import {Button,Layout,Steps,Icon} from 'antd';
import  SideBar from './components/Sidebar'
const { Header, Footer, Sider, Content } = Layout;
const Step = Steps.Step;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider>
            <SideBar/>
          </Sider>
          <Content>
            <h1>基于机器学习方法的文本自动分类项目-Desktop</h1>
            <Steps style={{maxWidth: '600px',marginLeft: '100px'}}>
              <Step status="finish" title="登录" icon={<Icon type="user" />} />
              <Step status="finish" title="导入内容" icon={<Icon type="solution" />} />
              <Step status="process" title="自动分类" icon={<Icon type="loading" />} />
              <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
