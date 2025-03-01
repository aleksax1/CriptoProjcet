import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
0
function Login() {
  const navigate = useNavigate()
  return (
    <div className="login-container">
      <Form
        name="login"
        initialValues={{ remember: true }}
        className="login-form"
      >
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login GIT </h2>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <a onClick={()=>navigate("/reg")}>Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
