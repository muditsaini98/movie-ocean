import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import styles from '../styles/Login.module.css'
import { Button, Checkbox, Form, Input } from 'antd';

function Login() {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className='w-screen h-screen bg-gray-200'>
      <div className='flex justify-center items-center h-full'>
        <Form
          name="normal_login"
          className="login-form flex flex-col shadow-2xl w-1/3 p-10 pb-5 bg-gray-100"
          layout='vertical'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="Email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" className='float-left' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot float-right text-cyan-600" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button w-full bg-cyan-600 mb-3">
              Log in
            </Button>
            Or <a href="" className='text-cyan-600 ml-1'>Sign up</a>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}

export default Login