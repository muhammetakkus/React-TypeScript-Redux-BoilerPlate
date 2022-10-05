import { Navigate } from 'react-router-dom';

import AdminLayout from '../components/layouts/AdminLayout'

import Login from '../components/features/Auth/Login'
import Register from '../components/features/Auth/Register'
import Overview from '../components/features/Dashboard/Overview'
import Order from '../components/features/Dashboard/Order';
import WebSiteSetting from '../components/features/Settings/WebSite';
import PosAppSetting from '../components/features/Settings/PosApp';

import CreateRole from '../components/features/AuthSettings/Role/CreateRole';
import ListRoles from '../components/features/AuthSettings/Role/ListRoles';
import CreatePermission from '../components/features/AuthSettings/Permission/CreatePermission';
import ListPermissions from '../components/features/AuthSettings/Permission/ListPermissions';
import CreateUser from '../components/features/AuthSettings/User/CreateUser';
import ListUsers from '../components/features/AuthSettings/User/ListUsers';

const index = (isAuth: boolean) => [
    {
        path: '/login',
        element:  !isAuth ? <Login /> : <Navigate to="/" replace />
    },
    {
        path: '/register',
        element: !isAuth ? <Register /> : <Navigate to="/" replace />
    },
    {
        path: '/',
        exact: true,
        element: <AdminLayout />,
        children: [
            {
                path: '/',
                element: <Overview />
            },
            {
                path: 'order',
                element: <Order />
            },
            
        ]
    },
    {
        path: '/settings',
        exact: true,
        element: <AdminLayout />,
        children: [
            {
                path: 'website',
                element: <WebSiteSetting />
            },
            {
                path: 'posapp',
                element: <PosAppSetting />
            }
        ]
    },
    {
        path: '/auth-settings',
        exact: true,
        element: <AdminLayout />,
        children: [
            {
                path: 'roles',
                element: <ListRoles />
            },
            {
                path: 'create-role',
                element: <CreateRole />
            },
            {
                path: 'permissions',
                element: <ListPermissions />
            },
            {
                path: 'create-permission',
                element: <CreatePermission />
            },
            {
                path: 'users',
                element: <ListUsers />
            },
            {
                path: 'create-user',
                element: <CreateUser />
            },
        ]
    }
]

export default index;