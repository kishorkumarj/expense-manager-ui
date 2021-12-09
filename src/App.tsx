import React from 'react';
import { Layout, Card } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import SideComponent from './components/Layout/sidebar';
import PageHeader from './components/Layout/header';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';

const { Content } = Layout;

interface AppInterface {
  baseUrl: string,
  collapsed: boolean
}

const App = ({
  baseUrl,
  collapsed
}: AppInterface) => {

  return (
    <React.StrictMode>
      <BrowserRouter basename={baseUrl}>
        <Layout style={{minHeight: '100vh'}}>
          <SideComponent />
          <Layout className={collapsed ? 'collapsed-layout' : 'expanded-layout'}>
            <PageHeader />
            <Content className="conent-base-container">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="*" element={<Home />}/>
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const mapStateToProps = (state: any) => {
  return {
    collapsed: state.app.collapseMenu
  }
}

export default connect(mapStateToProps)(App);
