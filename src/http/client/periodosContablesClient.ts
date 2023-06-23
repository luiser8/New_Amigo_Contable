import { get } from "../../utils/Fetch";

export const getPeriodosContablesClient = async (Todos: number | 0, FechaDesde: string | null, FechaHasta: string | null) => {
    return await get(`periodosContables/all?Todos=${Todos}&FechaDesde=${FechaDesde}&FechaHasta=${FechaHasta}`);
}
