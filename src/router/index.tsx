import React from 'react';
import { createHashRouter } from 'react-router';

export const router = createHashRouter([
  { path: '/', Component: React.lazy(() => import('@/views/home/Home.tsx')) },
  { path: '/login', Component: React.lazy(() => import('@/views/login/Login.tsx')) }
]);
