import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './login.scss';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface LoginInterface {
  loggedIn: boolean
}

const Login = ({ loggedIn }: LoginInterface) => {
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const displayRegister = () => setShowRegister(true);
  const displayLogin = () => setShowRegister(false);

  const doLogin = async (formData: any) => {
    setLoading(true)
    console.log('login data::: ', formData)
  }

  const doRegister = async (formData: any) => {
    console.log('register user:: ', formData);
  }

  if(loggedIn){
    return <Navigate to="/home"/>
  }

  return (
    <div
      style={{
        height: '100vh',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <Card className='login-container'>
        <div className='welcome-header-container'>
          <div className='welcome-header-text'>Welcome!</div>
        </div>

        { showRegister ?
          <RegisterForm
            switchView={displayLogin}
            doRegister={doRegister}
            loading={loading}/>
        : 
          <LoginForm
            switchView={displayRegister}
            doLogin={doLogin}
            loading={loading}/> 
        }
      </Card>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(Login);