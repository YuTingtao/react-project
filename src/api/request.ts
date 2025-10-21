import Axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

const instance = Axios.create({
  baseURL: '/',
  timeout: undefined
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.token;
    // Content-Type: application/json、application/x-www-form-urlencoded、multipart/form-data
    config.headers['Content-Type'] = 'application/json';
    if (token) {
      config.headers['token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 相应拦截
instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      if (res.data instanceof Blob || res.data instanceof ArrayBuffer) {
        return res;
      }
      if (res.data.code !== 200) {
        message.error(res.data.msg);
      }
      return res.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  (error) => {
    if (error.config?.signal?.aborted) {
      return;
    }
    if (error.response) {
      switch (error.response.status) {
        case 404:
          message.error('接口地址不存在');
          break;
        default: // 其他错误
          message.error('服务器异常');
      }
    } else {
      if (!navigator.onLine) {
        message.error('网络异常，请检查您的网络');
      }
    }
    return Promise.reject(error);
  }
);

export interface ResData<T> {
  code: number;
  msg: string;
  data: T;
}

function request<T>(config: AxiosRequestConfig) {
  return instance.request<T, ResData<T>>(config);
}

export default request;
