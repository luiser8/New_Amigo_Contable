import { Fragment, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { DeleteForeverOutlined, RestoreFromTrashOutlined ,EditOutlined } from '@mui/icons-material';
import { Avatar, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import moment from 'moment';
import TooltipCustom from '../../../components/tooltips/ToolTipCustom';
import { TTableParamsNew } from '../Types/TAsientosContables';

const TableNuevoAsiento = (
    {
        //columns,
        rows,
        setAsientosDetalleArray,
    }: TTableParamsNew
) => {

    const columns = [
        { id: 1, name: 'Cuenta', color: '#e3f2fd', align: 'left' },
        { id: 2, name: 'CentroCosto', color: '#e3f2fd', align: 'left' },
        { id: 3, name: 'Moneda', color: '#e3f2fd', align: 'left' },
        { id: 4, name: 'Descripcion', color: '#e3f2fd', align: 'left' },
        { id: 5, name: 'Debe', color: '#e3f2fd', align: 'left' },
        { id: 6, name: 'Haber', color: '#e3f2fd', align: 'left' },
        { id: 7, name: 'Referencia', color: '#e3f2fd', align: 'left' },
        { id: 8, name: 'FechaAsiento', color: '#e3f2fd', align: 'left' },
        { id: 9, name: 'Opciones', color: '#e3f2fd', align: 'right' },
      ];

      const removeAsientoDetalle = (id: string | undefined) => {
        if (id !== ""){
            setAsientosDetalleArray((x: any[]) => x.filter((_: any, index: number) => index !== Number(id)));
        }
      }

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
                                <TableCell align="left">{rows[row].IdPlanCuenta}</TableCell>
                                <TableCell align="left">{rows[row].IdCentroDeCosto}</TableCell>
                                <TableCell align="left">{rows[row].IdMoneda}</TableCell>
                                <TableCell align="left">{rows[row].Descripcion}</TableCell>
                                <TableCell align="left">{rows[row].Debe}</TableCell>
                                <TableCell align="left">{rows[row].Haber}</TableCell>
                                <TableCell align="left">{rows[row].Referencia}</TableCell>
                                <TableCell align="left">{moment(rows[row].FechaAsientoDetalle).format("DD-MM-YYYY")}</TableCell>
                                <TableCell align="right">
                                    <Grid item xs={20} md={20} lg={20}>
                                    <IconButton color="inherit" onClick={(ev: MouseEvent<HTMLButtonElement>) => removeAsientoDetalle(key)} sx={{ p: 0 }}>
                                        <DeleteForeverOutlined style={{ fontSize: '36px' }} sx={{ color: '#000' }} />
                                    </IconButton>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}

export default TableNuevoAsiento;