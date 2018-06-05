/* eslint-disable import/first */
import React, { Component } from 'react';
import {Link} from 'react-router';
import {Button,Layout,Icon} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import SideBar from './components/SideBar/Sidebar';
import HeaderComponent from './components/Header/Header';
import * as util from 'util';
import API from './API/api';

const storage = require('electron-json-storage');
const { host, userInfo } = API;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo: {
        isLogin: false
      }
    }
  }
  handleLogin(){
    this.getUserInfo();
  }
  handleLogout(){
    this.setState({
      userInfo: {
        isLogin: false
      }
    })
  }
  componentDidMount(){
    storage.get('access_token',(err,data)=>{
      if(err){
        return;
      }
      this.getUserInfo(data.token);
    });
  }
  async getUserInfo(token){
    try {
      let res = await fetch(host+userInfo,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              token
          })
      });
      if(res.ok){
          let result = await res.json();
          if(result.code === 0) {
            this.setState({
              userInfo: {
                isLogin: true,
                ...result.data
              }
            })
          }
      }
    }catch(err) {
      console.error(err);
    };
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, { handleLogin: this.handleLogin.bind(this), handleLogout: this.handleLogout.bind(this), userInfo: this.state.userInfo }));
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <HeaderComponent userInfo={this.state.userInfo} />
          </Header>
          <Layout>
            <Sider>
              <SideBar/>
            </Sider>
            <Content>
              <div>
              {childrenWithProps}
              </div>
            </Content>
          </Layout>
          
        </Layout>
      </div>
    );
  }
}

export default App;
