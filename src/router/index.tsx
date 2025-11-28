import React from 'react';
import { createHashRouter } from 'react-router';
import PrivateRoute from '@/components/PrivateRoute.tsx';

const Home = React.lazy(() => import('@/views/home/Home.tsx'));
const Login = React.lazy(() => import('@/views/login/Login.tsx'));

export const router = createHashRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    )
  },
  { path: '/login', element: <Login /> }
]);
