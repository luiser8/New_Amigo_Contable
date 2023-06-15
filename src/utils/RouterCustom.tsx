import { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { authContext } from '../auth/useContext';
import { TypesContext } from '../types/Types.context';
import Login from '../pages/User/Login2';
import Error from '../components/Error';
import Home from '../pages/Home/Home';

export default function RoutesCustom() {
    const { getUserId } = useContext(authContext) as TypesContext;
    return useRoutes([
        //Home
        {
            path: '/', element: getUserId() === 0 ? <Login /> : <Home/>,
        },
        //Error
        {
            path: '/404', element: <Error />,
        },
        {
            path: '*', element: <Navigate to="/404" replace />
        },
    ]);
}