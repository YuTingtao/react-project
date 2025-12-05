import React from 'react';
import PrivateRoute from '@/components/PrivateRoute';

const OrgList = React.lazy(() => import('@/views/orgUser/org/OrgList.tsx'));
const RoleList = React.lazy(() => import('@/views/orgUser/role/RoleList.tsx'));
const UserList = React.lazy(() => import('@/views/orgUser/user/UserList.tsx'));

const orgUser = [
  {
    path: '/org-user/org',
    element: (
      <PrivateRoute>
        <OrgList />
      </PrivateRoute>
    )
  },
  {
    path: '/org-user/user',
    element: (
      <PrivateRoute>
        <UserList />
      </PrivateRoute>
    )
  },
  {
    path: '/org-user/role',
    element: (
      <PrivateRoute>
        <RoleList />
      </PrivateRoute>
    )
  }
];

export default orgUser;
