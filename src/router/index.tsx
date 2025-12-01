import React from 'react';
import { createHashRouter, Navigate } from 'react-router';
import PrivateRoute from '@/components/PrivateRoute.tsx';

const Layout = React.lazy(() => import('@/views/layout/index.tsx'));
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
      { path: '/home', element: <Home /> }
    ]
  },
  { path: '/login', element: <Login /> }
]);
