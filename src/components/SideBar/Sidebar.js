import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Style = {
  mainStyle: {
    width: 200,
    height: 400
  },
  iconStyle: {
    fontSize: 30
  }
}

class Sider extends Component {
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={Style.mainStyle}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1"><Link to="/"><Icon type="user" style={Style.iconStyle}/>首页</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/add"><Icon type="plus-circle-o" style={Style.iconStyle}/>添加</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/search"><Icon type="search" style={Style.iconStyle}/>搜索</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/search"><Icon type="star-o" style={Style.iconStyle}/>详情</Link></Menu.Item>
        
      </Menu>
    );
  }
}

export default Sider;