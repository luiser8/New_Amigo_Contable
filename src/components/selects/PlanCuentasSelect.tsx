import { useState, useEffect } from "react";
import {
    Autocomplete,
    Box,
  FormControl,
  TextField,
} from "@mui/material";
import { TSelectProps } from "../../types/TSelectProps";
import { IAutocomplete } from "../../interfaces/IAutoComplete";
import { IPlanCuenta } from "../../interfaces/IPlanCuenta";
import { getPlanCuentasService } from "../../http/service/planCuentasService";

const PlanCuentasSelect = ({ setValue, value }: TSelectProps) => {
    const [planCuenta, setPlanCuenta] = useState<IPlanCuenta[]>([]);
    const [autocomplete, setAutocomplete] = useState<IAutocomplete[]>([]);

    const getPlanCuenta = async () => {
        const { data } = await getPlanCuentasService(5, "");
        setPlanCuenta(data);
    }

    useEffect(() => {
        getPlanCuenta();
        return () => { setPlanCuenta([]); };
    }, []);

    useEffect(() => {
        setAutocomplete(planCuenta.map(option => ({ label: `${option.Numero} - ${option.Nombre}`, id: option.IdPlanCuenta })));
    }, [planCuenta]);

  return (
    <Box component="div" sx={{ width: "100%"}}>
        <FormControl fullWidth sx={{ marginTop: "14px" }}>
            <Autocomplete
                disablePortal
                id="IdPlanCuenta"
                options={autocomplete || []}
                isOptionEqualToValue={(option, value) => {
                    return option.id === value.id;
                  }
                }
                value={value?.IdPlanCuenta}
                getOptionLabel={option => option.label ?? option}
                sx={{ width: "100%" }}
                onChange={(_: any, newValue: any | null) => setValue({ ...value, IdPlanCuenta: newValue?.id })}
                renderInput={(params) => <TextField {...params} label="Plan de cuentas" />}
            />
        </FormControl>
    </Box>
  );
};

export default PlanCuentasSelect;
