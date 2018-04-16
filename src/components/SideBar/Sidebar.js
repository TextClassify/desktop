import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Style = {
  mainStyle: {
    width: 200
  },
  iconStyle: {
    fontSize: 30
  }
}

class Sider extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={Style.mainStyle}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1"><Link to="/"><Icon type="user" style={Style.iconStyle}/></Link></Menu.Item>
        <Menu.Item key="2"><Link to="/add"><Icon type="plus-circle-o" style={Style.iconStyle}/></Link></Menu.Item>
        <Menu.Item key="3"><Link to="/search"><Icon type="search" style={Style.iconStyle}/></Link></Menu.Item>
        <Menu.Item key="4"><Icon type="star-o" style={Style.iconStyle}/></Menu.Item>
        
      </Menu>
    );
  }
}

export default Sider;