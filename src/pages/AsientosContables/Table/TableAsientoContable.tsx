import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { DeleteForeverOutlined, RestoreFromTrashOutlined ,EditOutlined } from '@mui/icons-material';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import moment from 'moment';
import TooltipCustom from '../../../components/tooltips/ToolTipCustom';
import DialogCustomConfirm from '../../../components/dialogs/DialogCustomConfirm';
import { TTableParams } from '../Types/TAsientosContables';

const TableAsientoContable = (
    {
        columns,
        rows,
        routing,
        rowsPerPage,
        setRowsPerPage,
        page,
        setPage,
        openDelete,
        setOpenDelete,
        showDeleteAsientos,
        handleConfirm,
        asientosValue,
    }: TTableParams
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
                                {/* <TableCell align="left">{rows[row].PeriodoContable}</TableCell> */}
                                <TableCell align="left">{rows[row].NroPlanCuenta}</TableCell>
                                <TableCell align="left">{rows[row].PlanCuenta}</TableCell>
                                {/* <TableCell align="left">{rows[row].CentroDeCosto}</TableCell> */}
                                <TableCell align="left">{rows[row].Moneda}</TableCell>
                                <TableCell align="left">{rows[row].Descripcion}</TableCell>
                                <TableCell align="left">{rows[row].Debe}</TableCell>
                                <TableCell align="left">{rows[row].Haber}</TableCell>
                                <TableCell align="left">{rows[row].Referencia}</TableCell>
                                <TableCell align="left">{moment(rows[row].FechaAsiento).format("DD-MM-YYYY")}</TableCell>
                                <TableCell align="left">
                                    {rows[row].AsientoActivo ? "Activo" : "Inactivo"}
                                </TableCell>
                                <TableCell align="right">
                                    <Grid item xs={20} md={20} lg={20}>
                                        <NavLink style={{ marginRight: 8 }} to={`${routing}edit/${rows[row].IdAsientoDetalle}`}>
                                            <TooltipCustom title="Editar asiento" placement="bottom">
                                                <EditOutlined style={{ fontSize: '36px' }} sx={{ color: '#000' }} />
                                            </TooltipCustom>
                                        </NavLink>
                                        <NavLink style={{ marginRight: 8 }} to={`#`}
                                            onClick={() => showDeleteAsientos(
                                                {
                                                    open: true,
                                                    category: { IdAsientoDetalle: rows[row].IdAsientoDetalle, Descripcion: rows[row].Descripcion }
                                                }
                                            )}>
                                            <TooltipCustom title={`${rows[row].AsientoActivo ? "Desactivar asiento" : "Activar asiento"}`} placement="bottom">
                                                {rows[row].AsientoActivo ?
                                                    <DeleteForeverOutlined style={{ fontSize: '36px' }} sx={{ color: '#000' }} /> :
                                                    <RestoreFromTrashOutlined style={{ fontSize: '36px' }} sx={{ color: '#000' }} />}
                                            </TooltipCustom>
                                        </NavLink>
                                    </Grid>
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

export default TableAsientoContable;