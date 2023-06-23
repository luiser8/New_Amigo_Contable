import { useState, useEffect, useContext } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import Page from '../../components/layouts/Page';
import { authContext } from '../../auth/useContext';
import { TypesContext } from '../../types/Types.context';
import EmptyResponse from '../../components/alerts/EmptyResponse';
import SnackBarCustom from '../../components/alerts/SnackBarCustom';
import { getLibroMayorService } from '../../http/service/asientoContableService';
import { ILibroMayor } from './Interfaces/ILibroMayor';
import TableLibroMayor from './Table/TableLibroMayor';

const LibroMayor = () => {
  const { getUserId } = useContext(authContext) as TypesContext;
  const [libroMayor, setLibroMayor] = useState<ILibroMayor[]>([]);

  const columns = [
    { id: 1, name: 'Nro', color: '#e3f2fd', align: 'left' },
    { id: 2, name: 'Asiento', color: '#e3f2fd', align: 'left' },
    { id: 3, name: 'Fecha', color: '#e3f2fd', align: 'left' },
    { id: 4, name: 'PeriodoContable', color: '#e3f2fd', align: 'left' },
    { id: 5, name: 'NroCuenta', color: '#e3f2fd', align: 'left' },
    { id: 6, name: 'Cuenta', color: '#e3f2fd', align: 'left' },
    { id: 7, name: 'TotalDebe', color: '#e3f2fd', align: 'left' },
    { id: 8, name: 'TotalHaber', color: '#e3f2fd', align: 'left' },
    { id: 9, name: 'Saldo', color: '#e3f2fd', align: 'left' },
    { id: 10, name: 'Saldo Total', color: '#e3f2fd', align: 'left' },
    { id: 11, name: 'Estado', color: '#e3f2fd', align: 'left' },
  ];

  //Paginación
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  //Eliminación
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const getLibroMayor = async () => {
    const request = {
      FechaDesde: "24/05/2023",
      FechaHasta: "30/07/2023",
      IdPeriodoContable: 19
    }
    const { data, error } = await getLibroMayorService(request);
    setLibroMayor(data);
  }

  useEffect(() => {
    getLibroMayor();
    return () => {
      setLibroMayor([]);
    };
  }, []);

  return (
    <Page title="Libro mayor">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} mt={-1}>
        <Typography variant="h4" gutterBottom>Libro mayor</Typography>
      </Stack>
      {Object.keys(libroMayor).length === 0 ?
        <EmptyResponse title="Libro mayor" />
        :
        <TableLibroMayor
          columns={columns}
          rows={libroMayor}
          routing="/libroMayor/"
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
        />
      }
    </Page>
  )
}

export default LibroMayor;