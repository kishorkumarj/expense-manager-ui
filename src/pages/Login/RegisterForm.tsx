import React from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';

const RegisterForm = ({
  switchView,
  doRegister,
  loading
}:{
  switchView: () => void,
  doRegister: (formData: any) => void,
  loading: boolean
}) => {

  const [form] = useForm();

  return (
    <>
      <div className='login-base-text align-center m-b-50'>Register your account!!</div>
      
      <div className='form-container'>
        <Form
          form={form}
          onFinish={doRegister}>

          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input
              placeholder='Email'
              prefix={<MailOutlined className="login-input-icon" />}/>
          </Form.Item>

          <Form.Item
            name='firstName'
            rules={[{ required: true, message: 'Please input your first name!' }]}>
            <Input placeholder='First Name'
              prefix={<UserOutlined className="login-input-icon" />}/>
          </Form.Item>

          <Form.Item
            name='lastName'
            rules={[{ required: true, message: 'Please input your Last name!' }]}>
            <Input
              placeholder='Last Name'
              prefix={<UserOutlined className="login-input-icon" />}/>
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input
              type="password"
              placeholder='Password'
              prefix={<LockOutlined className="login-input-icon" />}/>
          </Form.Item>

          <Form.Item
            name='confirmpassword'
            rules={[{ required: true, message: 'Please confirm your password!' }]}>
            <Input
              type="password"
              placeholder='Confirm Password'
              prefix={<LockOutlined className="login-input-icon" />}/>
          </Form.Item>
          
          <Form.Item className='align-center'>
            <Button
              className='btn-success'
              loading={loading}
              //disabled={loading}
              htmlType='submit'>Register</Button>
          </Form.Item>
        </Form>
      </div>

      <div>
        <span
          className='float-right action-link'
          onClick={switchView}><ArrowLeftOutlined /> Back to Login</span>
      </div>
    </>
  )
}

export default RegisterForm;