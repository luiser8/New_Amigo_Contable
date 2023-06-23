import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { DeleteForeverOutlined, RestoreFromTrashOutlined ,EditOutlined } from '@mui/icons-material';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import moment from 'moment';
import TooltipCustom from '../../../components/tooltips/ToolTipCustom';
import DialogCustomConfirm from '../../../components/dialogs/DialogCustomConfirm';
import { TTableLibroMayorParams } from '../Types/TTableLibroMayorParams';

const TableLibroMayor = (
    {
        columns,
        rows,
        routing,
        rowsPerPage,
        setRowsPerPage,
        page,
        setPage,
    }: TTableLibroMayorParams
) => {

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            {Object.keys(columns).map((key, column) => (
                                <TableCell key={key} align={columns[column].align} style={{ fontWeight: "bold", backgroundColor: columns[column].color }}>
                                    {columns[column].name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(rows).map((key, row) => (
                            <TableRow key={key}>
                                <TableCell align="left">{rows[row].NroComprobante}</TableCell>
                                <TableCell align="left">{rows[row].DescripcionAsiento}</TableCell>
                                <TableCell align="left">{moment(rows[row].FechaAsientoDetalle).format("DD-MM-YYYY")}</TableCell>
                                <TableCell align="left">{rows[row].PeriodoContable}</TableCell>
                                <TableCell align="left">{rows[row].NroCuenta}</TableCell>
                                <TableCell align="left">{rows[row].DescripcionCuenta}</TableCell>
                                <TableCell align="left">{rows[row].TotalDebe}</TableCell>
                                <TableCell align="left">{rows[row].TotalHaber}</TableCell>
                                <TableCell align="left">{rows[row].Saldo}</TableCell>
                                <TableCell align="left">{rows[row].SaldoTotal}</TableCell>
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

export default TableLibroMayor;