import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Button,Layout,Icon} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const path = require('path');

/* eslint-disable import/first */

import SideBar from './components/SideBar/Sidebar';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import Search from './components/Search/Search';

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
            <Route exact path="/" component={Home}/>
            <Route path="/add" component={Add}/>
            <Route path="/search" component={Search}/>
          </Content>
          
          <button hidden onClick={()=> this.getFile()}>获取文件</button>
          {this.state.fileContent}
        </Layout>
      </div>
    );
  }
}

export default App;
