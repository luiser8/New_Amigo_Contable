import { IMoneda } from "../../interfaces/IMoneda";
import { getMonedasClient } from "../client/monedasClient";

export const getMonedasService = async () => {
    let data: Array<IMoneda> = [];
    let error: string = "";
    (Promise.all([
        await getMonedasClient().then((values: IMoneda[]) => {
            if (values === undefined) {
                error = "There was a connection problem";
                return;
            }
            if (values !== null || undefined) {
                data = [...data, ...values as IMoneda[]];
            }
        }),
    ]).catch(error => {
        new Error(error);
    }));
    return { data, error };
}
