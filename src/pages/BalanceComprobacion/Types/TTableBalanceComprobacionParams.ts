import { ITtitleColumns } from "../../AsientosContables/Interfaces/IAsientoContable"
import { IBalanceComprobacion } from "../Interfaces/IBalanceComprobacion"

export type TTableBalanceComprobacionParams = {
    columns?: ITtitleColumns[]
    rows?: IBalanceComprobacion[]
    routing?: string
    rowsPerPage?: number
    setRowsPerPage?: Function
    page?: number
    setPage?: Function
}