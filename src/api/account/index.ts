import request from '../request.ts';
import type { LoginForm, LoginRes } from '@/types/account';

// 登录
export function loginApi(data: LoginForm) {
  return request<LoginRes>({
    url: '/api/account/login',
    method: 'post',
    data
  });
}
