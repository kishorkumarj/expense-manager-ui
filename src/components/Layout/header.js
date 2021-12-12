import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, Menu, Input, Badge, Drawer } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  SettingFilled,
  CalendarOutlined,
  LogoutOutlined,
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';

import profileImage from '../../assets/images/user_img.jpg'
import './layout.scss';
import SideMenu from './menu';

const { Header } = Layout;

const PageHeader = () => {

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const onMobileMenuClose = () => {
    setMobileMenuVisible(false);
  }

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

  const siderHeader = (
    <div className="portal-title-container">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        width="30"
        alt="logo"
        height="30"/>
        <div className="portal-title">React Client</div>
        <CloseOutlined
          className="mobile-menu-close-icon"
          onClick={() => setMobileMenuVisible(false)}/>
    </div>
  )

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
            <Avatar src={profileImage}/>
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
                
                <div className="mobile-menu">
                  <Drawer
                    title={siderHeader}
                    placement="left"
                    className="mobile-menu-drawer"
                    visible={mobileMenuVisible}
                    closable={false}
                    onClose={onMobileMenuClose}
                    bodyStyle={{padding: '0px'}}
                    width={250}>
                    <SideMenu />
                  </Drawer>
                  <MenuOutlined
                    onClick={() => setMobileMenuVisible(true)}
                    className="mobile-menu-icon"/>
                </div>
            </div>
        </div>
      </Header>
  )
}

export default PageHeader;