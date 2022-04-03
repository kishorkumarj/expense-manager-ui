import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { loginInterface, LoginApi } from '../../utils/apis';

const LoginForm = ({
  switchView,
}:{
  switchView: () => void,
}) => {

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const performLogin = async (formData: loginInterface) => {

    console.log(formData)
    setLoading(true)
    const res: any = await LoginApi(formData);
    setLoading(false)
  }

  return (
    <>
      <div className='login-base-text align-center m-b-50'>Login here!!</div>
      <div className='login-form-container'>
        <Form
          form={form}
          onFinish={performLogin}>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input
              placeholder='Email'
              prefix={<MailOutlined className="login-input-icon" />}/>
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input
              type="password"
              placeholder='Password'
              prefix={<LockOutlined className="login-input-icon" />}/>
          </Form.Item>
      
          <Form.Item className='align-center'>
            <Button
              className='btn-info'
              loading={loading}
              disabled={loading}
              htmlType='submit'>Login</Button>
          </Form.Item>
        </Form>
      </div>

      <div>
        <span
          className='action-link'
          onClick={() => message.warning('Not yet enabled.')}>Forgot Password?</span>
        <span
          className='float-right action-link'
          onClick={switchView}><PlusCircleOutlined /> New Account</span>
      </div>
    </>
  )
}

export default LoginForm;