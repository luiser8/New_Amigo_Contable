import { getCentrosCostosService } from "../service/centrosCostosService";
import { getMonedasService } from "../service/monedasService";
import { getPeriodosContablesService } from "../service/periodosContablesService";
import { getPlanCuentasService } from "../service/planCuentasService";

export const monedasDataCommon = async () => {
    return await getMonedasService();
}

export const centroCostosDataCommon = async () => {
    return await getCentrosCostosService();
}

export const planCuentasDataCommon = async (Todos = 0, Filtro = "",) => {
    return await getPlanCuentasService(Todos, Filtro);
}

export const periodosContablesDataCommon = async (Todos = 0, FechaDesde = "", FechaHasta = "") => {
    return await getPeriodosContablesService(Todos, FechaDesde, FechaHasta);
}
