import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1"><Link to="/">我的收藏</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/add">添加收藏</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/search">搜索收藏</Link></Menu.Item>
        <Menu.Item key="4">其他</Menu.Item>
        
      </Menu>
    );
  }
}

export default Sider;