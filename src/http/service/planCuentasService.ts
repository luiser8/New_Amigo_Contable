import { IPlanCuenta } from "../../interfaces/IPlanCuenta";
import { getPlanCuentasClient } from "../client/planCuentasClient";

export const getPlanCuentasService = async (todos: number, filtro: string) => {
    let data: Array<IPlanCuenta> = [];
    let error: string = "";
    (Promise.all([
        await getPlanCuentasClient(todos, filtro).then((values: IPlanCuenta[]) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as IPlanCuenta[]];
            }
        }),
    ]).catch(error => {
        new Error(error);
    }));
    return { data, error };
}
