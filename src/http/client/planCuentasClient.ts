import { get } from "../../utils/Fetch";

export const getPlanCuentasClient = async (todos: number | 0, filtro: string | "") => {
    return await get(`planCuentas/get?Todos=${todos}&NombreFiltro=${filtro}`);
}
