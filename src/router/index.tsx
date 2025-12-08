import React from 'react';
import { createHashRouter, Navigate } from 'react-router';
import PrivateRoute from '@/components/PrivateRoute.tsx';
import user from './modules/user.tsx';

const Layout = React.lazy(() => import('@/views/layout/Layout.tsx'));
const Login = React.lazy(() => import('@/views/login/Login.tsx'));
const Home = React.lazy(() => import('@/views/home/Home.tsx'));

export const router = createHashRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: '/home', element: <Home /> },
      ...user
    ]
  },
  { path: '/login', element: <Login /> }
]);
