/* eslint-disable import/first */
import React, { Component } from 'react';
import {Link} from 'react-router';
import {Button,Layout,Icon} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import SideBar from './components/SideBar/Sidebar';
const path = require('path');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fileContent: ''
    }
  }
  getFile() {
    let dir = path.resolve(__dirname,'./test.txt');
    this.setState({
      fileContent: dir
    })
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider>
            <SideBar/>
          </Sider>

          <Content>
            {this.props.children}
          </Content>
          
          <button hidden onClick={()=> this.getFile()}>获取文件</button>
          {this.state.fileContent}
        </Layout>
      </div>
    );
  }
}

export default App;
