import React from 'react';
import PrivateRoute from '@/components/PrivateRoute';

const OrgList = React.lazy(() => import('@/views/user/dept'));
const UserList = React.lazy(() => import('@/views/user/user'));
const MenuList = React.lazy(() => import('@/views/user/menu'));
const RoleList = React.lazy(() => import('@/views/user/role'));

const orgUser = [
  {
    path: '/user/dept',
    element: (
      <PrivateRoute>
        <OrgList />
      </PrivateRoute>
    )
  },
  {
    path: '/user/user',
    element: (
      <PrivateRoute>
        <UserList />
      </PrivateRoute>
    )
  },
  {
    path: '/user/menu',
    element: (
      <PrivateRoute>
        <MenuList />
      </PrivateRoute>
    )
  },
  {
    path: '/user/role',
    element: (
      <PrivateRoute>
        <RoleList />
      </PrivateRoute>
    )
  }
];

export default orgUser;
