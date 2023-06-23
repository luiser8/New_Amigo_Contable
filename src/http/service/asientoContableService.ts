import { IAsientoContable, IAsientoContableParams, IAsientoContablePayload } from "../../pages/AsientosContables/Interfaces/IAsientoContable";
import { IBalanceComprobacion } from "../../pages/BalanceComprobacion/Interfaces/IBalanceComprobacion";
import { ILibroMayor } from "../../pages/LibroMayor/Interfaces/ILibroMayor";
import { getAsientosContables, getBalanceComprobacion, getLibroMayor, postAsientosContables } from "../client/asientosContableClient";

export const getAsientoContableService = async (request: IAsientoContableParams) => {
    let data: Array<IAsientoContable> = [];
    let error: string = "";
    (Promise.all<void>([
        await getAsientosContables(request).then((values: IAsientoContable | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as IAsientoContable[]];
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}

export const getLibroMayorService = async (request: IAsientoContableParams) => {
    let data: Array<ILibroMayor> = [];
    let error: string = "";
    (Promise.all<void>([
        await getLibroMayor(request).then((values: ILibroMayor | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as ILibroMayor[]];
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}

export const getBalanceService = async (request: IAsientoContableParams) => {
    let data: Array<IBalanceComprobacion> = [];
    let error: string = "";
    (Promise.all<void>([
        await getBalanceComprobacion(request).then((values: IBalanceComprobacion | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as IBalanceComprobacion[]];
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}

export const postAsientoContableService = async (dataPosts: IAsientoContablePayload) => {
    let data: IAsientoContable = {
        IdAsiento: 0,
        IdAsientoDetalle: 0,
        NroComprobante: 0,
        NroPlanCuenta: 0,
        Moneda: "",
        FechaAsiento: ""
    };
    let error: string = "";
    (Promise.all<void>([
        await postAsientosContables(dataPosts).then((values: IAsientoContablePayload | any) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values === "Invalid Token") {
                error = values;
                return;
            }
            if (values !== null || undefined) {
                data = { ...data, ...values as IAsientoContable };
            }
        }),
    ]).catch(error => {
        return new Error(error);
    }));
    return { data, error };
}
