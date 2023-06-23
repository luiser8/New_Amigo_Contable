import { get, post } from "../../utils/Fetch";
import { IAsientoContable, IAsientoContableParams, IAsientoContablePayload } from "../../pages/AsientosContables/Interfaces/IAsientoContable";
import { ILibroMayor } from "../../pages/LibroMayor/Interfaces/ILibroMayor";
import { IBalanceComprobacion } from "../../pages/BalanceComprobacion/Interfaces/IBalanceComprobacion";

export const getAsientosContables = async (values: IAsientoContableParams): Promise<IAsientoContable> => {
    return await get(`asientosContables/all?FechaDesde=${values.FechaDesde}&FechaHasta=${values.FechaHasta}&IdPeriodoContable=${values.IdPeriodoContable}`);
}

export const postAsientosContables = async (data: IAsientoContablePayload): Promise<IAsientoContablePayload> => {
    return await post('asientoscontables/add', data);
}

export const getLibroMayor = async (values: IAsientoContableParams): Promise<ILibroMayor> => {
    return await get(`asientosContables/libromayor?FechaDesde=${values.FechaDesde}&FechaHasta=${values.FechaHasta}&IdPeriodoContable=${values.IdPeriodoContable}`);
}

export const getBalanceComprobacion = async (values: IAsientoContableParams): Promise<IBalanceComprobacion> => {
    return await get(`asientosContables/balance?FechaDesde=${values.FechaDesde}&FechaHasta=${values.FechaHasta}&IdPeriodoContable=${values.IdPeriodoContable}`);
}