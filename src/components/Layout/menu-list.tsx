import {
  HomeFilled,
  AreaChartOutlined,
  UserOutlined,
  AppstoreOutlined
} from '@ant-design/icons'

export interface MenuInterface {
  id: string,
  title: string,
  icon: any,
  url: string,
  children?: Array<MenuInterface>
}

const menuList = [
  {
    id: 'home',
    title: 'Home',
    icon: <HomeFilled style={{color: '#5e72e4 '}}/>,
    url: '/home'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <AreaChartOutlined style={{color: '#11cdef'}}/>,
    url: '/dashboard'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    icon: <AppstoreOutlined style={{color: '#fb6340'}}/>,
    url: '/portfolio',
  },
  {
    id: 'profile',
    title: 'Profile',
    icon: <UserOutlined style={{color: '#2dce89'}}/>,
    url: '/profile',
  },
]

export default menuList;