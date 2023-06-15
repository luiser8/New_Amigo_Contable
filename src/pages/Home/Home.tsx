import { useState, useEffect, useContext } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import Page from '../../components/layouts/Page';
import { authContext } from '../../auth/useContext';
import { TypesContext } from '../../types/Types.context';

const Home = () => {
  const { getUserId } = useContext(authContext) as TypesContext;

  //Paginación
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  //Eliminación
  const [productValue, setProductValue] = useState({ open: false, product: { id: "", name: "" } });
  const [openDelete, setOpenDelete] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  return (
    <Page title="Asientos contables">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} mt={-1}>
        <Typography variant="h4" gutterBottom>Asientos contables</Typography>
        <Button sx={{ bgcolor: 'primary.header' }} variant="contained" component={NavLink} to="/product/new">
          Nuevo
        </Button>
      </Stack>
    </Page>
  )
}

export default Home;