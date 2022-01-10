import React from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home';
import Dashboard from '../Dashboard';
import Portfolio from '../Portfolio';
import Profile from '../Profile';

import SideComponent from '../../components/Layout/sidebar';
import PageHeader from '../../components/Layout/header';
import LoginRequired from '../LoginRequired';

const { Content } = Layout;

const Main = ({
  collapsed,
  loggedIn
}: {
  collapsed: boolean,
  loggedIn: true
}) => {
  return (
    <LoginRequired loggedIn={loggedIn}>
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
    </LoginRequired>
  )
}


const mapStateToProps = (state: any) => {
  return {
    collapsed: state.app.collapseMenu,
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(Main);