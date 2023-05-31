import { useState } from 'react';
import { Card, message } from 'antd';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './login.scss';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { registerUserApi } from '../../utils/apis';
import * as actionTypes from '../../store/actionTypes';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const loggedIn:boolean = useSelector((state: any) => state.user.loggedIn)
  const dispatch = useDispatch();

  const displayRegister = () => setShowRegister(true);
  const displayLogin = () => setShowRegister(false);

  const doRegister = async (formData: any) => {
    setLoading(true);
    formData.password = formData.confirmpassword
    delete formData.confirmpassword
    const res: any = await registerUserApi(formData);
    if(res.hasError){
      message.error(`Failed to create account. ${res.message}`)
    }else{
      //TODO: set data to state.
      dispatch({
        type: actionTypes.PERFORM_LOGIN,
        data: res.data || {}
      })
    }
    setLoading(false);
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
          <LoginForm switchView={displayRegister}/>
        }
      </Card>
    </div>
  )
}

export default Login;