import React from 'react';
import { Layout, Card } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import SideComponent from './components/Layout/sidebar';
import PageHeader from './components/Layout/header';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';

const { Content } = Layout;

interface AppInterface {
  baseUrl: string
}

const App = ({ baseUrl }: AppInterface) => {

  return (
    <BrowserRouter basename={baseUrl}>
      <Layout style={{minHeight: '100vh'}}>
        <SideComponent />
        <Layout style={{marginLeft: '250px', marginRight: '1px'}}>
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
  )
}

export default App;
