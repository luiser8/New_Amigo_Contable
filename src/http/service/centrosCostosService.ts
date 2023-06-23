import { ICentroDeCosto } from "../../interfaces/ICentroDeCosto";
import { getCentrosCostosClient } from "../client/centrosCostosClient";

export const getCentrosCostosService = async () => {
    let data: Array<ICentroDeCosto> = [];
    let error: string = "";
    (Promise.all([
        await getCentrosCostosClient().then((values: ICentroDeCosto[]) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as ICentroDeCosto[]];
            }
        }),
    ]).catch(error => {
        new Error(error);
    }));
    return { data, error };
}
