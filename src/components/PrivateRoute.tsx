import { Navigate } from 'react-router';
import { useStore } from '@/store';
import type { JSX } from 'react';

// 路由拦截
export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const token = useStore((state) => state.token);
  return token ? children : <Navigate to="/login" replace />;
}
