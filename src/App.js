/* eslint-disable import/first */
import React, { Component } from 'react';
import {Link} from 'react-router';
import {Button,Layout,Icon} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import SideBar from './components/SideBar/Sidebar';
import HeaderComponent from './components/Header/Header';

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
            <HeaderComponent/>
          </Header>
          <Layout>
            <Sider style={{backgroundColor: 'white'}}>
              <SideBar/>
            </Sider>
            <Content style={{minHeight: 1000}}>
              {this.props.children}
            </Content>
          </Layout>
          
        </Layout>
      </div>
    );
  }
}

export default App;
