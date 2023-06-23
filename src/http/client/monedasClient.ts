import { get } from "../../utils/Fetch";

export const getMonedasClient = async () => {
    return await get(`monedas/get`);
}
