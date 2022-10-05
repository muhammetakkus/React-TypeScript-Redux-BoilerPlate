import { Navigate } from 'react-router-dom';

import AdminLayout from '../components/layouts/AdminLayout'

import Login from '../components/features/Auth/Login'
import Register from '../components/features/Auth/Register'
import Overview from '../components/features/Dashboard/Overview'

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
            
        ]
    },
]

export default index;