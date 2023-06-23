import { useState, useEffect, useContext } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import Page from '../../components/layouts/Page';
import { authContext } from '../../auth/useContext';
import { TypesContext } from '../../types/Types.context';
import EmptyResponse from '../../components/alerts/EmptyResponse';
import SnackBarCustom from '../../components/alerts/SnackBarCustom';
import { getBalanceService, getLibroMayorService } from '../../http/service/asientoContableService';
import { IBalanceComprobacion } from './Interfaces/IBalanceComprobacion';
import TableBalanceComprobacion from './Table/TableBalanceComprobacion';

const BalanceComprobacion = () => {
  const { getUserId } = useContext(authContext) as TypesContext;
  const [balanceComprobacion, setBalanceComprobacion] = useState<IBalanceComprobacion[]>([]);

  const columns = [
    { id: 1, name: 'NroCuenta', color: '#e3f2fd', align: 'left' },
    { id: 2, name: 'Cuenta', color: '#e3f2fd', align: 'left' },
    { id: 3, name: 'Saldo', color: '#e3f2fd', align: 'left' },
    { id: 4, name: 'Estado', color: '#e3f2fd', align: 'left' },
  ];

  //Paginación
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const getBalanceComprobacion = async () => {
    const request = {
      FechaDesde: "24/05/2023",
      FechaHasta: "30/07/2023",
      IdPeriodoContable: 19
    }
    const { data } = await getBalanceService(request);
    setBalanceComprobacion(data);
  }

  useEffect(() => {
    getBalanceComprobacion();
    return () => {
      setBalanceComprobacion([]);
    };
  }, []);

  return (
    <Page title="Balance de comprobación">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} mt={-1}>
        <Typography variant="h4" gutterBottom>Balance de comprobación</Typography>
      </Stack>
      {Object.keys(balanceComprobacion).length === 0 ?
        <EmptyResponse title="Balance de comprobación" />
        :
        <TableBalanceComprobacion
          columns={columns}
          rows={balanceComprobacion}
          routing="/balance/"
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
        />
      }
    </Page>
  )
}

export default BalanceComprobacion;