import React from 'react';
import { Layout, Avatar, Dropdown, Menu, Input, Badge } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  SettingFilled,
  CalendarOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './layout.css';

const { Header } = Layout;

const PageHeader = () => {

  const menu = (
    <Menu>
      <Menu.Item key="0"
        className="user-menu-item"
        icon={<UserOutlined style={{paddingRight: '3px'}}/>}>
        <NavLink to="/profile">Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="1"
        className="user-menu-item"
        icon={<SettingFilled style={{paddingRight: '3px'}}/>}>Settings</Menu.Item>
      <Menu.Item key="2"
        className="user-menu-item"
        icon={<CalendarOutlined style={{paddingRight: '3px'}}/>}>Activities</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3"
        className="user-menu-item"
        icon={<LogoutOutlined style={{paddingRight: '3px'}}/>}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="header-component">
        <div className="header-container">
          <div className="">
          <Dropdown
            overlay={menu}
            trigger="click">
            <div className="header-username" onClick={e => e.preventDefault()}>
              Kishor Jagadeesan
            </div>
          </Dropdown>
              
          </div>
          <div>
            <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I6PTa-ohmQtG7WypVW1ve06IRYYlA3t_Opnwjfmcfs=s32-c-mo"/>
          </div>
          <div className="header-notifications">
            <Badge dot={1} size="small">
              <div><BellOutlined className="header-notification-icon"/></div>
            </Badge>
          </div>
          <div
            style={{
              flexGrow: 1,
              paddingLeft: '10px'
            }}>
              <Input
                placeholder="Search"
                className="header-search-box"
                prefix={<SearchOutlined style={{color: '#cfd5da'}}/>}/>
            </div>
        </div>
      </Header>
  )
}

export default PageHeader;