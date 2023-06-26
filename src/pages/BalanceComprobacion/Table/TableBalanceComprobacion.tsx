import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { DeleteForeverOutlined, RestoreFromTrashOutlined ,EditOutlined } from '@mui/icons-material';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import moment from 'moment';
import { TTableBalanceComprobacionParams } from '../Types/TTableBalanceComprobacionParams';

const TableBalanceComprobacion = (
    {
        columns,
        rows,
        routing,
        rowsPerPage,
        setRowsPerPage,
        page,
        setPage,
    }: TTableBalanceComprobacionParams
) => {

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            {columns?.map((key: any, column: any) => (
                                <TableCell key={key} style={{ fontWeight: "bold", backgroundColor: columns[column].color }}>
                                    {columns[column].name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((key: any, row: any) => (
                            <TableRow key={key}>
                                <TableCell align="left">{rows[row].NroCuenta}</TableCell>
                                <TableCell align="left">{rows[row].DescripcionCuenta}</TableCell>
                                <TableCell align="left">{rows[row].Saldo}</TableCell>
                                <TableCell align="left">
                                    {rows[row].AsientoActivo ? "Activo" : "Inactivo"}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                labelRowsPerPage="Filas por página"
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={() => setPage(page++)}
                onRowsPerPageChange={() => setRowsPerPage(rowsPerPage++)}
            /> */}
            {/* Modal confirmación eliminar */}
            {/* <DialogCustomConfirm
                open={openDelete}
                setOpen={setOpenDelete}
                title={`Desactivar asiento ${categoriesValue.category.name}`}
                content="Seguro que desea desactivar este siento?"
                handleConfirm={handleConfirm}
            /> */}
        </Fragment>
    )
}

export default TableBalanceComprobacion;