import { useState, useEffect, useContext } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import Page from '../../components/layouts/Page';
import { authContext } from '../../auth/useContext';
import { TypesContext } from '../../types/Types.context';
import EmptyResponse from '../../components/alerts/EmptyResponse';
import SnackBarCustom from '../../components/alerts/SnackBarCustom';
import TableAsientoContable from './Table/TableAsientoContable';
import { getAsientoContableService } from '../../http/service/asientoContableService';
import { IAsientoContable } from './Interfaces/IAsientoContable';

const AsientosContables = () => {
  const { getUserId } = useContext(authContext) as TypesContext;
  const [asientos, setAsientos] = useState<IAsientoContable[]>([]);

  const columns = [
    { id: 1, name: 'Nro', color: '#e3f2fd', align: 'left' },
    // { id: 2, name: 'Contable', color: '#e3f2fd', align: 'left' },
    { id: 3, name: 'IdCuenta', color: '#e3f2fd', align: 'left' },
    { id: 4, name: 'Cuenta', color: '#e3f2fd', align: 'left' },
    // { id: 5, name: 'CentroCosto', color: '#e3f2fd', align: 'left' },
    { id: 6, name: 'Moneda', color: '#e3f2fd', align: 'left' },
    { id: 7, name: 'Descripción', color: '#e3f2fd', align: 'left' },
    { id: 8, name: 'Debe', color: '#e3f2fd', align: 'left' },
    { id: 9, name: 'Haber', color: '#e3f2fd', align: 'left' },
    { id: 10, name: 'Referencia', color: '#e3f2fd', align: 'left' },
    { id: 11, name: 'Fecha', color: '#e3f2fd', align: 'left' },
    { id: 12, name: 'Estado', color: '#e3f2fd', align: 'left' },
    { id: 13, name: 'Opciones', color: '#e3f2fd', align: 'right' },
  ];

  //Paginación
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  //Eliminación
  const [asientosValue, setAsientosValue] = useState({ open: false, asientos: { IdAsientoDetalle: 0, Descripcion: "" } });
  const [openDelete, setOpenDelete] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const showDeleteAsientos = (obj: any) => {
    if (obj.open) {
      setOpenDelete(obj.open);
      setAsientosValue({ ...asientosValue, ...obj });
    }
  }

  const handleConfirm = async (open: any) => {
    if (open) {
      await confirmDeleteAsientos(asientosValue.asientos.IdAsientoDetalle);
    } else {
      setOpenDelete(open);
    }
  }

  const showSnackBar = () => {
    return (
      <SnackBarCustom
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        vertical="top"
        horizontal="right"
        severityOption={"success"}
        msj={"Categoría eliminada!"}
      />
    )
  }

  const confirmDeleteAsientos = async (id: number) => {

  }

  const getAsientosContables = async () => {
    const request = {
      FechaDesde: "24/05/2023",
      FechaHasta: "30/07/2023",
      IdPeriodoContable: 19
    }
    const { data, error } = await getAsientoContableService(request);
    setAsientos(data);
  }

  useEffect(() => {
    getAsientosContables();
    return () => {
      setAsientos([]);
    };
  }, []);

  return (
    <Page title="Asientos contables">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} mt={-1}>
        <Typography variant="h4" gutterBottom>Asientos contables</Typography>
        <Button sx={{ bgcolor: 'primary.header' }} variant="contained" component={NavLink} to="/asientos/new">
          Nuevo asiento
        </Button>
      </Stack>
      {Object.keys(asientos).length === 0 ?
        <EmptyResponse title="Asientos contables" />
        :
        <TableAsientoContable
          columns={columns}
          rows={asientos}
          routing="/asientos/"
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
          showDeleteAsientos={showDeleteAsientos}
          handleConfirm={handleConfirm}
          asientosValue={asientosValue}
        />
      }
    </Page>
  )
}

export default AsientosContables;