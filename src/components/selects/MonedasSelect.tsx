import { useState, useEffect } from "react";
import {
    Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { IMoneda } from "../../interfaces/IMoneda";
import { getMonedasService } from "../../http/service/monedasService";
import { TSelectProps } from "../../types/TSelectProps";

const MonedasSelect = ({ setValue, value }: TSelectProps) => {
    const [monedas, setMonedas] = useState<IMoneda[]>([]);

    const getMonedas = async () => {
        const { data } = await getMonedasService();
        setMonedas(data);
    }

    useEffect(() => {
        getMonedas();
        return () => { setMonedas([]); };
    }, []);

  return (
    <Box component="div" sx={{ width: "100%"}}>
        <FormControl fullWidth style={{ marginTop: "14px" }}>
        <InputLabel id="IdMoneda"> Monedas </InputLabel>
        <Select
            size="medium"
            labelId="IdMoneda"
            id="IdMoneda"
            label="Monedas"
            required
            fullWidth
            value={value?.IdMoneda}
            onChange={(ev: any) => setValue({ ...value, IdMoneda: ev.target.value })}
        >
            {Object.keys(monedas).length === 0 ? (
            <MenuItem value={0}>Cargando...</MenuItem>
            ) : (
            monedas.map((key: any, item: any) => (
                <MenuItem key={key} value={monedas[item].IdMoneda}>
                {monedas[item].Descripcion}
                </MenuItem>
            ))
            )}
        </Select>
        </FormControl>
    </Box>
  );
};

export default MonedasSelect;
