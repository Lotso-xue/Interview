import React from 'react'
import './login.css'
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';

export default function Login() {

    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post('...',{
            params: {
              emails: values.username,
              Password: values.password
            }
          })
        .then(response => {
          // 处理响应数据
          console.log(response.data);
        })
        .catch(error => {
          // 处理错误
          console.error(error);
        });
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


  return (
    <div className='containerView'>
      <div className='left'>
        <div className='img'>
            <img  src={require('../../assets/imgs/wemeet image_20230913175748375.png')} alt="" />
        </div>
        <div className='logo'>
            <div>
                <img src={require('../../assets/imgs/1.png')} alt="" />
            </div>
            <div>
                <img src={require('../../assets/imgs/1.png')} alt="" />
            </div>
        </div>
      </div>
      <div className='right'>
        <div className='title'>
            Login
        </div>
        <div className='loginForm'>
            <Form
                size='large'
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                <Input.Password />
                </Form.Item>

                <div style={{display:'flex', justifyContent:'space-around'}}> 
                    <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 6,
                        span: 12,
                    }}
                    >
                    <Checkbox style={{width:'150px'}}>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <div style={{width:'150px',marginRight:'-100px'}}>Forgot password?</div>
                    </Form.Item>
                </div>

                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button style={{backgroundColor:'green',width:'300px',height:'50px',color:'white'}} htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <div>
                    <span>Do not have an account? </span>
                    <span style={{color:'green'}}>Register here</span>
                </div>
                </Form.Item>
            </Form>
        </div>
      </div>
    </div>
  )
}
