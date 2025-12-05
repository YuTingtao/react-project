import { useState } from 'react';
import { useStore } from '@/store';
import { useNavigate } from 'react-router';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import styles from './login.module.scss';
import type { LoginForm } from '@/api/account/types.ts';
import { loginApi } from '@/api/account/index.ts';

export default function Login() {
  const navigate = useNavigate();

  const rules = {
    account: [{ required: true, message: '请输入账号' }],
    password: [{ required: true, message: '请输入密码' }]
  };

  const setToken = useStore((state) => state.setToken);
  const setUserInfo = useStore((state) => state.setUserInfo);

  const [loading, setLoading] = useState(false);

  function onFinish(data: LoginForm) {
    setLoading(true);
    // loginApi(data)
    //   .then((res) => {
    //     if (res.code === 200) {
    //       setToken(res.data.token);
    //       setUserInfo(res.data.userInfo);
    //       navigate('/');
    //     }
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
    setToken('token-123');
    setUserInfo({
      name: '张三',
      avatar: '',
      roles: ['admin']
    });
    navigate('/');
  }

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-box']}>
        <div className={styles['login-title']}>欢迎登录</div>
        <Form name="login" size="large" onFinish={onFinish}>
          <Form.Item name="account" rules={rules.account}>
            <Input prefix={<UserOutlined />} placeholder="账号" />
          </Form.Item>

          <Form.Item name="password" rules={rules.password}>
            <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
