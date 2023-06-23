import { useState, useEffect } from "react";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { TSelectProps } from "../../types/TSelectProps";
import { IPeriodoContable } from "../../interfaces/IPeriodoContable";
import { getPeriodosContablesService } from "../../http/service/periodosContablesService";

type TPeriodosProps = {
    Todos: number,
    FechaDesde: string,
    FechaHasta: string,
}

const PeriodosContablesSelect = ({ setValue, value }: TSelectProps, { Todos = 0, FechaDesde = "", FechaHasta = "" }: TPeriodosProps) => {
    const [periodos, setPeriodos] = useState<IPeriodoContable[]>([]);

    const getPeriodos = async () => {
        const { data } = await getPeriodosContablesService(Todos, FechaDesde, FechaHasta);
        setPeriodos(data);
    }

    useEffect(() => {
        getPeriodos();
        return () => { setPeriodos([]); };
    }, []);

    return (
        <Box component="div" sx={{ width: "50%" }}>
            <FormControl fullWidth style={{ marginTop: "14px" }}>
                <InputLabel id="IdPeriodoContable" style={{ marginTop: "-7px" }}>
                    Periodos contables
                </InputLabel>
                <Select
                    size="small"
                    labelId="Periodos"
                    id="IdPeriodoContable"
                    label="Periodos"
                    required
                    value={value?.IdPeriodoContable}
                    onChange={(ev: any) => setValue({ ...value, IdPeriodoContable: ev.target.value })}
                >
                    {Object.keys(periodos).length === 0 ? (
                        <MenuItem value={0}>Cargando...</MenuItem>
                    ) : (
                        periodos.map((key: any, item: any) => (
                            <MenuItem key={key} value={periodos[item].IdPeriodoContable}>
                                {periodos[item].Descripcion}
                            </MenuItem>
                        ))
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};

export default PeriodosContablesSelect;
