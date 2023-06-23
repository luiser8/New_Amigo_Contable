import { IPeriodoContable } from "../../interfaces/IPeriodoContable";
import { getPeriodosContablesClient } from "../client/periodosContablesClient";

export const getPeriodosContablesService = async (Todos: number | 0, FechaDesde: string | null, FechaHasta: string | null) => {
    let data: Array<IPeriodoContable> = [];
    let error: string = "";
    (Promise.all([
        await getPeriodosContablesClient(Todos, FechaDesde, FechaHasta).then((values: IPeriodoContable[]) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as IPeriodoContable[]];
            }
        }),
    ]).catch(error => {
        new Error(error);
    }));
    return { data, error };
}
