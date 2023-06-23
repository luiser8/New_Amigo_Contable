import { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { authContext } from '../auth/useContext';
import { TypesContext } from '../types/Types.context';
import Login from '../pages/User/Login2';
import Error from '../components/Error';
import AsientosContables from '../pages/AsientosContables/AsientosContables';
import Home from '../pages/Home/Home';
import AsientosContableScreen from '../pages/AsientosContables/ScreenAsientos/AsientosContableScreen';
import LibroMayor from '../pages/LibroMayor/LibroMayor';
import BalanceComprobacion from '../pages/BalanceComprobacion/BalanceComprobacion';

export default function RoutesCustom() {
    const { getUserId } = useContext(authContext) as TypesContext;
    return useRoutes([
        //Home
        {
            path: '/', element: getUserId() === 0 ? <Login /> : <Home />,
        },
        //Asientos
        {
            path: '/asientos', element: getUserId() === 0 ? <Login /> : <AsientosContables />,
        },
        {
            path: '/asientos/new', element: getUserId() === 0 ? <Login /> : <AsientosContableScreen mode="new" />,
        },
        {
            path: '/asientos/edit:id', element: getUserId() === 0 ? <Login /> : <AsientosContableScreen mode="edit" />,
        },
        // Libro mayor
        {
            path: '/libroMayor', element: getUserId() === 0 ? <Login /> : <LibroMayor />,
        },
        // Balance de comprobación
        {
            path: '/balance', element: getUserId() === 0 ? <Login /> : <BalanceComprobacion />,
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