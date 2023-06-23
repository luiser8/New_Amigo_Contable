import { TAsientoForm } from "../Types/TAsientosContables";
import {
  Box,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import PeriodosContablesSelect from "../../../components/selects/PeriodosContablesSelect";

const AsientoContableForm = ({
  mode,
  asientosPayload,
  isValidPayload,
  setAsientosPayload,
}: TAsientoForm) => {
  return (
    <Grid component="div" container>
      <Grid item xs={6} component="div">
        <Box component="form" noValidate sx={{ width: "100%", pl: 2 }}>
          <Box
            component="div"
            sx={{ width: "100%", pl: 2, marginBottom: "10px" }}
          >
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Fecha del asiento"
                value={asientosPayload?.FechaAsiento}
                disablePast
                onChange={(ev) =>
                  setAsientosPayload({ ...asientosPayload, FechaAsiento: ev })
                }
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    margin="normal"
                    type="date"
                    fullWidth
                    id="FechaAsiento"
                    name="FechaAsiento"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>

          <Box component="div" sx={{ width: "100%", pl: 2 }}>
            <PeriodosContablesSelect
              setValue={setAsientosPayload}
              value={asientosPayload}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AsientoContableForm;
