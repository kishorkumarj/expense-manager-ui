import {
  HomeOutlined,
  BarChartOutlined,
  UserOutlined
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
    icon: <HomeOutlined />,
    url: '/home'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <BarChartOutlined />,
    url: '/dashboard'
  },
  {
    id: 'profile',
    title: 'Profile',
    icon: <UserOutlined />,
    url: '/profile',
  },
]

export default menuList;