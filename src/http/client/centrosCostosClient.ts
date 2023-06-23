import { get } from "../../utils/Fetch";

export const getCentrosCostosClient = async () => {
    return await get(`centrosDeCosto/get`);
}
