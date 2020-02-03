import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuConfig from '../../config/menuConfig';

import './index.less';

const { SubMenu } = Menu;

export default class NavLeft extends Component {

  componentWillMount() {
    let menuTreeNode = this.renderMenu(menuConfig);
    this.setState({menuTreeNode});
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu key={item.key} title={item.title} >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img alt="logo" src="/assets/logo-ant.svg"/>
          <h1>Imooc WBC</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}

        </Menu>

      </div>
    )
  }
}