import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined, PlusCircleOutlined } from '@ant-design/icons';

const LoginForm = ({
  switchView,
  doLogin,
  loading
}:{
  switchView: () => void,
  doLogin: (formData: any) => void,
  loading: boolean
}) => {

  const [form] = Form.useForm();

  return (
    <>
      <div className='login-base-text align-center m-b-50'>Login here!!</div>
      <div className='login-form-container'>
        <Form
          form={form}
          onFinish={doLogin}>
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