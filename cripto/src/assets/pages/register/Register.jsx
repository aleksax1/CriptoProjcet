import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const Register = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' ,backgroundColor:"#d3e0f2"}}>
      <Form
        name="register"
        onFinish={onFinish}
        style={{ maxWidth: 400, width: '100%', padding: '30px', border: '1px solid #ddd', borderRadius: '10px' ,backgroundColor:"#fff"}}
        initialValues={{ remember: true }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your Email!' },
            { type: 'email', message: 'Please enter a valid Email!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your Password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item
          name="agree"
          valuePropName="checked"
          rules={[
            { validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('You must agree to the terms!')) },
          ]}
        >
          <Checkbox>
            I agree to the <a href="#">Terms and Conditions</a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
