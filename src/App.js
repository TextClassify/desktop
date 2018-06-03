/* eslint-disable import/first */
import React, { Component } from 'react';
import {Link} from 'react-router';
import {Button,Layout,Icon} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import SideBar from './components/SideBar/Sidebar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fileContent: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <h1 style={{color: 'white'}}>文本分类助手</h1>
          </Header>
          <Layout>
            <Sider style={{backgroundColor: 'white'}}>
              <SideBar/>
            </Sider>
            <Content>
              {this.props.children}
            </Content>
          </Layout>
          
        </Layout>
      </div>
    );
  }
}

export default App;
