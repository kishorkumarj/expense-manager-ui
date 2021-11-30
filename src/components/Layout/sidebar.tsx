import React from 'react';
import { Layout } from 'antd';

import SideMenu from './menu'

const { Sider } = Layout;

const SideComponent = () => {
  return (
    <Sider
      collapsible
      collapsed={false}
      theme="light"
      width={250}
      className="sidebar-container">
      <div className="portal-title-container">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          width="30"
          height="30"/>
          <div className="portal-title">React Client</div>
      </div>
      <SideMenu/>
    </Sider>
  )
}

export default SideComponent;