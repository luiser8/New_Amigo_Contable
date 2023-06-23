import { TAsientoDetalleForm, TAsientoForm } from "../Types/TAsientosContables";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import MonedasSelect from "../../../components/selects/MonedasSelect";
import CentrosCostosSelect from "../../../components/selects/CentrosCostosSelect";
import PlanCuentasSelect from "../../../components/selects/PlanCuentasSelect";
import { IAsientoContableDetalle } from "../Interfaces/IAsientoContable";
import moment from "moment";

const AsientoContableDetalleForm = ({
  mode,
  //isValidPayload,
  asientosDetalle,
  setAsientosDetalle,
  submit,
  asientosDetalleArray,
  setAsientosDetalleArray,
}: TAsientoDetalleForm) => {
  const initialDataAsientosDetalle: IAsientoContableDetalle = {
    IdPlanCuenta: 0,
    IdCentroDeCosto: 0,
    IdMoneda: 0,
    Descripcion: "",
    Debe: 0,
    Haber: 0,
    Referencia: "",
    FechaAsientoDetalle: new Date(),
  };

  const isValidPayload = (): boolean => {
    return (
      asientosDetalle?.IdPlanCuenta === undefined ||
      asientosDetalle?.IdMoneda === undefined ||
      asientosDetalle?.Debe === undefined ||
      asientosDetalle?.Haber === undefined ||
      asientosDetalle?.Descripcion ===  undefined ||
      asientosDetalle?.Referencia ===  undefined ||
      asientosDetalle?.FechaAsientoDetalle === null
    );
  };

  const add = () => {
    setAsientosDetalleArray([...asientosDetalleArray, asientosDetalle]);
    //setAsientosDetalle(initialDataAsientosDetalle);
  };

  return (
    <Grid component="div" container>
      <Grid item xs={12} component="form" noValidate>
        <Box component="div" sx={{ width: "100%", pl: 1, pb: 1, pt: 1 }}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Fecha del asiento item"
              sx={{ width: "100%"}}
              value={asientosDetalle?.FechaAsientoDetalle}
              disablePast
              onChange={(ev) =>
                setAsientosDetalle({
                  ...asientosDetalle,
                  FechaAsientoDetalle: ev,
                })
              }
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  margin="normal"
                  type="date"
                  fullWidth
                  id="FechaAsientoDetalle"
                  name="FechaAsientoDetalle"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
        <Box component="div" sx={{ width: "100%", pl: 1, pb: 1 }}>
          <MonedasSelect
            setValue={setAsientosDetalle}
            value={asientosDetalle}
          />
        </Box>
        <Box component="div" sx={{ width: "100%", pl: 1, pb: 1 }}>
          <CentrosCostosSelect
            setValue={setAsientosDetalle}
            value={asientosDetalle}
          />
        </Box>
        <Box component="div" sx={{ width: "100%", pl: 1, pb: 1 }}>
          <PlanCuentasSelect
            setValue={setAsientosDetalle}
            value={asientosDetalle}
          />
        </Box>
        <Box component="div" sx={{ width: "100%", pl: 1 }}>
          <FormControl fullWidth sx={{ marginTop: "0px" }}>
            <TextField
              value={asientosDetalle?.Descripcion}
              onChange={(ev) =>
                setAsientosDetalle({
                  ...asientosDetalle,
                  Descripcion: ev.target.value,
                })
              }
              margin="normal"
              required
              // error={isNameRepit}
              // helperText={isNameRepit ? "Nombre repetido" : ""}
              type="text"
              fullWidth
              id="Descripcion"
              // label={isNameRepit ? "Error" : "Nombre"}
              label={"Descripción"}
              name="Descripcion"
              size="small"
              // sx={{ marginBottom: isNameRepit ? -1 : 1 }}
            />
          </FormControl>
        </Box>
        <Box component="div" sx={{ width: "100%", pl: 1 }}>
          <FormControl fullWidth sx={{ marginTop: "0px" }}>
            <TextField
              value={asientosDetalle?.Debe}
              onChange={(ev) =>
                setAsientosDetalle({
                  ...asientosDetalle,
                  Debe: Number(ev.target.value),
                })
              }
              margin="normal"
              required
              // error={isNameRepit}
              // helperText={isNameRepit ? "Nombre repetido" : ""}
              type="number"
              fullWidth
              id="Debe"
              // label={isNameRepit ? "Error" : "Nombre"}
              label={"Debe"}
              name="Debe"
              size="small"
              // sx={{ marginBottom: isNameRepit ? -1 : 1 }}
            />
          </FormControl>
        </Box>
        <Box component="div" sx={{ width: "100%", pl: 1 }}>
          <FormControl fullWidth sx={{ marginTop: "0px" }}>
            <TextField
              value={asientosDetalle?.Haber}
              onChange={(ev) =>
                setAsientosDetalle({
                  ...asientosDetalle,
                  Haber: Number(ev.target.value),
                })
              }
              margin="normal"
              required
              // error={isNameRepit}
              // helperText={isNameRepit ? "Nombre repetido" : ""}
              type="number"
              fullWidth
              id="Debe"
              // label={isNameRepit ? "Error" : "Nombre"}
              label={"Haber"}
              name="Haber"
              size="small"
              // sx={{ marginBottom: isNameRepit ? -1 : 1 }}
            />
          </FormControl>
        </Box>
        <Box component="div" sx={{ width: "100%", pl: 1, pb: 1 }}>
          <FormControl fullWidth sx={{ marginTop: "0px" }}>
            <TextField
              value={asientosDetalle?.Referencia}
              onChange={(ev) =>
                setAsientosDetalle({
                  ...asientosDetalle,
                  Referencia: ev.target.value,
                })
              }
              margin="normal"
              required
              // error={isNameRepit}
              // helperText={isNameRepit ? "Nombre repetido" : ""}
              type="text"
              fullWidth
              id="Debe"
              // label={isNameRepit ? "Error" : "Nombre"}
              label={"Referencia"}
              name="Referencia"
              size="small"
              // sx={{ marginBottom: isNameRepit ? -1 : 1 }}
            />
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 1, ml: 1 }}>
          <Button
            variant="contained"
            type="button"
            sx={{ ml: 0 }}
            onClick={() => add()}
            disabled={isValidPayload()}
          >
            Agregar
          </Button>
          <Button
            variant="contained"
            type="button"
            sx={{ ml: 2 }}
            onClick={() => submit()}
            disabled={isValidPayload()}
          >
            Aceptar y cerrar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AsientoContableDetalleForm;
