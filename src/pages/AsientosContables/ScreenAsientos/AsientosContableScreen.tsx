import { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { TMode } from "../Types/TAsientosContables";
import { authContext } from "../../../auth/useContext";
import { TypesContext } from "../../../types/Types.context";
import SnackBarCustom from "../../../components/alerts/SnackBarCustom";
import {
  IAsientoContableDetalle,
  IAsientoContablePayload,
} from "../Interfaces/IAsientoContable";
import AsientoContableForm from "../Forms/AsientoContableForm";
import Page from "../../../components/layouts/Page";
import { Box, Button, Stack, Typography } from "@mui/material";
import DrawerForms from "../../../components/drawer/DrawerForms";
import TableNuevoAsiento from "../Table/TableNuevoAsiento";
import AsientoContableDetalleForm from "../Forms/AsientoContableDetalleForm";
import moment from "moment";
import { postAsientoContableService } from "../../../http/service/asientoContableService";

const AsientosContableScreen = ({ mode }: TMode) => {
  const { getUserId } = useContext(authContext) as TypesContext;
  const [openForm, setOpenForm] = useState<boolean>(false);
  const initialDataAsientos: IAsientoContablePayload = {
    //IdPeriodoContable: 0,
    //FechaAsiento: new Date(), //moment.utc().format(),
    AsientoContableDetalle: [],
  };
  const initialDataAsientosDetalle: IAsientoContableDetalle = {
    //IdPlanCuenta: 0,
    //IdCentroDeCosto: 0,
    //IdMoneda: 0,
    Descripcion: "",
    Debe: 0,
    Haber: 0,
    Referencia: "",
    //FechaAsientoDetalle: new Date(),
  };
  //Router, params / navigate
  let { id } = useParams();
  const navigate = useNavigate();
  //Notificaciones
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  //Payload formulario
  const [asientosDetalleArray, setAsientosDetalleArray] = useState<
    IAsientoContableDetalle[]
  >([]);
  const [asientosPayload, setAsientosPayload] =
    useState<IAsientoContablePayload>();
  const [asientosDetalle, setAsientosDetalle] =
    useState<IAsientoContableDetalle>();

  const getMode = () => {
    return {
      title:
        mode === "new" ? "Nuevo asiento contable" : "Editar asiento contable",
      msj:
        mode === "new"
          ? "Asientos contables / Nuevo"
          : "Asientos contables / Editar",
      method: mode === "new" ? postAsientosContables : putAsientosContables,
    };
  };

  const resetPayload = () => {
    setAsientosPayload(initialDataAsientos);
    setAsientosDetalle(initialDataAsientosDetalle);
    setAsientosDetalleArray([]);
  };

  const isValidPayload = (): boolean => {
    return (
      asientosPayload?.IdPeriodoContable === undefined ||
      asientosPayload?.FechaAsiento === null ||
      asientosPayload?.AsientoContableDetalle === undefined
      // asientosPayload?.AsientoContableDetalle[0].IdPlanCuenta === 0 ||
      // asientosPayload?.AsientoContableDetalle[0].IdMoneda === 0 ||
      // asientosPayload?.AsientoContableDetalle[0].Debe === 0 ||
      // asientosPayload?.AsientoContableDetalle[0].Haber === 0 ||
      // asientosPayload?.AsientoContableDetalle[0].Descripcion === "" ||
      // asientosPayload?.AsientoContableDetalle[0].Referencia === "" ||
      // asientosPayload?.AsientoContableDetalle[0].FechaAsientoDetalle === new Date()
    );
  };

  const showSnackBar = () => {
    return (
      <SnackBarCustom
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        vertical="top"
        horizontal="right"
        severityOption={"success"}
        msj={"Asientos contables!"}
      />
    );
  };

  const redirect = () => {
    const timer = setTimeout(() => {
      navigate("/asientos");
    }, 2000);
    return () => clearTimeout(timer);
  };

  const addAsientoItem = () => {
    setAsientosPayload({
      ...asientosPayload,
      AsientoContableDetalle: asientosDetalleArray,
    } as IAsientoContablePayload);
    setOpenForm(false);
  };

  const getAsientosContables = async () => {
    // const { data, error } = await getCategoriesByIdService(id);
    // if (error === "Invalid Token") {
    //     setOpenSessionExpired(true);
    // }
    // if (data !== undefined || null) {
    //     setCategoryPayload({ ...categoryPayload, ...data });
    // }
  };

  const postAsientosContables = async () => {
    const { data } = await postAsientoContableService(
      asientosPayload as IAsientoContablePayload,
    );
    // if (data !== null) {
    //     setOpenSnackBar(true); resetPayload();
    // }
    resetPayload();
  };

  const putAsientosContables = async () => {
    // const { data, error } = await putCategoriesService(id, categoryPayload, userToken);
    // if (error === "Invalid Token") {
    //     setOpenSessionExpired(true);
    // }
    // if (data !== null) {
    //     setOpenSnackBar(true); resetCategoryPayload();
    // }
    // resetCategoryPayload();
    // redirect();
  };

  useEffect(() => {
    if (mode === "edit") {
      //getAsientosContables();
    } else {
      null;
    }
    return () => {};
  }, []);

  // useEffect(() => {
  //   console.log(asientosPayload)
  //   console.log(isValidPayload())
  // }, [asientosPayload]);

  return (
    <Page title={getMode().title}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={0}
        mt={-2}
      >
        <Typography variant="h5" gutterBottom>
          {getMode().msj}
        </Typography>
      </Stack>

      <Box sx={{ width: "100%" }}>
        <AsientoContableForm
          mode={mode}
          asientosPayload={asientosPayload}
          setAsientosPayload={setAsientosPayload}
          isValidPayload={isValidPayload}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 1, ml: 4 }}>
        <NavLink to="/asientos" style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button
            variant="contained"
            type="button"
            sx={{ mr: 1 }}
            LinkComponent={NavLink}
          >
            Volver
          </Button>
        </NavLink>

        <Button
          variant="contained"
          type="button"
          onClick={async () => postAsientosContables()}
          disabled={isValidPayload()}
        >
          Guardar asiento
        </Button>
        <Button
          variant="contained"
          type="button"
          sx={{ ml: 2 }}
          onClick={() => setOpenForm(true)}
          disabled={
            asientosPayload?.IdPeriodoContable === undefined ||
            asientosPayload?.FechaAsiento === null
          }
        >
          Agregar item
        </Button>
      </Box>
      <Box sx={{ width: "100%" }}>
        <DrawerForms
          open={openForm}
          setOpen={setOpenForm}
          children={
            <AsientoContableDetalleForm
              mode={mode}
              asientosDetalle={asientosDetalle}
              setAsientosDetalle={setAsientosDetalle}
              isValidPayload={isValidPayload}
              setOpenForm={setOpenForm}
              submit={addAsientoItem}
              asientosDetalleArray={asientosDetalleArray}
              setAsientosDetalleArray={setAsientosDetalleArray}
            />
          }
        />
      </Box>
      <Box sx={{ width: "100%", paddingTop: "10px" }}>
        <TableNuevoAsiento
          rows={asientosDetalleArray}
          setAsientosDetalleArray={setAsientosDetalleArray}
        />
      </Box>
      {/* SnackBar */}
      {openSnackBar ? showSnackBar() : null}
    </Page>
  );
};

export default AsientosContableScreen;
