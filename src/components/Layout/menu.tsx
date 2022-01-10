import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import menuList, { MenuInterface } from './menu-list';

const { SubMenu } = Menu;

const SideMenu = () => {

  const renderMenuItem = (menu: MenuInterface) => {
    return (
      <Menu.Item
        key={menu.id}
        icon={menu.icon}>
        <NavLink to={menu.url}>{menu.title}</NavLink>
      </Menu.Item>
    )
  }

  const renderSubMenu = (menu: MenuInterface) => {
    let subMenuContent = menu.children?.map((item: MenuInterface) => {
      if (item.children){
        return renderSubMenu(item);
      }else{
        return renderMenuItem(item)
      }

    })
    return (
      <SubMenu
        key={menu.id}
        icon={menu.icon}
        title={menu.title}>
        {subMenuContent}
      </SubMenu>
    )
  }

  const content = menuList.map((menu: MenuInterface) => {
    if (menu.children){
      return renderSubMenu(menu)
    }else{
      return renderMenuItem(menu)
    }
  })

  return (
    <Menu
      defaultSelectedKeys={['home']}
      mode="inline">
      {content}
    </Menu>
  )
}

export default SideMenu;