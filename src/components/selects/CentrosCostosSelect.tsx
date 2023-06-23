import { useState, useEffect } from "react";
import {
    Autocomplete,
    Box,
  FormControl,
  TextField,
} from "@mui/material";
import { TSelectProps } from "../../types/TSelectProps";
import { ICentroDeCosto } from "../../interfaces/ICentroDeCosto";
import { getCentrosCostosService } from "../../http/service/centrosCostosService";
import { IAutocomplete } from "../../interfaces/IAutoComplete";

const CentrosCostosSelect = ({ setValue, value }: TSelectProps) => {
    const [centroCosto, setCentroCosto] = useState<ICentroDeCosto[]>([]);
    const [autocomplete, setAutocomplete] = useState<IAutocomplete[]>([]);

    const getCentroCosto = async () => {
        const { data } = await getCentrosCostosService();
        setCentroCosto(data);
    }

    useEffect(() => {
        getCentroCosto();
        return () => { setCentroCosto([]); };
    }, []);

    useEffect(() => {
        setAutocomplete(centroCosto.map(option => ({ label: option.Descripcion, id: option.IdCentroDeCosto })));
    }, [centroCosto]);

  return (
    <Box component="div" sx={{ width: "100%"}}>
        <FormControl fullWidth style={{ marginTop: "14px" }}>
            <Autocomplete
                disablePortal
                id="IdCentroDeCosto"
                options={autocomplete || []}
                value={value?.IdCentroDeCosto}
                getOptionLabel={option => option.label ?? option}
                sx={{ width: "100%" }}
                onChange={(_: any, newValue: any | null) => setValue({ ...value, IdCentroDeCosto: newValue?.id })}
                renderInput={(params) => <TextField {...params} label="Centros de costos" />}
            />
        </FormControl>
    </Box>
  );
};

export default CentrosCostosSelect;
