// 菜单导航组件

import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuConfig from '../../config/menuConfig';
import { NavLink } from 'react-router-dom';

import './index.less';

const { SubMenu } = Menu;

export default class NavLeft extends Component {

  componentWillMount() {
    let menuTreeNode = this.renderMenu(menuConfig);
    this.setState({ menuTreeNode });
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title} >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (<Menu.Item key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>)
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img alt="logo" src="/assets/logo-ant.svg" />
          <h1>Imooc WBC</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}